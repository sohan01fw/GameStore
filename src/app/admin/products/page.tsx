import React, { Suspense, useState } from "react";
import ViewProducts from "@/components/admin/ViewProducts";
import dynamic from "next/dynamic";

const SearchInput = dynamic(()=>
  import("@/components/ui/SearchInput"),{
    loading: () => <p>Loading....</p>
  })
const AddProductBtn = dynamic(()=>
    import("@/components/ui/btn/AddProductBtn").then((mod)=> mod.AddProductBtn),{
      loading: () => <p>Loading....</p>
    })

export default async function page({searchParams}:{searchParams?:{search?: string}}) {
  const query = searchParams?.search || '';
  return (
    <div>
      <div className="heading">
        <h2 className="text-xl font-semibold text-white">
          Welcome to Products
        </h2>
      </div>
      <div className="userui flex mt-10 m-3 w-[95%] justify-between">
        <div className="searchinput ml-10"><SearchInput  /></div>
        <div className="">
        <AddProductBtn />
      </div>
      </div>
      <div className=" mt-[8rem] w-[80%] ml-[5rem]">
        <Suspense fallback={ <div className="skeleton w-full h-24"></div>}>
          <ViewProducts query ={query}  />
        </Suspense>
      </div>
    </div>
  );
}
