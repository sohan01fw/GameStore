import { Product } from "@/Backend/Models/Product.model";
import { NextRequest, NextResponse } from "next/server"

//search product api
export async function handlerSearch(req:NextRequest){
    try {
        const search:any = req.nextUrl.searchParams.get("search");
        const searchQuery = {
            $or: [
              { product_name: { $regex: new RegExp(search, 'i') } },
              { company: { $regex: new RegExp(search, 'i') } },
            ],
          }; // Case-insensitive search
        const searchproduct = await Product.find(searchQuery).limit(10);
        return NextResponse.json({data:searchproduct},{status:200})
    } catch (error) {
        console.log(error)
       return NextResponse.json({msg:"errro while searching product"},{status:500})
    }
  }


  export {handlerSearch as GET}