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
  const [Data, setData] = useState([])  
  useEffect(() => {
  async function getWeather() {
    const response = await fetch("https://countriesnow.space/api/v0.1/countries")
    const fetchedData = await response.json()
    const dataArr = fetchedData.data
    const countries = dataArr.map(each => each.country)
    const citiesArr = dataArr.map(each => each.cities)
    const cityList = Object.values(citiesArr).flatMap(each => each)
    setData(cityList)
    console.log(cityList)
    return cityList
  }
  getWeather()}, [])
  return (
    <div className="relative">
      
      <div className="flex h-screen">
        <div className='w-1/2 bg-[#F3F4F6] flex flex-col justify-end pb-32 items-center relative'>
          <Search 
            cityList = {Data}
          />
          <Card 
            imgUrl = "https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fsun.png&w=640&q=75"
            weatherStatusClass = "text-[#FF8E27] text-xl font-bold"
            activeButton = "active:text-black"
            bg = "bg-[#F9FAFB]"
            text = "text-black"
            gradient = {bgClipText}
            gradientDirection = "b"
          />
          <div className="w-[140px] h-[140px] rounded-full bg-[#F3F4F6] absolute -right-[70px] top-[43%] border"></div>
        </div>
        <div className='w-1/2 bg-[#0F141E] flex justify-center items-end pb-32 relative'>
        <Card 
            imgUrl = "https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fmoon.png&w=640&q=75"
            weatherStatusClass = "text-[#FF8E27] text-xl font-bold"
            activeButton = "active:text-black"
            bg = "bg-[#111827]"
            text = "text-white"
            gradient = {bgClipText}
            gradientDirection = "t"
          />
        </div>
      </div>

    </div>
  );
}
