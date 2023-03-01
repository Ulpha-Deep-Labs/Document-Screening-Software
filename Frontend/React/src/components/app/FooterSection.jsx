import { Link } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLocation } from "react-router-dom";

const FooterSection = () => {
  const year = new Date().getFullYear();

  const [coins, setCoins] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
    )
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);

  const location = useLocation()
  return (
    location.pathname!='/' &&  <footer className="w-full border-y">
      <div className="grid grid-cols-1 lg:grid-cols-10 px-8 lg:px-0 text-sm font-medium max-w-6xl mx-auto">
        <div className="flex flex-col lg:col-span-2 lg:text-base py-8 lg:py-14">
          <h4 className=" font-bold text-rose-500">
            Trader<span className="text-zinc-600">One</span>
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
            <li>43 Webster Lane</li>
            <li>Brooklyn</li>
            <li>Newyork</li>
            <li>
              <a href="tel:+1-305-632-203" className="hover:underline">
                +1-305-632-203
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
      <div className="border-t text-xs py-2 px-8 lg:px-14 mb-8">
        Copyright &#169; {year} TraderOne Enterprises. All rights reserved
      </div>
      {coins && (
        <div className="fixed bottom-0 z-[100]">
          <Marquee
            speed={50}
            loop={0}
            className="border-t bg-white text-xs py-2"
          >
            <ul className="flex">
              {coins.map((coin) => (
                <li className="flex gap-1 px-6">
                  <img src={coin.image} alt="" className="h-4 w-4" />
                  {coin.name}{" "}
                  <span className="uppercase text-zinc-500">
                    [{coin.symbol}]
                  </span>{" "}
                  <span className="text-zinc-800 font-semibold">
                    ${coin.current_price}
                  </span>
                  <span
                    className={`${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    } font-medium`}
                  >
                    {`${
                      coin.price_change_percentage_24h >= 0 ? "+" : ""
                    }${coin.price_change_percentage_24h.toFixed(2)}`}
                    %
                  </span>
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
      )}
    </footer>
  );
};

export default FooterSection;
