// import "./globals.css"
// import NavBar from "./Component/NavBar";
// import Footer from "./Component/Footer";

export const metadata = {
  title: "My Website",
  // description: "Created with Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}