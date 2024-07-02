/* eslint-disable @next/next/no-img-element */
import { collections } from "@/components/items/AdsCard";
import { FaPlus, FaMinus, FaAngleRight } from "react-icons/fa6";
import AdsCard from "@/components/items/AdsCard";
import Link from "next/link";

export default function Proceed() {
  return (
    <main>
      <div className="text-gray-500 container flex justify-between items-center uppercase text-[16px]">
        <p>1. my bag</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>2. delivery</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>3. review & payment</p>
      </div>
      <section className="container gap-[50px] flex my-[40px]">
        <div className="flex-1 text-[14px] flex flex-col gap-[38px]">
          {collections.map((tea) => (
            <div className="flex gap-[10px] items-center" key={tea.id}>
              <img className="w-[71px] h-[71px]" src={tea.img} alt={tea.name} />
              <div className="flex justify-between w-[80%]">
                <div className="flex flex-col gap-3">
                  <p className="capitalize">ceylon ginger cinamon tea - 50g</p>
                  <p className="uppercase text-[12px]">remove</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <FaPlus />
                    <span className="text-[15px] font-[600]">1</span>
                    <FaMinus />
                  </div>
                  <p className="text-center font-[600]">€{tea.prize}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-[80%] bg-gray-300 h-[2px] mx-auto"></div>
          <span className="w-[90%] ml-[20px] mx-auto  flex items-center justify-between">
            <p>Subtotal</p>
            <p className="font-[600]">€3.90</p>
          </span>
          <span className="w-[90%] flex items-cneter justify-center">
            <Link href="/collection">
              <button className="mx-auto text-center py-2 px-6 uppercase border-[1px] border-black">
                Back to shopping
              </button>
            </Link>
          </span>
        </div>
        <div className="flex-1 text-[14px]">
          <div className=" bg-gray-100 w-[80%] h-fit py-[20px] px-[20px] mx-auto">
            <h4 className="mb-[20px]">Order Summary</h4>
            <div className="w-full flex items-center justify-between">
              <span className="flex flex-col gap-5">
                <p>Subtotal</p>
                <p>Delivery</p>
              </span>
              <span className="flex font-[600] flex-col gap-5">
                <p>€3.90</p>
                <p>€3.95</p>
              </span>
            </div>
            <div className="w-[70%] my-[20px] mx-auto bg-gray-300 h-[2px] ml-[40px]"></div>
            <span className="flex items-center justify-between w-full">
              <p className="capitalize">Total</p>
              <p className="font-[600]">€7.95</p>
            </span>
            <p className="my-[12px] text-gray-500">
              Estimated shipping time: 2 days
            </p>
            <Link href="/delivery">
              <button className="uppercase text-white mx-auto  mt-[30px] bg-black border-[1px] w-full py-2 px-6">
                checkout
              </button>
            </Link>
          </div>
          <div className="mt-[50px] w-[80%] mx-auto p-5 bg-gray-100">
            <p className="mb-[20px]">Payment type</p>
            <span className="flex justify-between items-center">
              <img className="w-[48px] h-[32px]" src="/card-1.png" alt="card" />
              <img className="w-[48px] h-[32px]" src="/card-2.png" alt="card" />
              <img className="w-[48px] h-[32px]" src="/card-3.png" alt="card" />
              <img className="w-[48px] h-[32px]" src="/card-4.png" alt="card" />
              <img className="w-[48px] h-[32px]" src="/card-5.png" alt="card" />
            </span>
          </div>
          <div className="mt-[50px] w-[80%] mx-auto p-5 bg-gray-100">
            <p className="mb-[20px]">Delivery and retour</p>
            <div className="flex flex-col gap-6">
              <span className="flex gap-2 items-center">
                <FaAngleRight />
                <p>Order before 12:00 and we will ship the same day.</p>
              </span>
              <span className="flex gap-2 items-center">
                <FaAngleRight />
                <p>Orders made after Friday 12:00 are processed on Monday.</p>
              </span>
              <span className="flex gap-2 items-center">
                <FaAngleRight />
                <p>To return your articles, please contact us first.</p>
              </span>
              <span className="flex gap-2 items-center">
                <FaAngleRight />
                <p>Postal charges for retour are not reimbursed.</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <AdsCard title="Popular this season" />
    </main>
  );
}
