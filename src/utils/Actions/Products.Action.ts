import axios, { AxiosRequestConfig } from "axios";
import { revalidatePath } from "next/cache";

export async function ProductGetAction():Promise<[]> {
    const DataRes = await axios.get("/api/admin/products");
    const data = await DataRes?.data.data
    return data
}


export async function deleteProduct(value: string): Promise<any> {
    const path = '/admin/p/products';

    const requestData = {
        product_name: value // Format the string as a property of an object
    };

    const requestOptions: AxiosRequestConfig = {
        data: requestData // Pass the object as the `data` property
    };

    try {
        const DataRes = await axios.delete(`/api/admin/products`, requestOptions);
        const data = DataRes?.data;
        console.log(data);
        
        if(data){
             // Trigger revalidation for the specified path
        revalidatePath(path);

        }
       
        return data;
    } catch (error) {
        console.error(error);
        // Handle any errors here
        return null;
    }
}