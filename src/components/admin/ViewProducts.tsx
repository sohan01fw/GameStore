import {
  ProductGetAction,
  searchProduct,
} from "@/utils/Actions/Products.Action";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { DeleteProductBtn } from "../ui/btn/AddProductBtn";

const ViewProducts = async ({ query }: { query?: string }) => {
  const data = query ? await searchProduct(query) : await ProductGetAction();
  return (
    <div className="flex justify-between p-2">
      <div className="product_data">
        {data.map((data: any, index: number) => {
          return (
            <div key={index} className="bborder flex justify-between">
              <div className=" m-10 flex p-4 shadow-md">
                <div className="thumnail_pic h-auto w-auto ">
                  {/*  <Image
                    src={data?.product_pics[0]}
                    height={200}
                    width={150}
                    alt="thumnail_pic"
                    priority
                    className="rounded-2xl"
                  /> */}
                </div>
                <div className="p_name px-5">
                  <div className=" flex gap-2">
                    <h2 className="text-3xl font-bold">{data?.product_name}</h2>
                    <span className="eye_icon  h-5 hover:cursor-pointer ">
                      <FaEye fontSize={18} />
                    </span>
                  </div>

                  <h4 className="px-1 text-sm font-semibold text-gray-400">
                    {data?.company}
                  </h4>
                </div>
              </div>
              <div className="icons">
                <div className="edit btn hover:bg-gray-500  mt-14">
                  <FaEdit
                    color="white"
                    fontSize={24}
                    className="hover:cursor-pointer  "
                  />
                </div>
                {/*delte btn */}
                <DeleteProductBtn value={data?.product_name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewProducts;
