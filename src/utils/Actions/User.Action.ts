import { userdata } from "@/types/global";
import axios from "axios";

export async function saveUserToDb(data:userdata):Promise<any> {
    console.log(data)
    const DataRes = await axios.post(`/api/admin/users`,data,{
        headers: {
            'Content-Type': 'application/json'
          }
    });
    
    return  
}