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
            url="https://cdn.discordapp.com/attachments/1087681487408730144/1170978932187742279/DALLE_2023-11-06_10.57.31_-_Refine_the_logo_for_Stake_Bets_a_sports_betting_platform_with_a_modern_and_sleek_design_that_conveys_the_excitement_of_sports_betting._The_logo_sh_1_1.png?ex=655b021d&is=65488d1d&hm=f6df179688595120a114bf2747a8e5504e802411b436f2e685c73d74617f5164&"
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
