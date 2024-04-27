import { User } from "@/Backend/Models/User.model";
import { connectToDB } from "@/Backend/lib/connectToDb";
import { UpdateQuery } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connectToDB()
async function createUser(req:NextRequest){
    
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
async function updateUser(req:NextRequest){
    try {
        const {name,email,role} = await req.json();
        if(!email){
            return NextResponse.json(
                { msg: "Email is not provided to delete user" },
                { status: 400 },
              );
        }
        let updatetask:UpdateQuery<any> = {}

        if(name) updatetask.name = name
        if(role) updatetask.role = role
        const upuser = await User.findOneAndUpdate({email},updatetask,{new:true})
        return NextResponse.json({msg:"successfully updating  user"},{status:200})
    } catch (error) {
        return NextResponse.json(
            { msg: "Error while updating user data",data:error },
            { status: 500 },
          );
    }
}
async function getAllUsers(req:NextRequest){
  
    try {
        const getUsers = await User.find()
        if(!getUsers){
            return NextResponse.json({msg:"no user is in db"},{status:404})
        }
        return NextResponse.json({msg:"successfully getting all users",data:getUsers},{status:200})
    } catch (error) {
        return NextResponse.json({msg:"Error while fetching user data",data:error},{status:500})
    }
}
export {createUser as POST,getAllUsers as GET,updateUser as PATCH}