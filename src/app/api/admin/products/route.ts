import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/Backend/lib/connectToDb";
import { Product } from "@/Backend/Models/Product.model";
import { getProductData } from "@/Backend/lib/getMediaUrl";
import { cloudinary, uploads } from "@/Backend/lib/cloudinary";

connectToDB();

//create or store product in database
async function handlerPost(req: NextRequest) {
  try {
    const productData: any  = await getProductData(req);
    const {
      company,
      genre,
      price,
      product_name,
      imageUrls,
      videoUrls,
      thumbnailUrl
    } = productData?.urls;
  
    const findProduct = await Product.findOne({ product_name });
    if (!findProduct) {
      const storeProduct = await Product.create({
        company,
        genre,
        price,
        product_name,
        thumbnail:thumbnailUrl,
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
      return NextResponse.json(
        { msg: "successfully store product in db",data:storeProduct },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        { message: "Product already exists" },
        { status: 400 },
      );
    }
  } catch (error: any) {
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
export async function handlerUpdate(req:NextRequest) {
  
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
    
    // const findProduct = await Product.findOneAndUpdate()
    return NextResponse.json({data:{
      company,
      genre,
      price,
      product_name,
      imageUrls,
      videoUrls,
      thumbnailUrl,
    }})
  } catch (error) {
    return NextResponse.json(
      { msg: "Error while updating products data" },
      { status: 500 },
    );
  }
}

// Function to delete a file from Cloudinary
async function deleteFromCloudinary(url: string) {
  // Extract public_id from the Cloudinary URL
  const publicId = url.split("/").pop()?.split(".")[0];

  // Use the Cloudinary uploader.destroy method to delete the file
  if (publicId) {
    await cloudinary.uploader.destroy("jwsrejbhopxeeojscbnf");
  }
}
//delete product 
export async function handlerDelete(req:NextRequest) {
  
  try {
    const {product_name} = await req.json();
    const findProduct = await Product.findOneAndDelete({product_name})
    await deleteFromCloudinary("jwsrejbhopxeeojscbnf")
   // If product found, delete associated images and videos from Cloudinary
   if (findProduct) {
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
  }
    return NextResponse.json({msg:"successfully deleting product",data:findProduct},{status:200})
  } catch (error) {
    return NextResponse.json(
      { msg: "Error while deleting product" },
      { status: 500 },
    );
  }
}
export { handlerPost as POST, handlerGet as GET, handlerUpdate as PATCH,handlerDelete as  DELETE };
