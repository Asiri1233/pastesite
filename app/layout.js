import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import  { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pasted.live',
  description: "Fastest text sharing website out there.",
}
//
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://umaminext.vercel.app/script.js" data-website-id="85f15c21-dc7b-442c-9ce9-c5c163e246c0"></script>
      </head>
      <body className={inter.className}>
        <div className="bcImage ">
        <div className='w-full mb-6'>
        <Navbar />
        </div>
        {children}
        <div className='mt-[10rem] md:mt-0'>

        <Footer />
        </div>
        <Analytics />
        <Toaster position='top-center'/>
        </div>
        </body>
    </html>
  )
}

//bg-[url('https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=748&q=80')] relative bg-cover bg-no-repeat