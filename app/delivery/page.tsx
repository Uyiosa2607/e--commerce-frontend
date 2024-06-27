export default function Delivery() {
  return (
    <main>
      <div className="text-gray-500 container mb-[20px] flex justify-around items-center uppercase text-[16px]">
        <p>1. my bag</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>2. delivery</p>
        <div className="w-[150px] h-[1px] bg-gray-300"></div>
        <p>3. review & payment</p>
      </div>
      <section className="container flex gap-[40px] mb-[100px] text-[14px]">
        <div className="flex items-cnter flex-1 gap-[40px]">
          <div>
            <div>
              <h4 className="text-[16px] mb-[15px]">Shipping Address</h4>
              <form className="w-[289px]">
                <input
                  className="block mb-[20px] w-full p-[10px] border-[1px] border-gray-400"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="block mb-[20px] w-full p-[10px] border-[1px] border-gray-400"
                  placeholder="Last Name"
                  type="text"
                />
                <input
                  className="block mb-[20px] w-full p-[10px] border-[1px] border-gray-400"
                  placeholder="Street"
                  type="text"
                />
                <span className="flex justify-between gap-4 mb-[20px] items-center">
                  <input
                    className="p-[10px] w-[50%] border-[1px] border-gray-400"
                    placeholder="Postcode"
                    type="number"
                  />
                  <input
                    className="p-[10px] w-[50%] border-[1px] border-gray-400"
                    placeholder="City"
                    type="text"
                  />
                </span>
                <select
                  className="w-full p-[10px] text-gray-400 border-[1px] border-gray-400"
                  name=""
                  id=""
                >
                  <option value="country">Country</option>
                  <option value="#">Country</option>
                </select>
              </form>
            </div>
          </div>
          <div className="w-[289px]">
            <h4 className="text-[16px] mb-[8px]">Billing Address</h4>
            <p className="text-[12px] text-gray-400 mb-[10px]">
              (same as shipping address)
            </p>
            <span className="flex items-center gap-2 mb-[60px]">
              <input type="checkbox" />
              <p>Bill to a different address</p>
            </span>
            <div>
              <h4 className="16px mb-[20px]">Contact information</h4>
              <input
                className="p-[10px] border-[1px] w-full border-gray-400"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-fit py-[20px] px-[20px] w-[90%] mx-auto">
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
    </main>
  );
}
