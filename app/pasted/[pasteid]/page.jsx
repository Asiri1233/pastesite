"use client"
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FiCopy, FiShare2 } from 'react-icons/fi'
import Banners from '@/components/Banners'


export default function ExampleClientComponent() {
  const [data, setData] = useState(null)
  const params = useParams()
  const id = params.pasteid
  const textareaRef = useRef(null)

  const fetchPaste = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/text/${id}`)
      const data = response.data
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPaste()
  }, [id])

  const handleCopyToClipboard = () => {
    textareaRef.current.select()
    document.execCommand('copy')
    toast.success('Copied to clipboard!')
  }

  if (!data) {
    return <div>Loading...</div>
  }

  const shareableLink = window.location.href

  const copyCurrentPath = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Copied URL to clipboard!')
  }

  return (
    <div className="w-full h-screen flex-col justify-center items-center">
       <div className="flex gap-2 flex-col md:flex-row items-center">
        <Banners url="https://i.imgur.com/gyoAm7J.jpeg" link="https://pixelmp.store"/>
        <Banners url="https://imgpile.com/images/9QtPYG.gif"/>

        </div>
      <div>
        <textarea
          readOnly
          ref={textareaRef}
          value={data.content}
          rows={20}
          className="outline-none border bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md border-white shadow-md rounded placeholder:text-white w-full md:min-w-[50rem] sm:min-w-[40rem] min-w-[20rem] text-gray-300"
        ></textarea>
        <div className='flex items-center gap-7'>
        <button onClick={handleCopyToClipboard} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Copy to clipboard</button>
        <div className='flex items-center hover:cursor-pointer' onClick={copyCurrentPath}>
        <FiCopy className="mr-2" />
          <input type="text" value={shareableLink} readOnly className='outline-none hover:cursor-pointer bg-transparent text-gray-300 ' />
        </div>

        </div>
      </div>
    </div>
  )
}
