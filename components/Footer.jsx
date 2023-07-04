import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">PasteFree <a href="https://t.me/WRestocker" target='_blank' className="hover:underline">Pixel™</a>.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="mr-4 text-white md:mr-6">Home</a>
            </li>
            <li>
              <a href="https://t.me/WRestocker" target='_blank' className="mr-4 text-white md:mr-6">Buy Slot</a>
            </li>
            <li>
              <a href="#" className="mr-4 text-white  md:mr-6">Stats</a>
            </li>
            <li>
              <a href="https://t.me/WRestocker" target="_blank" className="text-white">Telegram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
