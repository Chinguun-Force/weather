export default function Card(props) {
    console.log(props.data ,"this is condition")
    return (
        <div className={`w-[414px] h-[828px] ${props.bg} rounded-3xl backdrop-blur-none justify-self-center mt-2 flex flex-col items-center px-8 py-12`}>
            <div className="flex flex-col justify-between h-full">
                <div className="text-start">
                    <span className="text-gray-400 text-lg text-start">
                        {
                            new Date().toLocaleDateString()
                        }
                    </span>
                </div>
                <div className="flex gap-3">
                    <span className={`text-5xl font-semibold ${props.text}`}>{props.city}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-[32px] h-[32px] text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        src={props.imgUrl}
                        className="w-[274px] h-[274px] justify-self-center "
                    />
                </div>
                <div className={`bg-gradient-to-b from-${props.gradient[0]} to-${props.gradient[1]} bg-clip-text text-transparent`}>
                    <span className="text-[120px] font-extrabold leading-[100px] block">
                        {props.data}°
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src={props.condition && props.condition.icon ? props.condition.icon : "test"}
                        className="w-10 h-10"
                    />
                    <span className={props.weatherStatusClass}>
                        {props.condition && props.condition.text ? props.condition.text : "test"}
                    </span>
                </div>
                <div className="w-full flex justify-between *:w-10 *:h-10 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${props.activeButton}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${props.activeButton}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${props.activeButton}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${props.activeButton}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}