import { Link } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FooterSection = () => {
  const year = new Date().getFullYear();

  const location = useLocation();
  return (
    <footer className="w-full border-y">
      <div className="grid grid-cols-1 lg:grid-cols-10 px-8 lg:px-0 text-sm font-medium max-w-6xl mx-auto">
        <div className="flex flex-col lg:col-span-2 lg:text-base py-8 lg:py-14">
          <h4 className=" font-bold text-rose-500">
            MSM
          </h4>
        </div>
        <div className="capitalize lg:col-span-2 py-8 lg:py-14 ">
          <ul className="flex flex-col gap-3 text-zinc-500 font-bold">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
        <div className="capitalize lg:px-20 lg:col-span-3 py-8 lg:py-14 border-y lg:border-x lg:border-y-0">
          <h4 className=" font-bold text-zinc-800 mb-3 lg:mb-10">Contact</h4>
          <ul className="flex flex-col gap-3 text-zinc-600">
            <li>12 Eziobodo Road</li>
            <li>Eziobodo</li>
            <li>Owerri</li>
            <li>
              <a href="tel:+234-801-2345-678" className="hover:underline">
                +234-801-2345-678
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:pl-20 lg:col-span-3 py-8 lg:py-14 ">
          <h4 className=" font-bold text-zinc-800 mb-3 lg:mb-10">Newsletter</h4>
          <ul className="flex flex-col gap-3 text-zinc-600">
            <li>
              Subscribe to our Newsletter to get more insider tips on the crypto
              world.
            </li>
            <li className="relative">
              <form
                action="https://formsubmit.co/bluntarrow99@gmail.com"
                method="POST"
                enctype="multipart/form-data"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://traderone.net/profile"
                />
                <input
                  className="rounded-lg transition w-full border-2 focus:border-rose-500 outline-none p-2 mt-2 mb-8"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </form>
              <button className="bg-rose-500 p-2 rounded text-white absolute top-3.5 right-1.5">
                <PaperAirplaneIcon className="h-3" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t text-xs py-2 px-8 lg:px-14">
        Copyright &#169; {year} MSM Enterprises. All rights reserved
      </div>
    </footer>
  );
};

export default FooterSection;
