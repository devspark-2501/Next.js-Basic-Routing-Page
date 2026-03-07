// import "./globals.css"
// import NavBar from "./Component/NavBar"
// import Footer from "./Component/Footer"

export const metadata = {
  title: {
    default: "Project | DevSpark Website"
    // template: "DevSpark Website"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}