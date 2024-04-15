import axios from "axios";

export async function ProductGetAction():Promise<any> {
    
    const DataRes = await axios.get("http://localhost:3000/api/admin/products");
    const data = await DataRes?.data
    return data
}