export default function Search(props) {
    // console.log(props.cityList)
    return (
        <div className="max-w-[567px] max-h-[80px] rounded-full flex items-center bg-white px-[24px] py-[18px] gap-4">
            <div className="flex items-center gap-4 max-w-[567px] max-h-[80px]">
                <img
                    src="https://res.cloudinary.com/dl3wkodkk/image/upload/v1739152680/Weather%20API/search-svgrepo-com_f5yguv.svg"
                    className="w-[35px] h-[35px]"
                />
                <input placeholder="Search..." className="w-full focus:outline-none text-[32px] font-semibold"></input>
            </div>
            <div>
                {props.cityList.map((city, index) => (
                    <div key={index} className="">
                        {city}
                    </div>
                ))}
            </div>
        </div>
    )
}