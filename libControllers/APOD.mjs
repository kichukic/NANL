import dotenv from "dotenv"
import axios from "axios"
import aerolib from "aerolib"


aerolib.getAPODdata().then((data)=>{

})


dotenv.config()

export const getAPODdata=async()=>{
    try {
        let data = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.key}`)
        console.log(data.data);
        
        return data.data
    } catch (error) {
      console.log(error.response.data); 
    }
}


getAPODdata()
