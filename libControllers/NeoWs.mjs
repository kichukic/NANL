import dotenv from "dotenv"
import axios from "axios"
dotenv.config()

export const NeoWs=async(startDate,endDate)=>{
try {
    let NeoData= await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.key}`)

} catch (error) {
    
}
}