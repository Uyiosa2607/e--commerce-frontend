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
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdOutlineShoppingBag } from "react-icons/md";

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
          <span className="text-[14px] mt-[20px]">
            a lovely warming chai tea with ginger cinamon flavours
          </span>
          <div className="flex items-center text-[16px] justify-between w-[60%] my-[20px]">
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
          <span className="text-[25px] mb-[10px] font-bold">€3.90</span>
          <div>
            <span className="text-sm mb-[10px]">variants</span>
            <div className="flex items-center my-3 justify-between text-[50px] w-[70%]">
              <span className="flex flex-col gap-1">
                <LiaShoppingBagSolid />
                <span className="text-sm">100g bag</span>
              </span>
              <span className="flex flex-col gap-1">
                <LiaShoppingBagSolid />
                <span className="text-sm">10g bag</span>
              </span>
              <span className="flex flex-col gap-1">
                <LiaShoppingBagSolid />
                <span className="text-sm">20g bag</span>
              </span>
              <span className="flex flex-col gap-1">
                <LiaShoppingBagSolid />
                <span className="text-sm">70g bag</span>
              </span>
            </div>
            <div className="flex gap-5 text-[14px] my-[40px]">
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
      <section className="bg-gray-100">
        <div className="container"></div>
      </section>
      <Footer />
    </main>
  );
}
