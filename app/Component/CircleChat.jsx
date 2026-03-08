'use client'

import { BsChatDotsFill } from "react-icons/bs"

export default function CircleChat() {
    return (
        <div>
            <button 
                className="fixed bottom-20 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:opacity-60 transition"
            >
                <BsChatDotsFill size={22} />
            </button>
        </div>
    )
}