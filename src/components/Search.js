import { useState } from "react"

export default function Search(props) {
    const [filteredCity, setFilteredCity] = useState([])
    const [searchDisplay,setSearchDisplay] = useState("hidden")
    const [inputValue, setInputValue] = useState("")
    const onSearchValue = (e) => {
        setInputValue(e.target.value)
        const filteredCity = props.cityList.filter(city => city.toLowerCase().startsWith(e.target.value.toLowerCase()))
        console.log(filteredCity)
        setFilteredCity(filteredCity.slice(0, 4))
        setSearchDisplay("flex")
        if(e.target.value === "") {
            setSearchDisplay("hidden")
        }
    }
    const selectCity = (index) => {
        props.setSelectedCity(filteredCity[index])
        setInputValue("")
        setSearchDisplay("hidden")
    }
    // console.log(props.cityList)
    return (
        <div className="max-w-[567px] max-h-[80px] rounded-full flex flex-col gap-8 items-center bg-white px-[24px] py-[18px] ">
            <div className="flex items-center gap-4 max-w-[567px] max-h-[80px]">
                <img
                    src="https://res.cloudinary.com/dl3wkodkk/image/upload/v1739152680/Weather%20API/search-svgrepo-com_f5yguv.svg"
                    className="w-[35px] h-[35px]"
                />
                <input
                    placeholder="Search..."
                    className="w-full focus:outline-none text-[32px] font-semibold text-black"
                    onChange={onSearchValue}
                    value={inputValue}
                >
                </input>
            </div>
            <div className={`rounded-xl shadow-lg bg-white opacity-80 w-full text-black text-2xl py-6 flex-col gap-4 ${searchDisplay} z-10`}>
                {filteredCity.map((city, index) => (
                    <div 
                        key={index} 
                        className="flex hover:bg-gray-200 px-6 h-12 items-center gap-2"
                        onClick={() => selectCity(index)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 w-8 h-8`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>{city}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}