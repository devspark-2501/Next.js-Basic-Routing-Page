'use client'

import { useState } from "react"
import { BsFillSendFill } from "react-icons/bs";
// import { BsChatDotsFill } from "react-icons/bs"

export default function CircleError() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error(''); {/* will get error message from error.js file */}
    }

    return (
        <div className="">
            <button 
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:opacity-60 transition"
                onClick={() => setCrash(true)}
            >
                <BsFillSendFill size={22} />
                {/* <BsChatDotsFill size={22} /> */}
            </button>
        </div>
    )
}