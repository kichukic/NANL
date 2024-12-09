import dotenv from "dotenv";
import axios from "axios";
 import AOPDurl from "../API/urls.json" assert {type :"json"}
dotenv.config();


export const getAlldataId=async(solInt)=>{
try {
    let url = AOPDurl.MRPdata.baseapi+AOPDurl.MRPdata.sol+solInt+AOPDurl.MRPdata.key+process.env.key
    let data = await axios.get(url)
    return data.data.photos
} catch (error) {
    console.log(error);  
}
}


export const getPhotoData=async(solInt,id)=>{
  try {
    let dat =[]
    camdat = {}
    let url = AOPDurl.MRPdata.baseapi+AOPDurl.MRPdata.sol+solInt+AOPDurl.MRPdata.key+process.env.key
    let data = await axios.get(url)
    for(let datas of data.data.photos){  
      if(datas.id ===id){
       // let destructuredarr = (...datas.rover.cameras)
        dat.push(datas)

      }
     }
    return dat
  } catch (error) {
    
  }
}

// getAlldataId("100").then((data)=>{
//    data.forEach(element => {
//      console.log(element.id);
//    });
    
// })

getPhotoData("122",656).then((data)=>{
console.log(data);


})

