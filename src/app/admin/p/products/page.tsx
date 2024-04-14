import React from "react";
import { useQuery } from "@tanstack/react-query"; // Correct import statement
import axios from "axios";
import ViewProducts from "@/components/admin/ViewProducts";

export default async function page() {
  const Data = await axios.get("http://localhost:3000/api/admin/products");
  const result = await Data?.data;

  return (
    <div>
      <ViewProducts resultData={result} />
    </div>
  );
}
