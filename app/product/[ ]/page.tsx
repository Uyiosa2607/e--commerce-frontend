/* eslint-disable @next/next/no-img-element */
import {
  FaGlobe,
  FaShoppingBag,
  FaLeaf,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SlCup } from "react-icons/sl";
import { PiBowlSteam } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import AdsCard from "@/components/items/AdsCard";
import Link from "next/link";

export default function Product() {
  return (
    <main>
      <section className="container p-[10px] flex flex-col lg:flex-row">
        <div className="flex-1">
          <img
            className="object-cover h-[393px] w-[100%] lg:w-[560px] lg:h-[507px]"
            src="/product-image.png"
            alt="product image"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="text-[30px] capitalize font-[600] lg:w-[70%] leading-tight">
            ceylon ginger cinamon chai tea
          </h4>
          <span className="text-[14px] mt-[15px]">
            a lovely warming chai tea with ginger cinamon flavours
          </span>
          <div className="flex items-center text-[16px] justify-between lg:w-[60%] mt-[30px]">
            <span className="flex gap-1 items-center">
              <FaGlobe />
              <p>Origin: Iran</p>
            </span>
            <span className="flex gap-1 items-center">
              <FaShoppingBag />
              <p>Organic</p>
            </span>
            <span className="flex gap-1 items-center">
              <FaLeaf />
              <p>Vegan</p>
            </span>
          </div>
          <span className="text-[40px] mt-[20px] mb-[8px] font-bold">
            €3.90
          </span>
          <div className="pt-4">
            <span className="text-sm font-[500] mb-[5px]">variants</span>
            <div className="flex items-center my-2 justify-between text-[50px] overflow-x-scroll lg:w-[80%] ">
              <img
                className="w-[84px] h-[100px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[100px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[100px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[100px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[100px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
            </div>
            <div className="flex gap-8 lg:gap-6 items-center justify-center lg:justify-normal lg:items-start text-[14px] mt-[50px] bottom-2">
              <span className="flex items-center gap-4">
                <FaPlus className="text-[12px]" />
                <p className="text-[20px] font-[500]">1</p>
                <FaMinus className="text-[12px]" />
              </span>
              <Link href="/cart">
                <button className="uppercase text-[12px] bg-black text-white py-[10px] px-9">
                  <span className="flex items-center gap-1">
                    <MdOutlineShoppingBag />
                    add to bag
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-[20px] px-[10px] flex flex-col lg:flex-row lg:gap-3 text-[14px]">
          <div className="flex-1">
            <p className="text-[32px] font-medium mb-[10px]">
              Steeping instructions
            </p>
            <span className="flex gap-1 items-center">
              <SlCup />
              <p>
                <b className="uppercase font-medium">serving size:</b> 2 tsp per
                cup
              </p>
            </span>
            <div className="w-[180px] ml-[10px] my-[8px] h-[2px] bg-gray-300"></div>
            <span className="flex gap-1 items-center">
              <PiBowlSteam />
              <p>
                <b className="uppercase font-medium">water temparature:</b> 100C
              </p>
            </span>
            <div className="w-[180px] ml-[10px] my-[8px] h-[2px] bg-gray-300"></div>
            <span className="flex gap-1 items-center">
              <LuAlarmClock />
              <p>
                <b className="font-medium uppercase">steeping time:</b>3 - 5
                minutes
              </p>
            </span>
            <div className="w-[180px] ml-[10px] my-[8px] h-[2px] bg-gray-300"></div>
            <span className="flex gap-1 items-center">
              <div className="h-[14px] w-[14px] rounded-full bg-red-500"></div>
              <p>
                <b className="uppercase font-medium">color after 3 minutes</b>
              </p>
            </span>
          </div>

          <div className="flex-1">
            <p className="capitalize font-[500] text-[32px]">about this tea</p>
            <span className="flex w-full items-center gap-3 lg:gap-6 my-[20px]">
              <span className="flex flex-col gap-1">
                <p className="uppercase font-medium">flavour</p>
                <p>spicy</p>
              </span>

              <span className="h-[40px] w-[1px] bg-gray-300"></span>

              <span className="flex flex-col gap-1">
                <p className="uppercase font-medium">qualities</p>
                <p>sooting</p>
              </span>

              <span className="h-[40px] w-[1px] bg-gray-300"></span>

              <span className="flex flex-col gap-1">
                <p className="uppercase font-medium">caffaine</p>
                <p>medium</p>
              </span>

              <span className="h-[40px] w-[1px] bg-gray-300"></span>

              <span className="flex flex-col gap-1">
                <p className="uppercase font-medium">allergens</p>
                <p>Nuts-free</p>
              </span>
            </span>

            <div>
              <h4 className="capitalize mb-[10px] font-[500] text-[32px]">
                ingredients
              </h4>
              <p>
                Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,
                Cinnamon sticks, Cardamom, Cinnamon pieces.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AdsCard title="you may also like" />
    </main>
  );
}
