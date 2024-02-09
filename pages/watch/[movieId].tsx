import React from "react";
import { useRouter } from "next/router";

import { IoMdArrowRoundBack } from "react-icons/io";
import useMovie from "@/hooks/useMovie";

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-black
            bg-opacity-70
            hover:visible
            ">
                <IoMdArrowRoundBack onClick={() => router.push('/')} className="text-white cursor-pointer hover:text-gray-400" size={30}/>
                <p className="text-white text-1xl md:text-2xl font-bold">
                    <span className="font-light">
                        Watching : 
                    </span>
                     <span> </span>{data?.title}
                </p>
            </nav>
            <video
            autoPlay
            controls
            className="h-full w-full"
            src={data?.videoUrl}></video>
        </div>
    )
}

export default Watch;