/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Payment() {
  return (
    <main className="text-[16px] mb-[100px]">
      <div className="text-gray-500 container flex justify-between mb-[25px] items-center uppercase text-[16px]">
        <p>1. my bag</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>2. delivery</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>3. review & payment</p>
      </div>
      <section className="container">
        <div className="flex justify-between">
          <div className="w-[320px]">
            <div className="mb-[20px]">
              <h4 className="mb-[25px] text-[18px]">Delivery Details</h4>
              <p className="mb-[10px]">Shipping address</p>
              <p className="w-[100%]">
                3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz
                71856-95159 Iran
              </p>
            </div>
            <div className="mb-[30px]">
              <p className="text-[14px] font-bold">Billing Address</p>
              <p>same as shipping address</p>
            </div>
            <div className="mb-[30px]">
              <p className="text-[14px] font-bold">Contact information</p>
              <p>amoopur@gmail.com</p>
            </div>
            <p className="text-[14px] text-center uppercase text-orange-400">
              edit details
            </p>
          </div>
          <div className="w-[460px]">
            <h4 className="mb-[20px]">Payment type</h4>
            <span className="flex border-[2px] border-gray-400 mb-[18px] p-[10px] items-center justify-center w-full">
              <img className="w-[48px] h-[32px]" src="/card-1.png" alt="card" />
            </span>
            <form className="w-full">
              <div className="border-[2px] border-gray-400 p-5">
                <span className="flex items-center gap-3">
                  <p className="text-[14px]">Credit or Debit card</p>
                  <span className="flex items-cnter gap-1">
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
                  </span>
                </span>
                <div className="mt-[40px] w-[90%] mx-auto">
                  <label htmlFor="">Card Number</label>
                  <input
                    className="pb-[5px] pt-[10px] w-full block border-gray-400 border-b-[2px]"
                    type="text"
                    placeholder={`xxxx     xxxx    xxxx     xxxx`}
                  />
                </div>
                <div className="w-[90%] mb-[20px] mt-[40px] mx-auto flex items-center">
                  <span>
                    <label htmlFor="">Expiry date</label>
                    <input
                      className="pb-[5px] pt-[10px] w-[40%] block border-gray-400 border-b-[2px]"
                      type="text"
                      placeholder={`xx / xx`}
                    />
                  </span>
                  <span>
                    <p className="text-[13px]">CVC</p>
                    <input
                      className="pb-[5px] pt-[10px] w-[40%] border-gray-400 border-b-[2px]"
                      type="text"
                      placeholder={`xxx`}
                    />
                  </span>
                </div>
                <button className="block text-[14px] uppercase border-[1px] border-black p-[10px] w-full">
                  advanced payment
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="w-[420px] mx-auto">
              <div className="w-full">
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
