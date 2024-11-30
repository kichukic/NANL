APOD Function(Astronomy Picture of the Day )
-----------------

To utilize APOD functions of NASA'S API you have to call the library like this:

- [x]  npm i aerolib 

npm source |
:-----------
https://www.npmjs.com/package/aerolib

async/await
___________

const data =  await aerolib.getAPODdata()
console.log(data.copyright)
        console.log(data.date)
             console.log(data.explanation)

promises
_________
aerolib.getAPODdata.then((data)=>{
    console.log(data)
})



the data extension includes datas like this :-

copyright : copy right signatuers
date : date of the photography
explanation : explanation of the picture
hdurl : the HD Image 
media_type : type of media present in the url
service_version : versioning
title : title of the image
url : image url of the picture 

we can access the extension functions like this 
getAPODdata.then((data)=>{
    console.log(data.copyright)
        console.log(data.date)
             console.log(data.explanation)
})

