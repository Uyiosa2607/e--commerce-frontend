/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/items/navbar";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="flex h-[600px] mb-[50px]">
        <img
          className="object-cover flex-1 h-auto w-full"
          src="/landing-main-image.png"
          alt="images of spoon and seeds on a table"
        />
        <div className="flex-1 flex items-center justify-center">
          <div className="pl-[100px] flex justify-center flex-col gap-6">
            <h3 className="text-[30px] font-bold">
              Everyday is unique just like our tea
            </h3>
            <p className="w-[60%] text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              vitae incidunt perspiciatis consequatur tempora, eius labore Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
              recusandae numquam tempore totam odio obcaecati dolorem eum est.
            </p>
            <button className="outline-none w-fit text-[14px] py-[10px] px-[40px] uppercase bg-black text-white">
              Browse teas
            </button>
          </div>
        </div>
      </section>
      <section className="py-[30px] bg-gray-300">
        <div className="uppercase text-[10px] w-[90%] justify-between mx-auto flex items-center">
          <span className="flex gap-1 items-center">
            <img src="/cafe.png" alt="cafe" />
            <p>450+ kind of losef tea</p>
          </span>
          <span className="flex gap-1 items-center">
            <img src="/gift.png" alt="gift" />
            <p>certified organic tea</p>
          </span>
          <span className="flex gap-1 items-center">
            <img src="/truck.png" alt="truck" />
            <p>free delivery</p>
          </span>
          <span className="flex gap-1 items-center">
            <img src="/tag.png" alt="tag" />
            <p>samples for all tea</p>
          </span>
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <button className="w-fit py-3 px-12 mt-[40px] border uppercase">
            learn more
          </button>
        </div>
      </section>
      <section className="mx-auto">
        <h2 className="capitalize my-2 text-center mb-[20px] text-[30px] font-bold">
          our collections
        </h2>
        <div className="text-[16px] mt-[10px] font-medium img-wrapper justify-around flex items-center uppercase mb-[10px]">
          <div>
            <img
              className="w-[360px] h-[360px]"
              src="/black-tea.png
            "
              alt="black tea"
            />
            <p className="text-center py-[10px]">black tea</p>
          </div>

          <div className="img-wrapper">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/green-tea.png
            "
                alt="green tea"
              />
              <p className="text-center py-[10px]">black tea</p>
            </div>
          </div>

          <div className="img-wrapper">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/white-tea.png
            "
                alt="white tea"
              />
              <p className="text-center py-[10px]">black tea</p>
            </div>
          </div>
        </div>

        <div className="text-[16px] mt-[10px] font-mediumimg-wrapper justify-around flex items-center uppercase mb-[10px]">
          <div>
            <img
              className="w-[360px] h-[360px]"
              src="/matcha.png
            "
              alt="matcha"
            />
            <p className="text-center py-[10px]">matcha</p>
          </div>

          <div className="img-wrapper">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/herbal-tea.png
            "
                alt="herbal tea"
              />
              <p className="text-center py-[10px]">herbal tea</p>
            </div>
          </div>

          <div className="img-wrapper">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/chai-tea.png"
                alt="chai"
              />
              <p className="text-center py-[10px]">chai</p>
            </div>
          </div>
        </div>

        <div className="text-[16px] font-medium img-wrapper  justify-around mx-auto flex items-center uppercase mb-[10px]">
          <div>
            <img
              className="w-[360px] h-[360px]"
              src="/oolong-tea.png
            "
              alt="oolong"
            />
            <p className="text-center py-[10px]">oolong</p>
          </div>

          <div className="img-wrapper">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/rooibos.png
            "
                alt="rooibos"
              />
              <p className="text-center py-[10px]">rooibos</p>
            </div>
          </div>

          <div className="img-wrapper">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/teaware.png"
                alt="chai"
              />
              <p className="text-center py-[10px]">teaware</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
