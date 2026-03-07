'use client'

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
            <div className="max-w-xl text-center bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-lg">

                <h1 className="text-4xl font-bold mb-4 text-gray-100">
                    Opps!! something went wrong
                </h1>

                <p className="text-gray-400 leading-relaxed mb-8">
                    Currently, the feature that allows users to upload files and add comments on our documentation is not available. We are actively working on developing and improving this functionality, and it will be introduced in a future update to enhance collaboration and feedback. 🚀
                </p>

                <button
                    onClick={() => reset()}
                    className="mt-10 px-6 py-3 bg-gray-950 text-gray-500 border-2 shadow-gray-950 shadow-2xl font-semibold rounded-3xl hover:opacity-70"
                >
                    Try Again
                </button>

            </div>
        </div>
    )
}