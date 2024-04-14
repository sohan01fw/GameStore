"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa6";

const ViewProducts = ({ resultData }: { resultData: any }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return resultData;
    },
  });
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {data?.data.map((data: any, index: number) => {
        return (
          <div className=" m-10 flex p-4 shadow-md">
            <div className="thumnail_pic h-auto w-auto ">
              <Image
                src={data?.product_pics[0]}
                height={200}
                width={150}
                alt="thumnail_pic"
                priority
                className="rounded-2xl"
              />
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
        );
      })}
    </div>
  );
};

export default ViewProducts;
