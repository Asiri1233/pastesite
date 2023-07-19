"use client";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FiCopy, FiShare2 } from "react-icons/fi";
import Banners from "@/components/Banners";

export default function ExampleClientComponent() {
  const [data, setData] = useState(null);
  const params = useParams();
  const id = params.pasteid;
  const textareaRef = useRef(null);

  const fetchPaste = async () => {
    try {
      const response = await axios.get(
        `https://rich-pink-panda-wear.cyclic.app/api/text/${id}`
      );
      const data = response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPaste();
  }, [id]);

  const handleCopyToClipboard = () => {
    textareaRef.current.select();
    document.execCommand("copy");
    toast.success("Copied to clipboard!");
  };

  if (!data) {
    return (
      <div className="w-full h-[100vh] flex-col">
        <div className="w-[100%] flex flex-row justify-center mb-10">
          <div className="flex gap-2 flex-col md:flex-row items-center justify-center">
            <Banners
              url="https://cdn.discordapp.com/attachments/1120293123185193051/1127666682257756180/10_sec_rev.gif"
            link="https://t.me/RedMarkets"
            />
            <Banners
              url="https://media.discordapp.net/attachments/1120293123185193051/1130938223238074540/With_the_long_info.gif?width=1440&height=303"
              link="https://t.me/RedConsumer"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <textarea
              readOnly
              ref={textareaRef}
              value="Loading Please Wait..."
              rows={20}
              className="outline-none border bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md border-white shadow-md rounded placeholder:text-white md:min-w-[50rem] sm:min-w-[40rem] min-w-[20rem] text-gray-300 animate-pulse"
            ></textarea>
            <div className="flex items-center gap-7 mt-2">
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Copy
              </button>
              <div className="flex items-center hover:cursor-pointer">
                <FiCopy className="mr-2" />
                <input
                  type="text"
                  value="Loading"
                  readOnly
                  className="outline-none hover:cursor-pointer bg-transparent text-gray-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const shareableLink = window.location.href;

  const copyCurrentPath = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied URL to clipboard!");
  };

  return (
    <div className="w-full h-[100%] flex-col">
      <div className="w-[100%] flex flex-row justify-center">
        <div className="flex gap-2 flex-col md:flex-row items-center justify-center mb-10">
          <Banners
            url="https://cdn.discordapp.com/attachments/1120293123185193051/1127666682257756180/10_sec_rev.gif"
            link="https://t.me/RedMarkets"
          />
          <Banners
            url="https://media.discordapp.net/attachments/1120293123185193051/1130938223238074540/With_the_long_info.gif?width=1440&height=303"
            link="https://t.me/RedConsumer"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
        <div>
          <p className="text-white text-center font-semibold border border-dotted outline-none  bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md border-white shadow-md rounded">
            ✨ARE YOU TIRED OF FALLING TO{" "}
            <span className="animate-pulse text-red-400">SCAMS?</span> <br /> 🛑
            LOOK NO FURTHER! 👀 DISCOVER THE MOST VOUCHED ✅ AND THE BEST SHOPS{" "}
            <br /> 💎When you shop through PixelMP, you can enjoy a 30% discount
            at various participating stores. <br /> Don't forget to check the
            shop descriptions for discount codes. Visit 💎
            <a href="https://pixelmp.store/" target="_blank">
              https://pixelmp.store/
            </a>
            💎
          </p>
          </div>
          <textarea
            readOnly
            ref={textareaRef}
            value={data.content}
            rows={20}
            className="outline-none border bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md border-white shadow-md rounded placeholder:text-white md:min-w-[50rem] sm:min-w-[40rem] min-w-[20rem] text-gray-300 sm:w-full md:w-auto"
          ></textarea>
          <div className="flex items-center gap-7 mt-2">
            <button
              onClick={handleCopyToClipboard}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Copy
            </button>
            <div
              className="flex items-center hover:cursor-pointer"
              onClick={copyCurrentPath}
            >
              <FiCopy className="mr-2" color="white" />
              <input
                type="text"
                value={shareableLink}
                readOnly
                className="outline-none hover:cursor-pointer bg-transparent text-gray-300 "
              />
            </div>
          </div>
          {/* <div>
          <p className="text-white text-center font-semibold border border-dotted outline-none  bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md border-white shadow-md rounded">
            ✨ARE YOU TIRED OF FALLING TO{" "}
            <span className="animate-pulse text-red-400">SCAMS?</span> <br /> 🛑
            LOOK NO FURTHER! 👀 DISCOVER THE MOST VOUCHED ✅ AND THE BEST SHOPS{" "}
            <br /> 💎When you shop through PixelMP, you can enjoy a 30% discount
            at various participating stores. <br /> Don't forget to check the
            shop descriptions for discount codes. Visit 💎
            <a href="https://pixelmp.store/" target="_blank">
              https://pixelmp.store/
            </a>
            💎
          </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
