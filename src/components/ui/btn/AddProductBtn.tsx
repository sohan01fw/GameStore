"use client";
import { deleteProduct } from "@/utils/Actions/Products.Action";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export function AddProductBtn() {
  return (
    <Link href="/admin/products/addproduct">
      <button className="btn glass colorful-bg text-gray-200 font-bold text-lg">
        Add product
      </button>
    </Link>
  );
}

export function DeleteProductBtn({ value }: { value: string }) {
  const [delpro, setdelpro] = useState();
  const handleDeleteProduct = async () => {
    const data = await deleteProduct(value);
    console.log(data);
    setdelpro(data);
  };
  /* console.log(delpro)
  useEffect(() => {
    console.log("deleted the product")
  }, [delpro]) */

  return (
    <div
      className="btn hover:bg-red-500 btn-sm  mt-14 "
      onClick={handleDeleteProduct}
    >
      <MdDelete
        color="white"
        fontSize={24}
        className="hover:cursor-pointer  "
      />
    </div>
  );
}
