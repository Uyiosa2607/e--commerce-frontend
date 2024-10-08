/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MdOutlinePersonOutline,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-[4px] lg:py-5 left-0 top-0 px-1 sticky w-full bg-white z-50 overflow-x-clip">
      <div className="container p-[10px] wrapper flex justify-between items-center">
        <Link href="/">
          <div className="left flex gap-1 items center">
            <img src="/logo.png" alt="logo" />
            <span className="pt-1 text-[20px] font-bold">brand name</span>
          </div>
        </Link>
        <div className="">
          <div className="hidden middle text-[14px] font-medium uppercase lg:flex gap-[30px] items-center">
            <Link href="/collection">
              <p>tea collections</p>
            </Link>
            <Link href="#">
              <p>accesories</p>
            </Link>
            <Link href="#">
              <p>blog</p>
            </Link>
            <Link href="#">
              <p>contact us</p>
            </Link>
          </div>
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "transform translate-x-0" : "transform translate-x-full"
            }  lg:hidden px-[8px] flex flex-col gap-3 text-[14px] absolute top-[7vh] pt-2 right-0 h-screen bg-white w-[60%]`}
          >
            <Link href="/account">
              <div className="flex items-center gap-1">
                <MdOutlinePersonOutline className="cursor-pointer  text-[30px]" />
                <div>
                  <p className="uppercase text-[10px] font-[600]">
                    user account
                  </p>
                  <p className="text-[11px] text-gray-400">
                    we know you as a guest user
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/cart">
              <div className="flex items-center gap-1">
                <MdOutlineShoppingBag className="cursor-pointer text-[30px]" />
                <div>
                  <p className="uppercase text-[10px] font-[600]">your bag</p>
                  <p className="text-[11px]  text-gray-400">
                    items has been added
                  </p>
                </div>
              </div>
            </Link>
            <div className="w-[80%] mx-auto my-[10px] bg-gray-300 h-[1px]"></div>
            <div className="flex flex-col gap-3 text-[12px] font-[500] pl-[12px]">
              <Link href="/collection">
                <p className="uppercase">tea collections</p>
              </Link>
              <p className="uppercase">accesories</p>
              <p className="uppercase">blog</p>
              <p className="uppercase">contact us</p>
            </div>
          </div>
        </div>

        <div className="hidden text-[24px] lg:flex gap-[20px] items-center">
          <MdOutlineSearch className="cursor-pointer" />
          <Link href="/account">
            <p>
              <MdOutlinePersonOutline className="cursor-pointer" />
            </p>
          </Link>
          <Link href="/cart">
            <p>
              <MdOutlineShoppingBag className="cursor-pointer" />
            </p>
          </Link>
        </div>
        {isOpen ? (
          <AiOutlineClose
            onClick={handleNavbar}
            className="lg:hidden text-[24px]"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleNavbar}
            className="lg:hidden text-[24px]"
          />
        )}
      </div>
    </header>
  );
}
