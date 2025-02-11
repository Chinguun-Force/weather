'use client'

import Search from "@/components/Search";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex h-screen">
        <div className='w-1/2 bg-[#F3F4F6] p-40'>
        <Search/>
        {/* <Logo/> */}
        </div>
        <div className='w-1/2 bg-[#0F141E]'>
        </div>
    </div>
  );
}
