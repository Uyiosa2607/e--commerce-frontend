/* eslint-disable @next/next/no-img-element */
import { collections } from "@/components/items/AdsCard";

export default function Complete() {
  return (
    <main className="text-[16px]">
      <section className="container">
        <div className="mb-[30px]">
          <h2 className="uppercase font-lobstar font-bold text-[32px] mb-[12px]  text-center">
            thank you
          </h2>
          <p className="text-center mb-[20px] w-[50%] mx-auto">
            We received your order and will start preparing your package right
            away. You will receive a confirmation email in a moment.
          </p>
          <p className="text-center font-bold uppercase text-[18px]">
            Order details - 8972491047359
          </p>
        </div>
        <div className="flex gap-5">
          <div className="flex-[1.1]">
            <div className="w-[80%]">
              {collections.map((tea) => (
                <div className="flex gap-[10px] items-center" key={tea.id}>
                  <img
                    className="w-[71px] h-[71px]"
                    src={tea.img}
                    alt={tea.name}
                  />
                  <div className="flex justify-between w-[80%]">
                    <div className="flex flex-col gap-3">
                      <p className="capitalize">ceylon ginger cinamon</p>
                      <p className="text-[13px]">Chai tea - 50g</p>
                    </div>
                    <p className="text-[14px] font-bold">€{tea.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1">
              <div className="mb-[20px]">
                <h4 className="mb-[25px] text-[18px]">Delivery Details</h4>
                <p className="mb-[10px]">Shipping address</p>
                <p className="w-[50%]">
                  3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province ,
                  Shiraz 71856-95159 Iran
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
            </div>
          </div>
          <div className="flex-1">
            <div className="mt-[40px] w-[90%]">
              <h4 className="text-[17px]">Payment method</h4>
              <p>master card</p>
              <p>xxxx xxxx xxxx 4234</p>
            </div>
            <div>
              <h4>Estimated Shipping</h4>
              <p>16 june 2024</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
