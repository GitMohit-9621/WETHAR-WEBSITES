 const inp=document.querySelector('.inp input')

 const search=document.querySelector(".search-icon")

 const wetherimg=document.querySelector(".all-wether-img")

 const tempreture=document.querySelector(".tempreture")

 const city1=document.querySelector(".city-name")

 const humidity=document.querySelector(".humidity-parsentege")

 const wind=document.querySelector(".wind-speed")






 async function checkwether(city){

    const api ="8a96dfdd63e43ea4ac12515dba16bc22";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`

  
    const wetherdata=await fetch(`${url}`)
    .then(response => response.json())
   
  
    tempreture.innerHTML=`${Math.round(wetherdata.main.temp -273.15)}°C`
    humidity.innerHTML=`${wetherdata.main.humidity}`
    wind.innerHTML=`${wetherdata.wind.speed}km/H`
    city1.innerHTML=`${wetherdata.name}`  




if(wetherdata.weather[0].main == "Clouds"){
    wetherimg.src="https://w7.pngwing.com/pngs/742/260/png-transparent-nimbus-clouds-cloud-sticker-smoke-clouds-atmosphere-monochrome-meteorological-phenomenon-thumbnail.png"
}
else if(wetherdata.weather[0].main == "Clear"){

wetherimg.src="https://i.pinimg.com/474x/d2/17/72/d21772f73a5c7166341bfd3d44e5cf15.jpg"

}

else if(wetherdata.weather[0].main == "Rain"){

    wetherimg.src="https://i.pinimg.com/236x/7f/53/0f/7f530f6e2583aa24c733232140dbbd55.jpg"
    
    }
    
else if(wetherdata.weather[0].main == "Mist"){

    wetherimg.src="https://i.pinimg.com/236x/2e/be/e2/2ebee201950e256e30c292dbe68701d1.jpg"
    
    }

     
else if(wetherdata.weather[0].main == "Snow"){

    wetherimg.src="https://i.pinimg.com/564x/1a/ca/7e/1aca7ee847553b82df465eccc98a29b0.jpg"
    
    }








//     switch(wetherdata.weather[0].main){
//         case "Clouds":
//             wetherimge.src="https://w7.pngwing.com/pngs/742/260/png-transparent-nimbus-clouds-cloud-sticker-smoke-clouds-atmosphere-monochrome-meteorological-phenomenon-thumbnail.png" 
// break;
//             case "Clear":
//                 wetherimge.src="https://i.pinimg.com/474x/d2/17/72/d21772f73a5c7166341bfd3d44e5cf15.jpg" 
//             break;

//             case "Rain":
//                 wetherimge.src="https://i.pinimg.com/236x/7f/53/0f/7f530f6e2583aa24c733232140dbbd55.jpg"
// break;

//             case "mist":
//                 wetherimge.src="https://i.pinimg.com/236x/2e/be/e2/2ebee201950e256e30c292dbe68701d1.jpg" 
//             break;

//             case "Snow":
//                 wetherimge.src="https://i.pinimg.com/564x/1a/ca/7e/1aca7ee847553b82df465eccc98a29b0.jpg" 
// break;

//     }
}

search.addEventListener("click",()=>{
    checkwether(inp.value);
})
