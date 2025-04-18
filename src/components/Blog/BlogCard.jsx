import { useState } from "react"
import { FaRegClock } from "react-icons/fa"

const BlogCard = ({ data }) => {
    console.log(data)
    const [isHover, setIsHover] = useState(false)
    return (
        <div>
            <div 
                className={`relative w-full h-96 rounded-xl overflow-hidden transition-transform duration-300`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHover ? "opacity-50" : "opacity-0"}`}></div>
                <img className="w-[730px] h-96 object-cover" src={data.image} alt="" />
                <h1 className="flex items-center absolute top-0 right-0 text-blue-500 font-medium bg-gray-200 px-5 py-2 rounded-bl-xl">
                    <FaRegClock className="mr-2" /> {data.read_time_minute} min read
                </h1>
                <div className="absolute bottom-0 left-0">
                    <div className="bg-white px-4 py-3">
                        <div className="flex items-center gap-2 rounded-tr-2xl">
                            <img className="rounded-3xl w-10" src={data?.author?.image} alt="" />
                            <div className="text-sm flex flex-col">
                                <h1>{data.author.full_name}</h1>
                                <h1>{Date(data.created_at).toString().slice(0, 15)}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-4 pb-5">
                        <h1 className="text-xl font-bold">{data.title.slice(0, 80)}</h1>
                        <p className={`text-sm font-normal text-gray-500 mt-2 transition-all duration-300 transform ${isHover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                            {data.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard