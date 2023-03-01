import { img1 } from "../../assets/img";
import {
  Bars2Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Toolbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const ToggleBtn = ({ className }) => {
    return (
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={` ${className}`}
      >
        {!isOpen && <Bars2Icon className="h-8 w-8" />}
        {isOpen && <XMarkIcon className="h-8 w-8" />}
      </button>
    );
  };

  const location = useLocation();

  return (
    <nav className="p-6 border-b bg-white text-zinc-900 w-full z-50 sticky top-0 ">
      <div
        className="items-center flex w-full
      justify-between max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-16 text-zinc-500 font-semibold text-sm">
          <Link
            onClick={() => setIsOpen(false)}
            to={"/"}
            className={`text-2xl font-bold text-rose-500`}
          >
            MSM
          </Link>
          <ul className="hidden lg:flex items-center gap-6 font-semibold">
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/terms"}>Terms</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 text-sm font-semibold items-center">
          <Menu as="div" className="relative text-left">
            <div>
              <Menu.Button className="mr-2 flex gap-1 items-center">
                EN/USD
                <ChevronDownIcon className="h-4" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="p-3 absolute top-10 -right-8 mt-2 w-80 origin-top divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 gap-3  grid grid-cols-2">
                  <ul className="border-r pr-3">
                    <Menu.Item as={"li"}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-rose-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          EN
                        </button>
                      )}
                    </Menu.Item>
                  </ul>
                  <ul>
                    <Menu.Item as={"li"}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-rose-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          USD
                        </button>
                      )}
                    </Menu.Item>
                  </ul>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Link
            to={"/signup"}
            className="rounded-full hidden lg:block py-2 px-6 bg-rose-500 text-rose-50"
          >
            Sign up
          </Link>
          <Link
            to={"/login"}
            className="rounded-full hidden lg:block py-2 px-6 border border-zinc-500"
          >
            Login
          </Link>

          <ToggleBtn className="lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
