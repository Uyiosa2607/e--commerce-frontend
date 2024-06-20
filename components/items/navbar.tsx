/* eslint-disable @next/next/no-img-element */

export default function Navbar() {
  return (
    <header className="py-[30px] px-1">
      <div className=" container wrapper flex justify-between items-center">
        <div className="left flex gap-1 items center">
          <img src="/logo.png" alt="logo" />
          <span className="pt-2 text-[20px] font-bold">brand name</span>
        </div>
        <div className="middle text-[14px] font-medium uppercase flex gap-[30px] items-center">
          <p>tea collection</p>
          <p>accesories</p>
          <p>blog</p>
          <p>contact us</p>
        </div>
        <div className="right flex gap-[20px] items-center">
          <img src="/search.png" alt="search" />
          <img src="/person.png" alt="person" />
          <img src="/local_mall.png" alt="cart" />
        </div>
      </div>
    </header>
  );
}
