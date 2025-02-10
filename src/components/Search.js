export default function Search() {
    return (
        <div className="w-[567px] h-[80px] rounded-full flex items-center bg-white px-[24px] py-[18px] gap-4">
            <img
                src="https://res.cloudinary.com/dl3wkodkk/image/upload/v1739152680/Weather%20API/search-svgrepo-com_f5yguv.svg"
                className="w-[35px] h-[35px]"
            />
            <input placeholder="Search..." className="w-full focus:outline-none text-[32px] font-semibold"></input>
        </div>
    )
}