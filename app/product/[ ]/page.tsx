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
          <h4 className="text-2xl lg:text-3xl font-semibold capitalize lg:w-[75%] leading-tight">
            ceylon ginger cinamon chai tea
          </h4>
          <span className="text-sm font-normal mt-2">
            a lovely warming chai tea with ginger cinamon flavours
          </span>
          <div className="flex items-center text-sm font-medium justify-between lg:w-[40%] mt-4">
            <div className="flex gap-1 items-center">
              <FaGlobe size={12} />
              <p>Origin: Iran</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaShoppingBag size={12} />
              <p>Organic</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaLeaf size={12} />
              <p>Vegan</p>
            </div>
          </div>
          <div className="text-3xl mt-6 mb-1 font-bold">€3.90</div>
          <div className="pt-2">
            <span className="text-sm font-semibold mb-1">variants</span>
            <div className="flex items-center my-2 justify-between  lg:w-[70%] ">
              <img
                className="w-[84px] h-[80px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[80px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[80px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[80px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
              <img
                className="w-[84px] h-[80px]"
                src="/tea-bag-icon.png"
                alt="tea bag 100g icon"
              />
            </div>
            <div className="flex gap-8 lg:gap-6 items-center justify-center lg:justify-normal lg:items-start text-[14px] mt-5 bottom-2">
              <div className="flex items-center gap-4">
                <FaPlus className="text-[12px]" />
                <p className="text-lg font-bold">1</p>
                <FaMinus className="text-[12px]" />
              </div>
              <Link href="/cart">
                <button className="uppercase text-[12px] bg-black text-white py-[10px] px-9">
                  <div className="flex items-center gap-1">
                    <MdOutlineShoppingBag />
                    add to bag
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-[20px] px-[10px] flex flex-col lg:flex-row lg:gap-3 text-[14px]">
          <div className="flex-1">
            <p className="text-2xl font-medium mb-3">Steeping instructions</p>
            <div className="flex gap-1 items-center">
              <SlCup />
              <p>
                <b className="uppercase text-xs font-semibold">serving size:</b>
                <span className="font-medium">&nbsp;2 tsp per cup</span>
              </p>
            </div>
            <div className="w-[180px] ml-[10px] my-[8px] h-[2px] bg-gray-300"></div>
            <div className="flex gap-1 items-center">
              <PiBowlSteam />
              <p>
                <b className="uppercase text-xs font-semibold">
                  water temparature:
                </b>{" "}
                <span className="font-medium">&nbsp;100</span>
              </p>
            </div>
            <div className="w-[180px] ml-[10px] my-[8px] h-[2px] bg-gray-300"></div>
            <div className="flex gap-1 items-center">
              <LuAlarmClock />
              <p>
                <b className="font-semibold text-xs uppercase">
                  steeping time:
                </b>
                <span className="font-medium">&nbsp;3 - 5 minutes</span>
              </p>
            </div>
            <div className="w-[180px] ml-[10px] my-[8px] h-[2px] bg-gray-300"></div>
            <div className="flex gap-1 items-center">
              <div className="h-[14px] w-[14px] rounded-full bg-red-500"></div>
              <p>
                <b className="uppercase font-semibold text-xs">
                  color after 3 minutes
                </b>
              </p>
            </div>
          </div>

          <div className="flex-1 mt-3">
            <p className="font-medium text-2xl">About this Tea</p>
            <div className="flex w-full lg:w-[80%] text-sm items-center justify-between gap-3 lg:gap-6 my-2">
              <div className="flex flex-col gap-1">
                <p className="uppercase text-xs font-medium">flavour</p>
                <p>spicy</p>
              </div>

              <div className="h-[40px] w-[1px] bg-gray-300"></div>

              <div className="flex flex-col gap-1">
                <p className="uppercase text-xs font-medium">qualities</p>
                <p>sooting</p>
              </div>

              <div className="h-[40px] w-[1px] bg-gray-300"></div>

              <div className="flex flex-col gap-1">
                <p className="uppercase text-xs font-medium">caffaine</p>
                <p>medium</p>
              </div>

              <span className="h-[40px] w-[1px] bg-gray-300"></span>

              <span className="flex flex-col gap-1">
                <p className="uppercase text-xs font-medium">allergens</p>
                <p>Nuts-free</p>
              </span>
            </div>

            <div>
              <h4 className="capitalize pt-1 mb-2 font-medium text-2xl">
                ingredients
              </h4>
              <p className="text-sm font-normal">
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
