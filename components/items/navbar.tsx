/* eslint-disable @next/next/no-img-element */
import {
  MdOutlinePersonOutline,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-[10px] lg:py-[30px] left-0 top-0 px-1 sticky w-full bg-white">
      <div className="container p-[10px] wrapper flex justify-between items-center">
        <Link href="/">
          <div className="left flex gap-1 items center">
            <img src="/logo.png" alt="logo" />
            <span className="pt-1 text-[20px] font-bold">brand name</span>
          </div>
        </Link>
        <div className="hidden">
          <div className="middle text-[14px] font-medium uppercase flex gap-[30px] items-center">
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
          <div className="text-14px hidden text-[14px]">
            <div>
              <MdOutlineSearch className="cursor-pointer" />
              <input placeholder="SEARCH PRODUCTS" type="text" />
            </div>
            <div>
              <MdOutlinePersonOutline className="cursor-pointer" />
              <div>
                <p>user account</p>
                <p>we know you as a guest user</p>
              </div>
            </div>
            <div>
              <MdOutlineShoppingBag className="cursor-pointer" />
              <div>
                <p>your bag</p>
                <p>items has been added</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden text-[24px] lg:flex gap-[20px] items-center">
          <MdOutlineSearch className="cursor-pointer" />
          <Link href="/account">
            {" "}
            <MdOutlinePersonOutline className="cursor-pointer" />
          </Link>
          <Link href="/cart">
            <MdOutlineShoppingBag className="cursor-pointer" />
          </Link>
        </div>
        <GiHamburgerMenu className="lg:hidden text-[24px]" />
      </div>
    </header>
  );
}
