import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/Backend/lib/connectToDb";
import { Iproduct } from "@/Backend/Types/server";
import { Product } from "@/Backend/Models/Product.model";
import { getProductData } from "@/Backend/lib/getMediaUrl";

connectToDB();
//create or store product in database
async function handler(req: NextRequest) {
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
          { status: 500 }
        );
      }
      return NextResponse.json(
        { msg: "successfully store product in db" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Product already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json({ msg: "success" });
  } catch (error: any) {
    return NextResponse.json({ errMsg: error.message }, { status: 500 });
  }
}
export { handler as POST };
