import React from "react";
import ViewProducts from "@/components/admin/ViewProducts";
import { ProductGetAction } from "@/utils/Actions/Products.Action";
import AddProductBtn from "@/components/ui/AddProductBtn";

export default async function page() {
  return (
    <div>
      <div className="heading">

        <h2 className="text-xl font-semibold text-white">Welcome to Products </h2>
      </div>
      <div className=" right-20 absolute mt-10 m-3">
        <AddProductBtn />
      </div>
      <div className=" mt-[8rem] w-[80%] ml-[5rem]  ">
        <ViewProducts /* data = {getProducts} */ />
      </div>
    </div>
  );
}
