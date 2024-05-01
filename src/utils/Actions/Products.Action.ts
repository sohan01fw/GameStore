import axios, { AxiosRequestConfig } from "axios";
import { revalidatePath } from "next/cache";
let path = "/admin/products";

export async function ProductGetAction(): Promise<[]> {
  const DataRes = await axios.get("/api/admin/products");
  const data = await DataRes?.data.data;
  return data;
}

export async function addProducts(data: any) {
  try {
    const postProduct = await axios.postForm("/api/admin/products", data);
    if (postProduct) {
      revalidatePath(path);
    }
    return postProduct;
  } catch (error) {
    console.log("error while handling add products", error);
  }
}
export async function deleteProduct(value: string): Promise<any> {
  const requestData = {
    product_name: value, // Format the string as a property of an object
  };

  const requestOptions: AxiosRequestConfig = {
    data: requestData, // Pass the object as the `data` property
  };

  try {
    const DataRes = await axios.delete(`/api/admin/products`, requestOptions);
    const data = DataRes?.data;
    if (data) {
      revalidatePath(path);
    }
    return data;
  } catch (error) {
    console.error(error);
    // Handle any errors here
    return null;
  }
}
