import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/Backend/lib/connectToDb";
import { Product } from "@/Backend/Models/Product.model";
import { getProductData } from "@/Backend/lib/getMediaUrl";

connectToDB();
//create or store product in database
async function handlerPost(req: NextRequest) {
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
    const findProduct = await Product.findOne({ product_name });
    if (!findProduct) {
      const storeProduct = await Product.create({
        company,
        genre,
        price,
        product_name,
        product_pics: imageUrls || [],
        product_videos: videoUrls || [],
        thumbnail: thumbnailUrl || "",
        reviews: null,
      });
      if (!storeProduct) {
        return NextResponse.json(
          { errMsg: "Product could not be stored" },
          { status: 500 },
        );
      }
      return NextResponse.json(
        { msg: "successfully store product in db" },
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
export { handlerPost as POST, handlerGet as GET };
