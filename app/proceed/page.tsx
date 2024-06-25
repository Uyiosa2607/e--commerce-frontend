/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/items/footer";
import { collections } from "@/components/items/AdsCard";
import { FaPlus, FaMinus } from "react-icons/fa6";
import AdsCard from "@/components/items/AdsCard";

export default function Proceed() {
  return (
    <main>
      <div className="text-gray-500 container flex justify-around items-center uppercase text-[16px]">
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
                <div className="flex flex-col gap-6">
                  <span className="flex items-center gap-3">
                    <FaPlus />
                    <span>1</span>
                    <FaMinus />
                  </span>
                  <p className="text-center">{tea.prize}€</p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-[90%] bg-gray-300 h-[2px] ml-[40px]"></div>
          <span className="w-[90%] ml-[20px]  flex items-center justify-between">
            <p>Subtotal</p>
            <p>€3.90</p>
          </span>
          <span className="w-[90%] flex items-cneter justify-center">
            <button className="w-fit text-center py-2 px-6 uppercase border-[1px] border-black">
              Back to shopping
            </button>
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
              <span className="flex flex-col gap-5">
                <p>€3.90</p>
                <p>€3.95</p>
              </span>
            </div>
            <div className="w-[70%] my-[20px] mx-auto bg-gray-300 h-[2px] ml-[40px]"></div>
            <span className="flex items-center justify-between w-full">
              <p className="capitalize">Total</p>
              <p>€7.95</p>
            </span>
            <p className="my-[12px] text-gray-500">
              Estimated shipping time: 2 days
            </p>
            <button className="uppercase text-white mx-auto  mt-[30px] bg-black border-[1px] w-full py-2 px-6">
              checkout
            </button>
          </div>
        </div>
      </section>
      <AdsCard title="Popular this season" />
      <Footer />
    </main>
  );
}
