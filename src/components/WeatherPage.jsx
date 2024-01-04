import React, { useEffect, useState } from 'react'
import search from '../assets/search.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import clear from '../assets/clear.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'
function WeatherPage() {
    const apiKey = "d1845658f92b31c64bd94f06f7188c9c"
    const [data, setData] = useState("")
    const [city, setCity] = useState("mumbai")

    function inputHandler(event) {
        setCity(event.target.value);
    }

    useEffect(()=>{
        if(city){
            debounceFetch()
        }
    },[city])

    const debounceFetch = () => {
        clearTimeout(fetchTimeout)

        setTimeout(()=>{
            fetchWetherData()
        },500)
    }


    
    const fetchWetherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1845658f92b31c64bd94f06f7188c9c`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // fetchWetherData()


    console.log(data)
    let fetchTimeout;

    return (
        <div className='w-[370px] h-[500px] m-auto mt-[75px] p-6 rounded-md bg-gradient-to-t from-violet-700 to-violet-950'>
            {/* searchbar */}
            <div className='flex gap-3 justify-center'>
                <input type="text" placeholder='Enter an place'
                    onChange={inputHandler}
                    value={city}
                    className='w-[330px] h-10 max-w-[500px] bg-white 
                text-gray-800 outline-none border-none rounded-md 
                pl-4' />
                <div onClick={debounceFetch} className='flex justify-center items-center bg-white w-12 rounded-md'>
                    <img src={search} alt="" className='' />
                </div>
            </div>

            {/* search Data */}
            <div className='flex justify-center flex-col items-center mt-8'>
                <img src={cloud} alt="" className='w-[120px]' />
                <h1 className='text-white text-7xl font-bold font-mono'>15C</h1>
                <h1 className='text-white text-3xl font-semibold  mt-3 font-mono'>{data.name}</h1>
            </div>

            {/* extra weather info */}
            <div className='flex justify-evenly gap-8  items-center mt-8'>
                {/* weather type */}
                <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                        <img src={humidity} alt="" className='w-7 h-6' />
                        <h1 className='text-white text-2xl font-semibold'>87%</h1>
                    </div>
                    <p className='text-white text-center'>Humidity</p>
                </div>
                {/* Wind Speed */}
                <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                        <img src={wind} alt="" className='w-7 h-6' />
                        <h1 className='text-white text-2xl font-semibold'>5.14 km/h</h1>
                    </div>
                    <p className='text-white text-center'>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherPage