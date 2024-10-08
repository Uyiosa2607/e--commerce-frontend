/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const teaCollection = [
    {
      name: "black tea",
      image: "/black-tea.png",
      id: 1,
    },
    {
      name: "green tea",
      image: "/green-tea.png",
      id: 2,
    },
    {
      name: "white tea",
      image: "/white-tea.png",
      id: 3,
    },
    {
      name: "matcha",
      image: "/matcha.png",
      id: 4,
    },
    {
      name: "herbal tea",
      image: "/herbal-tea.png",
      id: 5,
    },
    {
      name: "chai",
      image: "/chai-tea.png",
      id: 6,
    },
    {
      name: "oolong",
      image: "/oolong-tea.png",
      id: 7,
    },
    {
      name: "rooibos",
      image: "/rooibos.png",
      id: 8,
    },
    {
      name: "teaware",
      image: "/teaware.png",
      id: 9,
    },
  ];

  return (
    <main>
      <section className="container p-[10px] flex flex-col lg:flex-row lg:h-[600px] lg:mb-[50px]">
        <img
          className="object-cover flex-1 h-auto w-[100%]"
          src="/landing-main-image.png"
          alt="images of spoon and seeds on a table"
        />
        <div className="flex-1 flex lg:pt-24  justify-center">
          <div className="lg:pl-[100px] flex justify-start flex-col">
            <h3 className="text-2xl pt-4 font-semibold md:text-3xl mb-1 lg:w-[90%] uppercase">
              Everyday is unique just like our tea
            </h3>
            <p className="lg:w-[85%] mb-5 font-normal text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              vitae incidunt perspiciatis consequatur tempora, eius labore Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore
              recusandae numquam tempore totam odio obcaecati dolorem eum est.
            </p>
            <button className="outline-none w-fit text-xs md:text-sm py-3 px-4 md:py-[10px] md:px-[24px] uppercase bg-black text-white">
              Browse teas
            </button>
          </div>
        </div>
      </section>

      <section className="lg:py-[30px] lg:mt-[20px] bg-gray-100">
        <div className="container p-[10px]">
          <div className="uppercase text-xs font-normal gap-7 lg:gap-[200px] py-4 mb-6 lg:mx-auto flex flex-col lg:flex-row lg:items-center">
            <div className="flex flex-1 justify-between">
              <div className="flex  gap-1 items-center">
                <img className="text-xs" src="/cafe.png" alt="cafe" />
                <p>450+ kind of losef tea</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/gift.png" alt="gift" />
                <p>certified organic tea</p>
              </div>
            </div>
            <div className="flex flex-1 justify-between">
              <div className="flex gap-1 items-center">
                <img src="/truck.png" alt="truck" />
                <p>free delivery</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/tag.png" alt="tag" />
                <p>samples for all tea</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <button className="w-fit py-2 md:py-3 px-8 md:px-12 lg:mt-[40px] border-[1px] text-xs md:text-sm font-medium border-black uppercase">
              learn more
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto my-[10px] container p-[10px]">
        <h2 className="text-center text-2xl font-semibold mb-4 lg:my-[40px] lg:text-3xl uppercase">
          our collections
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mb-[50px]">
          {teaCollection.map((tea) => (
            <div key={tea.id} className="text-[16px]">
              <div className="flex flex-col items-center justify-center">
                <img
                  className=" w-[172px] h-[172px] lg:w-[360px] lg:h-[360px]"
                  src={tea.image}
                  alt={tea.name}
                />
                <p className="text-center text-xs font-medium uppercase py-2">
                  {tea.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-[20px] mb-[20px]">
        <div className="container p-[10px]">
          <h2 className="text-xl md:text-2xl font-semibold text-center uppercase mb-8 lg:mb-10">
            {" "}
            last blog post
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 md:gap-3">
            <div className="flex gap-4">
              <img
                className="order-7 lg:order-none flex-1 w-[172px] h-[273px] lg:w-[265px] lg:h-[360px] object-cover"
                src="/kettle.png"
                alt="image contains kettle and tea cup"
              />
              <div className="flex-1">
                <h4 className="uppercase text-sm font-semibold mb-3 leading-tight">
                  how to steep tea like a pro
                </h4>
                <p className="lg:w-[90%] text-sm font-normal mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidunt officiis asperiores quae vel fugit molestias cumque
                  voluptate esse modi dolor bland pedita eveniet
                </p>
                <button className="border-none uppercase text-xs font-semibold">
                  learn more
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                className="flex-1 w-[172px] h-[273px] lg:w-[265px] lg:h-[360px] object-cover"
                src="/tea-cup.png"
                alt="tea cup"
              />
              <div className="flex-1">
                <h4 className="uppercase order-3 text-sm font-semibold mb-3 leading-tight">
                  how to steep tea like a pro
                </h4>
                <p className="lg:w-[90%] order-[5] text-sm font-normal mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidunt officiis asperiores quae vel fugit molestias cumque
                  voolestiae adipisci reiciendis.
                </p>
                <button className="border-none uppercase text-xs font-semibold">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-[10px] lg:h-[600px] flex flex-col lg:flex-row lg:gap-3 lg:mb-[40px]">
        <div className="flex-1 order-6 flex lg:pt-24 flex-col">
          <h2 className="text-2xl font-semibold my-2 md:text-2xl uppercase lg:mb-5">
            for wholesalers
          </h2>
          <p className="lg:w-[70%] text-sm  md:text-base font-normal">
            We offer loose tea leaves of the best quality for your business.
            With a choice of more than 450 different kinds of loose tea, we can
            make a sophisticated selection that fits exactly in your kind of
            establishment.{" "}
          </p>
          <button className="w-fit text-xs font-semibold uppercase py-[10px] px-[24px] border-black border-[1px] my-[15px]">
            get a free consultation
          </button>
        </div>
        <img
          className="flex-1 w-[100%] lg:w-[600px]"
          src="/tea-bag.png"
          alt="tea bags"
        />
      </section>
    </main>
  );
}
