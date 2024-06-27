import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export default function Account() {
  return (
    <main>
      <section className="container mb-[140px]">
        <div className="flex gap-[40px] text-[14px]">
          <div className="flex-1">
            <div className="p-5 w-fit bg-gray-100 mx-auto">
              <h4 className="text-[16px] mb-[10px]">Already a Customer?</h4>
              <p className="mb-[20px]">
                Welcome back! sign in for faster checkout
              </p>
              <form className="w-[456px]">
                <input
                  className="w-[456px] p-[10px] border-[1px] border-black mb-[30px]"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="w-[456px] p-[10px] border-[1px] border-black mb-[30px]"
                  type="password"
                  placeholder="Enter your password"
                />
                <span className="flex w-[456px] items-center justify-between mb-[10px]">
                  <span className="flex gap-1 items-center">
                    <input className="block" type="checkbox" />
                    <label htmlFor="">Please remember me</label>
                  </span>
                  <p>forget password?</p>
                </span>
                <button className="uppercase w-[456px] bg-black py-[12px] text-white">
                  sign in
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-[480px] p-5 bg-gray-100 mx-auto">
              <h4 className="text-[16px] mb-[10px]">New to the company?</h4>
              <p className="mb-[15px] text-[15px]">
                create an account for the best expirience
              </p>
              <div className="flex ml-2 flex-col gap-4 mb-[10px]">
                <span className="flex items-center gap-1">
                  <FaAngleRight />
                  <p>Modify and track your orders</p>
                </span>
                <span className="flex items-center gap-1">
                  <FaAngleRight />
                  <p>Faster checkout</p>
                </span>
                <span className="flex items-center gap-1">
                  <FaAngleRight />
                  <p>Get a 10% discount for new customer</p>
                </span>
              </div>
              <Link href="/delivery">
                <button className="uppercase w-full mt-[40px] py-[12px] border-[1px] border-black">
                  create an account
                </button>
              </Link>
            </div>
            <div className="mt-[60px] w-[480px] mx-auto p-5 bg-gray-100">
              <h4 className="text-[16px] mb-[10px]">Guest checkout</h4>
              <p>Not ready to become a customer?</p>
              <Link href="/delivery">
                <button className="uppercase mt-[30px] w-full py-[12px] border-[1px] border-black">
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
