import { userdata } from "@/types/global";
import axios from "axios";

export async function saveUserToDb(data:userdata):Promise<void> {
    await axios.post(`/api/admin/users`,data,{
        headers: {
            'Content-Type': 'application/json'
          }
    });
    
    
}
export async function getAllUsers():Promise<[]>{
    const fetchUsers = await axios.get(`/api/admin/users`);
    const resUsers = fetchUsers?.data.data;
    return resUsers
}