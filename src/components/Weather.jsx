import React, { useState } from 'react'
import'./weather.css'
const api= "47edb441df396a9d25e40d1168c9ded7"
   
function Weather() {

  const[city,newcity]=useState("mumbai")
  const[temp,settemp]=useState("30°C")
  const[weatherr,setweather]=useState("sunny")

    const currentDate = new Date();
    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;


const   search= async ()=>{
 const element=document.getElementsByClassName('searchbar')
 const city=element[0].value
//  console.log("city"+city);
 if(element[0].value==""){
    return 0
 }
 else
 {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
    const response=await fetch(url)
    const data = await response.json()
    console.log(data);
    newcity(data.name)
    settemp(data.main.temp)
    setweather(data.weather[0].main)
 }


}
  
  return (
    <div className='app'>
    <div className="main">

    <input type="text" className='searchbar'  placeholder='search..'/>
    <div className="button-c">
    <button className='but' onClick={search}>search</button>

    </div>

<div className="locationbox">
    <h2 className='city'>{city}</h2>
    <p className='date'>{formattedDate}</p>
    <h2 className='temp'>{temp}</h2>
    <h2 className='weather'>{weatherr}</h2>
</div>
    </div>
    </div>
  )
}

export default Weather
