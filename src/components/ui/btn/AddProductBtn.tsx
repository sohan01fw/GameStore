"use client"
import { deleteProduct } from '@/utils/Actions/Products.Action'
import React from 'react'
import { MdDelete } from 'react-icons/md'

export function AddProductBtn() {
  return (
    <div><button className="btn glass colorful-bg text-gray-200 font-bold text-lg">Add product</button></div>
  )
}

export function DeleteProductBtn({value}:{value:string}){
  const handleDeleteProduct = async () =>{
      await deleteProduct(value)
  } 
  return(
    <div className="btn hover:bg-red-500 btn-sm  mt-14 " onClick={handleDeleteProduct}>
      <MdDelete color="white" fontSize={24} className="hover:cursor-pointer  "  />
      </div>
  )
}

