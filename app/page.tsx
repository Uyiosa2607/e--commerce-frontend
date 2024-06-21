/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/items/navbar";
import Footer from "@/components/items/footer";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Navbar />
        <section className="container flex h-[600px] mb-[50px]">
          <img
            className="object-cover flex-1 h-auto w-full"
            src="/landing-main-image.png"
            alt="images of spoon and seeds on a table"
          />
          <div className="flex-1 flex items-center justify-center">
            <div className="pl-[100px] flex justify-center flex-col gap-6">
              <h3 className="text-[30px] w-[80%] uppercase">
                Everyday is unique just like our tea
              </h3>
              <p className="w-[70%] text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                vitae incidunt perspiciatis consequatur tempora, eius labore
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                tempore recusandae numquam tempore totam odio obcaecati dolorem
                eum est.
              </p>
              <button className="outline-none w-fit text-[14px] py-[10px] px-[24px] uppercase bg-black text-white">
                Browse teas
              </button>
            </div>
          </div>
        </section>
        <section className="py-[30px] bg-gray-100">
          <div className="container">
            <div className="uppercase text-[14px]  justify-between mx-auto flex items-center">
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
              <button className="w-fit py-3 px-12 mt-[40px] border-[1px] text-[14px] font-medium border-black uppercase">
                learn more
              </button>
            </div>
          </div>
        </section>
        <section className="mx-auto container">
          <h2 className="text-center my-[40px] text-[30px] uppercase">
            our collections
          </h2>
          <div className="text-[16px] mt-[10px] font-medium img-wrapper justify-between flex items-center uppercase mb-[10px]">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/black-tea.png"
                alt="black tea"
              />
              <p className="text-center py-[10px]">black tea</p>
            </div>

            <div className="img-wrapper">
              <div>
                <img
                  className="w-[360px] h-[360px]"
                  src="/green-tea.png"
                  alt="green tea"
                />
                <p className="text-center py-[10px]">black tea</p>
              </div>
            </div>

            <div className="img-wrapper">
              <div>
                <img
                  className="w-[360px] h-[360px]"
                  src="/white-tea.png"
                  alt="white tea"
                />
                <p className="text-center py-[10px]">white tea</p>
              </div>
            </div>
          </div>

          <div className="text-[16px] mt-[10px] font-mediumimg-wrapper justify-between flex items-center uppercase mb-[10px]">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/matcha.png"
                alt="matcha"
              />
              <p className="text-center py-[10px]">matcha</p>
            </div>

            <div className="img-wrapper">
              <div>
                <img
                  className="w-[360px] h-[360px]"
                  src="/herbal-tea.png"
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

          <div className="text-[16px] font-medium img-wrapper  justify-between mx-auto flex items-center uppercase mb-[10px]">
            <div>
              <img
                className="w-[360px] h-[360px]"
                src="/oolong-tea.png"
                alt="oolong"
              />
              <p className="text-center py-[10px]">oolong</p>
            </div>

            <div className="img-wrapper">
              <div>
                <img
                  className="w-[360px] h-[360px]"
                  src="/rooibos.png"
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
        <section className="bg-gray-100 py-[20px] mb-[20px]">
          <div className="container">
            <h2 className="text-[20px] text-center uppercase m-[40px]">
              {" "}
              last blog post
            </h2>
            <div className="flex gap-3">
              <div className="flex gap-4">
                <img
                  className="flex-1 w-[265px] h-[360px] object-cover"
                  src="/kettle.png"
                  alt="image contains kettle and tea cup"
                />
                <div className="flex-1">
                  <h4 className="uppercase  text-[20px] font-medium mb-[30px] leading-tight">
                    how to steep tea like a pro
                  </h4>
                  <p className="w-[90%] text-[16px] mb-[20px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt officiis asperiores quae vel fugit molestias cumque
                    voluptate esse modi dolor blanditiis expedita eveniet
                    assumenda debitis, iste recusandae molestiae adipisci
                    reiciendis.
                  </p>
                  <button className="border-none uppercase text-[16px] font-medium">
                    learn more
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  className="flex-1 w-[265px] h-[360px] object-cover"
                  src="/tea-cup.png"
                  alt="tea cup"
                />
                <div className="flex-1">
                  <h4 className="uppercase text-[20px] font-medium mb-[30px] leading-tight">
                    how to steep tea like a pro
                  </h4>
                  <p className="w-[90%] text-[16px] mb-[20px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt officiis asperiores quae vel fugit molestias cumque
                    voluptate esse modi dolor blanditiis expedita eveniet
                    assumenda debitis, iste recusandae molestiae adipisci
                    reiciendis.
                  </p>
                  <button className="border-none uppercase text-[16px] font-medium">
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container h-[600px] flex gap-3 mb-[40px]">
          <div className="flex-1 flex justify-center flex-col">
            <h2 className="text-[25px] uppercase mb-[40px]">for wholesalers</h2>
            <p className="w-[60%] text-[16px]">
              We offer loose tea leaves of the best quality for your business.
              With a choice of more than 450 different kinds of loose tea, we
              can make a sophisticated selection that fits exactly in your kind
              of establishment.{" "}
            </p>
            <button className="w-fit uppercase py-[10px] px-[24px] border-black border-[1px] my-[15px]">
              get a free consultation
            </button>
          </div>
          <img className="flex-1 w-[600px]" src="/tea-bag.png" alt="tea bags" />
        </section>
      </main>
      <Footer />
    </>
  );
}
