'use client'

import { useEffect, useState } from "react"

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default function ImageGallery() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=60`)
      const result = await res.json()

      await wait(4000)

      setData(result)
      setLoading(false)
    }

    fetchPost()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="w-20 h-20 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 p-10 grid grid-cols-4 gap-6">
      {data.map((img) => (
        <div
          key={img.id}
          className="overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(17,24,39,0.4)] group"
        >
          <img
            src={img.download_url}
            className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  )
}