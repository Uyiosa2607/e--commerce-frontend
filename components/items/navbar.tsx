/* eslint-disable @next/next/no-img-element */
import {
  MdOutlinePersonOutline,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";

export default function Navbar() {
  return (
    <header className="py-[30px] left-0 top-0 px-1 sticky w-full bg-white">
      <div className=" container wrapper flex justify-between items-center">
        <div className="left flex gap-1 items center">
          <img src="/logo.png" alt="logo" />
          <span className="pt-1 text-[20px] font-bold">brand name</span>
        </div>
        <div className="middle text-[14px] font-medium uppercase flex gap-[30px] items-center">
          <p>tea collection</p>
          <p>accesories</p>
          <p>blog</p>
          <p>contact us</p>
        </div>
        <div className="right  text-[24px] flex gap-[20px] items-center">
          <MdOutlineSearch />
          <MdOutlinePersonOutline />
          <MdOutlineShoppingBag />
        </div>
      </div>
    </header>
  );
}
