/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/items/navbar";
import Footer from "@/components/items/footer";

export default function Collection() {
  const teas = [
    {
      name: "celon ginger",
      desc: "cinamon chai tea",
      img: "/tea-1.png",
      prize: "80",
      id: 1,
    },
    {
      name: "celon ginger",
      desc: "cinamon chai tea",
      img: "/tea-2.png",
      prize: "80",
      id: 2,
    },
    {
      name: "celon ginger",
      desc: "cinamon chai tea",
      img: "/tea-3.png",
      prize: "80",
      id: 3,
    },
    {
      name: "celon ginger",
      desc: "cinamon chai tea",
      img: "/tea-4.png",
      prize: "80",
      id: 4,
    },
    {
      name: "celon ginger",
      desc: "cinamon chai tea",
      img: "/tea-5.png",
      prize: "80",
      id: 5,
    },
    {
      name: "celon ginger",
      desc: "cinamon chai tea",
      img: "/tea-6.png",
      prize: "80",
      id: 6,
    },
  ];

  return (
    <>
      <Navbar />
      <section>
        <img
          className="h-[308px] w-full object-cover"
          src="/collection-banner.png"
          alt="tea banner"
        />
      </section>
      <section>
        <div className="container flex gap-3">
          <div className="collasible w-[200px]">
            <span>Collection</span>
          </div>
          <div className="grid grid-cols-3 w-full gap-y-6 gap-x-[160px]">
            {teas.map((tea) => (
              <div key={tea.id}>
                <img
                  className="w-[264px] h-[264px]"
                  src={tea.img}
                  alt={tea.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
