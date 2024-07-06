import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export default function Account() {
  return (
    <main>
      <section className="container px-[10px] mb-[140px]">
        <div className="flex flex-col lg:flex-row gap-[40px] text-[16px]">
          <div className="flex-1">
            <div className="p-5 w-fit bg-gray-100 mx-auto">
              <h4 className="text-[16px] font-[500] mb-[10px]">
                Already a Customer?
              </h4>
              <p className="mb-[20px]">
                Welcome back! sign in for faster checkout
              </p>
              <form className="lg:w-[456px]">
                <input
                  className=" w-full lg:w-[456px] p-[10px] border-[1px] border-black mb-[30px]"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="w-full lg:w-[456px] p-[10px] border-[1px] border-black mb-[30px]"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="flex w-full lg:w-[456px] text-[13px] items-center justify-between mb-[10px]">
                  <div className="flex gap-1 items-center">
                    <input className="block" type="checkbox" />
                    <label htmlFor="">Please remember me</label>
                  </div>
                  <p>forget password?</p>
                </div>
                <button className="uppercase w-full lg:w-[456px] text-[14px] bg-black py-[10px] text-white">
                  sign in
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <div className="lg:w-[480px] p-5 bg-gray-100 mx-auto">
              <h4 className="text-[16px] mb-[10px]">New to the company?</h4>
              <p className="mb-[15px] text-[15px]">
                create an account for the best experience
              </p>
              <div className="flex ml-2 flex-col gap-4 mb-[10px]">
                <div className="flex items-center gap-1">
                  <FaAngleRight />
                  <p>Modify and track your orders</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleRight />
                  <p>Faster checkout</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleRight />
                  <p>Get a 10% discount for new customer</p>
                </div>
              </div>
              <Link href="/delivery">
                <button className="uppercase w-full text-[14px] mt-[40px] py-[10px] border-[1px] border-black">
                  create an account
                </button>
              </Link>
            </div>
            <div className="mt-[60px] lg:w-[480px] mx-auto p-5 bg-gray-100">
              <h4 className="text-[16px] mb-[10px]">Guest checkout</h4>
              <p>Not ready to become a customer?</p>
              <Link href="/delivery">
                <button className="uppercase text-[14px] mt-[30px] w-full py-[10px] border-[1px] border-black">
                  checkout as Guest
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
