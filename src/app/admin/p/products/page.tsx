import React from "react";
import { useQuery } from "@tanstack/react-query"; // Correct import statement
import axios from "axios";

export default async function page() {
  const resData = await axios.get("http://localhost:3000/api/admin/products");
  const x = await resData?.data;
  console.log(x);
  return <div>{/* Render product data here using 'data' */}ss</div>;
}
