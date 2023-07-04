import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import toast, { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PasteFree',
  description: "Pasting website for G's",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[url('https://dynamicwallpaper.club/landing-vids/1.png')] relative bg-no-repeat">
        <div className='w-full'>
        <Navbar />
        </div>
        {children}
        <Footer />
        <Toaster position='top-center'/>
        </div>
        </body>
    </html>
  )
}

//bg-[url('https://dynamicwallpaper.club/landing-vids/1.png')] relative bg-cover bg-no-repeat