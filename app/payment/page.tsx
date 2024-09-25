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
        <div className="flex flex-col gap-5 lg:flex-row justify-between">
          <div className="lg:w-[320px] mb-[15px] lg:mb-0">
            <div className="mb-[15px] lg:mb-[20px]">
              <h4 className="mb-[10px] font-semibold lg:mb-[25px] text-lg">
                Delivery Details
              </h4>
              <p className="mb-[10px] text-sm font-medium">Shipping address</p>
              <p className="lg:w-[100%] text-sm font-normal">
                3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz
                71856-95159 Iran
              </p>
            </div>
            <div className="mb-[10px] lg:mb-[30px]">
              <p className="text-[14px] text-sm font-medium">Billing Address</p>
              <p className="text-sm">same as shipping address</p>
            </div>
            <div className="mb-[18px] lg:mb-[30px]">
              <p className="text-sm font-medium">Contact information</p>
              <p className="text-sm font-normal">amoopur@gmail.com</p>
            </div>
            <p className="text-[14px] text-center lg:text-left font-[600] uppercase text-orange-400">
              edit details
            </p>
          </div>
          <div className="lg:min-w-[300px]">
            <h4 className="font-semibold text-lg mb-4">Payment type</h4>
            <div className="hidden lg:flex lg:border-[1px] mb-[10px] lg:border-black lg:mb-[18px] lg:p-[10px] items-center justify-center w-full">
              <img
                className="w-[42px] lg:w-[48px] h-[32px]"
                src="/card-1.png"
                alt="card"
              />
            </div>
            <form className="w-full mb-[12px] lg:mb-0">
              <div className="lg:border-[1px] border-black  px-[10px] lg:p-5">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-[500]">Credit or Debit card</p>
                  <div className="flex items-center justify-center lg:justify-normal gap-1">
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
                <div className="mt-[20px] lg:mt-[40px] lg:w-[90%] mx-auto">
                  <label className="font-[600] text-sm" htmlFor="">
                    Card Number
                  </label>
                  <input
                    className="pb-[5px] pt-[10px] w-full block border-black border-b-[1px]"
                    type="text"
                    placeholder={`xxxx     xxxx    xxxx     xxxx`}
                  />
                </div>
                <div className="lg:w-[90%] mb-[20px] mt-[20px] lg:mt-[40px] mx-auto flex items-center">
                  <div>
                    <label className="font-[600] text-sm" htmlFor="">
                      Expiry date
                    </label>
                    <input
                      className="pb-[5px] pt-[10px] w-[40%] block border-black border-b-[1px]"
                      type="text"
                      placeholder={`xx / xx`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-[600]">CVC</p>
                    <input
                      className="pb-[5px] pt-[10px] w-[40%] lg:border-black border-b-[1px]"
                      type="text"
                      placeholder={`xxx`}
                    />
                  </div>
                </div>
                <button className="block text-xs font-medium uppercase border-[1px] border-black py-[10px] w-full">
                  advanced payment
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="lg:min-w-[320px] mx-auto">
              <div className="w-full">
                <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
                <div className="w-full flex items-center justify-between">
                  <div className="flex text-sm font-medium flex-col gap-5">
                    <p>Subtotal</p>
                    <p>Delivery</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p>€3.90</p>
                    <p>€3.95</p>
                  </div>
                </div>
                <div className="w-[70%] my-[20px] mx-auto bg-gray-300 h-[2px] ml-[40px]"></div>
                <div className="flex items-center text-sm font-medium justify-between w-full">
                  <p className="capitalize">Total</p>
                  <p>€7.95</p>
                </div>
                <p className="my-[12px] text-sm font-medium">
                  Estimated shipping time: 2 days
                </p>
                <Link href="/complete">
                  <button className="uppercase text-white mx-auto text-[14px]  mt-[30px] bg-black border-[1px] w-full py-2 px-6">
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
