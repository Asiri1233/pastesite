import Banners from "@/components/Banners";
import TextArea from "@/components/TextArea";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex ">
      <div className="mx-auto mt-[2rem] ">
        <div className="flex gap-2 flex-col md:flex-row items-center ">
        <Banners url="https://i.imgur.com/gyoAm7J.jpeg" link="https://pixelmp.store"/>
        <Banners url="https://media.discordapp.net/attachments/1106796662170591353/1126278898129305650/image.png" link="https://pixelmp.store"/>

        </div>
      <div className="flex justify-center items-center mt-[8rem]">
        <div className="flex justify-center">
          <TextArea />
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
