import Banners from "@/components/Banners";
import TextArea from "@/components/TextArea";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex ">
      <div className="mx-auto mt-[2rem] ">
        <div className="flex gap-2 flex-col md:flex-row items-center ">
          <Banners
            url="https://cdn.discordapp.com/attachments/1120293123185193051/1127666682257756180/10_sec_rev.gif"
            link="https://t.me/RedMarkets"
          />
          <Banners
            url="https://i.imgur.com/sWHEbMR.jpg"
            link="https://t.me/stakebets"
          />
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
