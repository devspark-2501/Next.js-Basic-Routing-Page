'use client' // for user interaction

import { useEffect, useState } from "react"

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default function ViewProject() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      await wait(3000)   // 3 second delay
      setLoading(false)
    }
    load()
  }, [])

  function ProjectFind() {
    window.open("https://react-movie-finder-website.netlify.app/", "_blank")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="w-20 h-20 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">      
      <div className="max-w-xl text-center bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-800">
        
        <h1 className="text-4xl font-bold text-white mb-4">
          Movie Finder (React Project)
        </h1>

        <p className="text-gray-400 mb-8">
          A movie search application built with React that allows users to 
          discover movies instantly using API integration. It features dynamic 
          search, responsive UI, and real-time movie data including posters, 
          ratings, and descriptions.
        </p>

        <button
          onClick={ProjectFind}
          className="bg-gray-950 hover:opacity-70 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          View Project
        </button>
      </div>
    </div>
  )
}