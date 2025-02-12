'use client'

import Search from "@/components/Search";
import Logo from "@/components/Logo";
import Sun from "@/components/Sun";

export default function Home() {
  return (
    <div className="relative">
      
      <div className="flex h-screen">
        <div className='w-1/2 bg-[#F3F4F6] p-28 relative'>
          <Search />
          <Sun/>
          <div className="w-[140px] h-[140px] rounded-full bg-[#F3F4F6] absolute -right-[70px] top-[43%] border"></div>
        </div>
        <div className='w-1/2 bg-[#0F141E]'>
        </div>
      </div>

    </div>
  );
}
