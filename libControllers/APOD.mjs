import dotenv from "dotenv"
import axios from "axios"


dotenv.config()

export const getAPODdata=async()=>{
    try {
        let data = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.key}`)
       return data
    } catch (error) {
      console.log(error.response.data); 
    }
}

//getAPODdata()

getAPODdata()
