/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Payment() {
  return (
    <main className="text-[16px] mb-[100px]">
      <div className="text-gray-500 container flex justify-between mb-[25px] px-[10px] items-center uppercase text-[12px] lg:text-[16px]">
        <p>1. my bag</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>2. delivery</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>3. review & payment</p>
      </div>
      <section className="container px-[10px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[320px] order-[4] lg:order-none">
            <div className="mb-[15px] lg:mb-[20px]">
              <h4 className="mb-[15px] lg:mb-[25px] text-[18px]">
                Delivery Details
              </h4>
              <p className="mb-[10px] font-[600]">Shipping address</p>
              <p className="lg:w-[100%]">
                3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz
                71856-95159 Iran
              </p>
            </div>
            <div className="mb-[10px] lg:mb-[30px]">
              <p className="text-[14px] font-[600]">Billing Address</p>
              <p>same as shipping address</p>
            </div>
            <div className="mb-[18px] lg:mb-[30px]">
              <p className="text-[14px] font-[600]">Contact information</p>
              <p>amoopur@gmail.com</p>
            </div>
            <p className="text-[14px] text-center uppercase text-orange-400">
              edit details
            </p>
          </div>
          <div className="lg:w-[460px]">
            <h4 className="mb-[20px]">Payment type</h4>
            <div className="flex lg:border-[2px] lg:border-gray-400 mb-[18px] p-[10px] items-center justify-center w-full">
              <img className="w-[48px] h-[32px]" src="/card-1.png" alt="card" />
            </div>
            <form className="w-full">
              <div className="lg:border-[2px] lg:border-gray-400  px-[10px] lg:p-5">
                <div className="flex items-center gap-3">
                  <p className="text-[14px] font-[500]">Credit or Debit card</p>
                  <div className="flex items-cnter gap-1">
                    <img
                      className="w-[30px] h-[20px]"
                      src="/card-1.png"
                      alt="card logo"
                    />
                    <img
                      className="w-[30px] h-[20px]"
                      src="/card-2.png"
                      alt="card logo"
                    />
                    <img
                      className="w-[30px] h-[20px]"
                      src="/card-3.png"
                      alt="card logo"
                    />
                  </div>
                </div>
                <div className="mt-[40px] lg:w-[90%] mx-auto">
                  <label className="font-[600]" htmlFor="">
                    Card Number
                  </label>
                  <input
                    className="pb-[5px] pt-[10px] w-full block border-gray-400 border-b-[2px]"
                    type="text"
                    placeholder={`xxxx     xxxx    xxxx     xxxx`}
                  />
                </div>
                <div className="lg:w-[90%] mb-[20px] mt-[40px] mx-auto flex items-center">
                  <div>
                    <label className="font-[600]" htmlFor="">
                      Expiry date
                    </label>
                    <input
                      className="pb-[5px] pt-[10px] w-[40%] block border-gray-400 border-b-[2px]"
                      type="text"
                      placeholder={`xx / xx`}
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-[600]">CVC</p>
                    <input
                      className="pb-[5px] pt-[10px] w-[40%]  lg:border-gray-400 border-b-[2px]"
                      type="text"
                      placeholder={`xxx`}
                    />
                  </div>
                </div>
                <button className="block text-[14px] uppercase border-[1px] border-black p-[10px] w-full">
                  advanced payment
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="lg:w-[420px] mx-auto order-[3] lg:order-none">
              <div className="w-full">
                <h4 className="mb-[20px]">Order Summary</h4>
                <div className="w-full flex items-center justify-between">
                  <div className="flex flex-col gap-5">
                    <p>Subtotal</p>
                    <p>Delivery</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p>€3.90</p>
                    <p>€3.95</p>
                  </div>
                </div>
                <div className="w-[70%] my-[20px] mx-auto bg-gray-300 h-[2px] ml-[40px]"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="capitalize">Total</p>
                  <p>€7.95</p>
                </div>
                <p className="my-[12px] text-gray-500">
                  Estimated shipping time: 2 days
                </p>
                <Link href="/complete">
                  <button className="uppercase text-white mx-auto  mt-[30px] bg-black border-[1px] w-full py-2 px-6">
                    checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
