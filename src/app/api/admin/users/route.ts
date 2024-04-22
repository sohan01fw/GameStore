import { User } from "@/Backend/Models/User.model";
import { connectToDB } from "@/Backend/lib/connectToDb";
import { NextRequest, NextResponse } from "next/server";

async function createUser(req:NextRequest){
    await connectToDB()
    try {
        const {name,email,image} = await req.json();
        const findUser = await User.findOne({email:email});
        if(findUser === null){
      const x =  await User.create({
                name,
                email,
                profile_pic:image,
        }) 
        console.log("sdkse",x)
        return NextResponse.json({msg:"successfully creating user"},{status:201})
    }
        return NextResponse.json({msg:"user already exists"},{status:409})
    } catch (error) {
        
        return NextResponse.json(
            { msg: "Error while creating user data",data:error },
            { status: 500 },
          );
    }
}

export {createUser as POST}