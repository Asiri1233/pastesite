import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import  { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PasteFree',
  description: "Pasting website for G's",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[url('https://images.unsplash.com/photo-1579800790234-cb5bd473ebe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80')] relative bg-cover ">
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