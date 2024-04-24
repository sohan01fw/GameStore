import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/Backend/lib/connectToDb";
import {
  IReview,
  Iproduct,
  Product,
  genres,
} from "@/Backend/Models/Product.model";
import { getProductData } from "@/Backend/lib/getMediaUrl";
import { cloudinary, uploads } from "@/Backend/lib/cloudinary";
import { FilterQuery, UpdateQuery } from "mongoose";
import { revalidatePath } from "next/cache";

connectToDB();

//create or store product in database
async function handlerPost(req: NextRequest) {
  try {
    const productData: any = await getProductData(req);
    if (productData && productData?.urls) {
      const {
        company,
        genre,
        price,
        product_name,
        imageUrls,
        videoUrls,
        thumbnailUrl,
      } = productData?.urls;

      const findProduct = await Product.findOne({ product_name });

      if (!findProduct) {
        // Continue with storing the product

        const storeProduct = await Product.create({
          company,
          genre,
          price,
          product_name,
          thumbnail: thumbnailUrl,
          product_pics: imageUrls || [],
          product_videos: videoUrls || [],
          reviews: null,
        });

        if (!storeProduct) {
          return NextResponse.json(
            { errMsg: "Product could not be stored" },
            { status: 500 },
          );
        }

        let path = "/admin/p/products";
        revalidatePath(path);

        return NextResponse.json(
          { msg: "successfully store product in db", data: storeProduct },
          { status: 201 },
        );
      } else {
        return NextResponse.json(
          { message: "Product already exists" },
          { status: 400 },
        );
      }
    } else {
      return NextResponse.json(
        { message: "Product data is empty or urls property is not defined" },
        { status: 400 },
      );
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ errMsg: error.message }, { status: 500 });
  }
}
//Read or fetching all product from database
async function handlerGet(req: NextRequest): Promise<NextResponse<object>> {
  try {
    const findAllProducts = await Product.find();
    if (findAllProducts.length === 0) {
      return NextResponse.json(
        { message: "No product found in store" },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { message: "successfully fetched all products", data: findAllProducts },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { msg: "Error while fetching products data" },
      { status: 500 },
    );
  }
}
//update product information or data
export async function handlerUpdate(req: NextRequest) {
  try {
    const productData: any = await getProductData(req);
    const {
      company,
      genre,
      price,
      product_name,
      imageUrls,
      videoUrls,
      thumbnailUrl,
    } = productData?.urls;

    // Define the update object
    const updateObject: UpdateQuery<Iproduct> = {};

    // Check if each field exists and add it to the update object
    if (company) updateObject.company = company;
    if (genre) updateObject.genre = genre;
    if (price) updateObject.price = price;
    if (product_name) updateObject.product_name = product_name;

    // If there are image or video URLs, construct the $push object
    if (imageUrls.length > 0 || videoUrls.length > 0) {
      const pushObject: UpdateQuery<Iproduct> = {};
      if (imageUrls.length > 0) pushObject.product_pics = { $each: imageUrls };
      if (videoUrls.length > 0)
        pushObject.product_videos = { $each: videoUrls };
      updateObject.$push = pushObject;
    }

    // Perform the update operation
    const updateProduct = await Product.findOneAndUpdate(
      { product_name } as FilterQuery<Iproduct>,
      updateObject,
      { upsert: true, new: true },
    );

    return NextResponse.json(
      { msg: "successfully update the product", data: updateProduct },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Error while updating products data" },
      { status: 500 },
    );
  }
}

// Function to delete a file from Cloudinary
/* async function deleteFromCloudinary(url: string) {
  // Extract public_id from the Cloudinary URL
  const publicId = url.split("/").pop()?.split(".")[0];

  // Use the Cloudinary uploader.destroy method to delete the file
  if (publicId) {
    await cloudinary.uploader.destroy("jwsrejbhopxeeojscbnf");
  }
} */
//delete product
export async function handlerDelete(req: NextRequest) {
  try {
    const {product_name} = await req.json();
    const findProduct = await Product.findOneAndDelete({ product_name });
    // If product found, delete associated images and videos from Cloudinary
    //this is for specific image and video to be deleted
    /*    if (findProduct) {
    //delte thumnail from cloudinary
    if(findProduct.thumbnail){
      await deleteFromCloudinary("rjcpquyzdal4xptbvlla")
    }
    // Delete images from Cloudinary
    if (findProduct.product_pics && findProduct.product_pics.length > 0) {
      for (const imageUrl of findProduct.product_pics) {
        await deleteFromCloudinary(imageUrl);
      }
    }

    // Delete videos from Cloudinary
    if (findProduct.product_videos && findProduct.product_videos.length > 0) {
      for (const videoUrl of findProduct.product_videos) {
        await deleteFromCloudinary(videoUrl);
      }
    }
  } */

    if (findProduct) {
      await cloudinary.api.delete_resources_by_prefix(product_name, {
        type: "upload",
        resource_type: "image",
      });
      await cloudinary.api.delete_resources_by_prefix(product_name, {
        type: "upload",
        resource_type: "video",
      });
    }
    return NextResponse.json(
      { msg: "successfully deleting product",/*  data: findProduct  */},
      { status: 200 },
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { msg: "Error while deleting product" },
      { status: 500 },
    );
  }
}
export {
  handlerPost as POST,
  handlerGet as GET,
  handlerUpdate as PATCH,
  handlerDelete as DELETE,
};
