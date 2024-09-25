/* eslint-disable @next/next/no-img-element */
import { collections } from "@/components/items/AdsCard";
import AdsCard from "@/components/items/AdsCard";
import Link from "next/link";

export default function Complete() {
  return (
    <main className="text-[16px]">
      <section className="container pt-5 px-[10px]">
        <div className="mb-[30px]">
          <h2 className="uppercase font-[600] text-lg lg:text-[32px] mb-[12px]  text-center">
            thank you
          </h2>
          <p className="text-center text-sm mb-10 font-normal md:mb-12 lg:w-[50%] mx-auto">
            We received your order and will start preparing your package right
            away. You will receive a confirmation email in a moment.
          </p>
          <p className="text-center font-[600] uppercase text-sm lg:text-base">
            Order details - 8972491047359
          </p>
        </div>
        <div className="flex flex-col mb-[10px] lg:mb-0 lg:flex-row gap-5">
          <div className="flex-[1.3]">
            <div className="lg:w-[80%]">
              {collections.map((tea) => (
                <div className="flex gap-[10px] items-center" key={tea.id}>
                  <img
                    className="w-[71px] h-[71px]"
                    src={tea.img}
                    alt={tea.name}
                  />
                  <div className="flex justify-between w-[80%]">
                    <div className="flex flex-col gap-3">
                      <p className="capitalize text-sm font-normal">
                        ceylon ginger cinamon
                      </p>
                      <p className="text-sm font-normal">Chai tea - 50g</p>
                    </div>
                    <p className="text-sm font-bold">€{tea.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex gap-[50px]">
            <div className="flex-1">
              <div className="mb-[20px]">
                <h4 className="mb-[10px] mt-[10px] lg:mt-0 lg:mb-[25px] font-[600] text-[20px]">
                  Delivery Details
                </h4>
                <p className="mb-[10px] font-[500]">Shipping address</p>
                <p className="w-[100%]">
                  3 Falahi St, Falahi Ave, Pasdaran Blvd, Fars Province, Shiraz
                  71856-95159 Iran
                </p>
              </div>
              <div className="mb-[30px]">
                <p className="text-[14px] font-[500]">Billing Address</p>
                <p>same as shipping address</p>
              </div>
              <div className="mb-[30px]">
                <p className="text-[14px] font-[500]">Contact information</p>
                <p>amoopur@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:ml-[50px]">
            <div className="mb-[30px]">
              <h4 className="text-[17px] font-[500] mb-[15px]">
                Payment method
              </h4>
              <p className="capitalize mb-[10px] text-[12px] font-[600]">
                master card
              </p>
              <p>
                xxxx &nbsp; &nbsp; xxxx &nbsp; &nbsp; xxxx &nbsp; &nbsp; 4234
              </p>
            </div>
            <div>
              <h4 className="mb-[10px] font-[500]">Estimated Shipping</h4>
              <p className="text-[13px]">16 June 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-[10px]">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="lg:w-[80%] h-fit py-[20px] px-[20px] mx-auto">
              <div className="w-full flex items-center justify-between">
                <span className="flex flex-col gap-5">
                  <p>Subtotal</p>
                  <p>Delivery</p>
                </span>
                <span className="flex flex-col font[500] gap-5">
                  <p className="font-[600]">€3.90</p>
                  <p className="font-[600]">€3.95</p>
                </span>
              </div>
              <div className="w-[80%] my-[20px] mx-auto bg-black h-[1px]"></div>
              <span className="flex items-center justify-between w-full">
                <p className="capitalize font-[500]">Total</p>
                <p className="font-[600]">€7.95</p>
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex pt-[60px] items-center justify-center flex-col gap-[20px]">
              <Link href="/collection">
                <button className="w-fit py-[8px] px-[19px] border-black border-[1px] mx-auto uppercase bg-black text-sm text-white">
                  keep shopping
                </button>
              </Link>
              <Link href="#">
                <button className="w-fit py-[8px] px-[24px] text-sm uppercase mx-auto border-[1px] border-black">
                  print receipt
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AdsCard title="Suggested items based on your order" />
    </main>
  );
}
