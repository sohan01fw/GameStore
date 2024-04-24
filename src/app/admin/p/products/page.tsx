import React, { Suspense } from "react";
import ViewProducts from "@/components/admin/ViewProducts";
import { AddProductBtn } from "@/components/ui/btn/AddProductBtn";

export default async function page() {
  return (
    <div>
      <div className="heading">
        <h2 className="text-xl font-semibold text-white">
          Welcome to Products
        </h2>
      </div>
      <div className=" right-20 absolute mt-10 m-3">
        <AddProductBtn />
      </div>
      <div className=" mt-[8rem] w-[80%] ml-[5rem]">
        <Suspense fallback={ <div className="skeleton w-full h-24"></div>}>
          <ViewProducts />
        </Suspense>
      </div>
    </div>
  );
}
