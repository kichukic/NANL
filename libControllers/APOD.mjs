import dotenv from "dotenv"
import axios from "axios"
import AOPDurl from "../API/urls.json" assert {type : "json"}

dotenv.config()
export const getAPODdata=async()=>{
    try {
        let data = await axios.get(AOPDurl.urldata.APOD+process.env.key)
        console.log(data.data);
        return data.data
    } catch (error) {
      console.log(error.response.data); 
    }
}

