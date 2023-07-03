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
        <div className="bcImage">
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

//bg-[url('https://images.unsplash.com/photo-1527064563585-6c7b2c1c3690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1231&q=80')] relative bg-cover bg-no-repeat