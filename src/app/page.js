'use client'

import Search from "@/components/Search";
import Logo from "@/components/Logo";
import Card from "@/components/Card";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const bgClipText = [
    "[#111827]", "[#6B7280]"
  ]
  const bgClipTextNight = [
    "gray-400", "gray-200"
  ]
  const [cityTemp, setCityTemp] = useState([null])
  const [Data, setData] = useState([])  
  const [selectedCity, setSelectedCity] = useState("Ulan bator")
  useEffect(() => {
  async function getWeather() {
    const response = await fetch("https://countriesnow.space/api/v0.1/countries")
    const fetchedData = await response.json()
    const dataArr = fetchedData.data
    const citiesArr = dataArr.map(each => each.cities)
    const cityList = Object.values(citiesArr).flatMap(each => each)
    setData(cityList)
    console.log(cityList)
    return cityList
  }
  getWeather()}, [])
  useEffect(() => {
    async function getCityTemp() {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ae69ce582a9a453790694750251302&q=${selectedCity}`)
      const fetchedData = await response.json()
      console.log(fetchedData, "fetchedData")
      setCityTemp(fetchedData.forecast.forecastday[0].day)
      return fetchedData
    }
    getCityTemp()
  },[selectedCity])
  console.log(cityTemp, "this is city temp")
  return (
    <div className="relative truncate">
      
      <div className="flex h-screen">
        <div className='w-1/2 bg-[#F3F4F6] flex flex-col justify-end pb-32 items-center relative'>
          <Search 
            cityList = {Data}
            setSelectedCity = {setSelectedCity}
          />
          <Card 
            imgUrl = "https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fsun.png&w=640&q=75"
            weatherStatusClass = "text-[#FF8E27] text-xl font-bold"
            activeButton = "active:text-black"
            bg = "bg-[#F9FAFB]"
            text = "text-black"
            gradient = {bgClipText}
            gradientDirection = "t"
            data = {cityTemp.maxtemp_c}
            city = {selectedCity}
            condition = {cityTemp.condition}
          />
          <div className="w-[140px] h-[140px] rounded-full bg-[#F3F4F6] absolute -right-[70px] top-[43%] border"></div>
        </div>
        <div className='w-1/2 bg-[#0F141E] flex flex-col justify-end pb-32 items-center relative'>
        <Card 
            imgUrl = "https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fmoon.png&w=640&q=75"
            weatherStatusClass = "text-[#FF8E27] text-xl font-bold"
            activeButton = "active:text-white"
            bg = "bg-[#111827]"
            text = "text-white"
            gradient = {bgClipTextNight}
            gradientDirection = "t"
            data = {cityTemp.mintemp_c}
            city = {selectedCity}
            condition = {cityTemp.condition}
          />
        </div>
      </div>

    </div>
  );
}
