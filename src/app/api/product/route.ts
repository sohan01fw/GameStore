import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/Backend/lib/connectToDb";
import { Iproduct } from "@/Backend/Types/server";
import { Product } from "@/Backend/Models/Product.model";

connectToDB();
//create or store product in database
async function POST(req: NextRequest) {
  try {
    const product = (await req.json()) as Iproduct;
    if (!product) {
      return NextResponse.json(
        { errMsg: "Please provide product details" },
        { status: 400 }
      );
    }
    const {
      company,
      genre,
      price,
      product_name,
      product_pics,
      product_videos,
      thumnail,
      reviews,
    } = product;
    const findProduct = await Product.findOne({ product_name });
    if (!findProduct) {
      const storeProduct = await Product.create({
        company,
        genre,
        price,
        product_name,
        product_pics: product_pics || [],
        product_videos: product_videos || [],
        thumnail,
        reviews,
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
  } catch (error) {
    return NextResponse.json({ errMsg: error }, { status: 500 });
  }
}
