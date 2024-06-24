/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/items/footer";
import Navbar from "@/components/items/navbar";
import {
  FaGlobe,
  FaShoppingBag,
  FaLeaf,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { TbPaperBag } from "react-icons/tb";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SlCup } from "react-icons/sl";
import { PiBowlSteam } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import AdsCard from "@/components/items/AdsCard";

export default function Product() {
  return (
    <main>
      <Navbar />
      <section className="container flex">
        <div className="flex-1">
          <img
            className="w-[456px] h-[507px] object-cover"
            src="/product-image.png"
            alt="product image"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="text-[30px] uppercase w-[70%] leading-tight">
            ceylon ginger cinamon chai tea
          </h4>
          <span className="text-[14px] mt-[15px]">
            a lovely warming chai tea with ginger cinamon flavours
          </span>
          <div className="flex items-center text-[16px] justify-between w-[60%] mt-[30px]">
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
            <span className="text-sm mb-[8px]">variants</span>
            <div className="flex items-center my-1 justify-between text-[50px] w-[70%]">
              <span className="flex flex-col gap-1">
                <TbPaperBag />
                <span className="text-sm">100g bag</span>
              </span>
              <span className="flex flex-col gap-1">
                <TbPaperBag />
                <span className="text-sm">10g bag</span>
              </span>
              <span className="flex flex-col gap-1">
                <TbPaperBag />
                <span className="text-sm">20g bag</span>
              </span>
              <span className="flex flex-col gap-1">
                <TbPaperBag />
                <span className="text-sm">70g bag</span>
              </span>
            </div>
            <div className="flex gap-6 text-[14px] mt-[50px] bottom-2">
              <span className="flex items-center gap-2">
                <FaPlus />
                <p className="text-[20px] font-bold">1</p>
                <FaMinus />
              </span>
              <button className="uppercase bg-black text-white py-3 px-9">
                <span className="flex items-center gap-1">
                  <MdOutlineShoppingBag />
                  add to bag
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-[20px] flex gap-3 text-[14px]">
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
            <p className="capitalize text-[32px]">about this tea</p>
            <span className="flex w-full items-center gap-6 my-[20px]">
              <span className="flex flex-col gap-1">
                <p className="uppercase font-semibold">flavour</p>
                <p>spicy</p>
              </span>

              <span className="h-[40px] w-[1px] bg-gray-300"></span>

              <span className="flex flex-col gap-1">
                <p className="uppercase font-semibold">qualities</p>
                <p>sooting</p>
              </span>

              <span className="h-[40px] w-[1px] bg-gray-300"></span>

              <span className="flex flex-col gap-1">
                <p className="uppercase font-semibold">caffaine</p>
                <p>medium</p>
              </span>

              <span className="h-[40px] w-[1px] bg-gray-300"></span>

              <span className="flex flex-col gap-1">
                <p className="uppercase font-semibold">allergens</p>
                <p>Nuts-free</p>
              </span>
            </span>

            <div>
              <h4 className="capitalize mb-[10px] text-[32px]">ingredients</h4>
              <p>
                Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,
                Cinnamon sticks, Cardamom, Cinnamon pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdsCard />

      <Footer />
    </main>
  );
}
