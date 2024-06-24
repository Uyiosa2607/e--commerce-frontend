/* eslint-disable @next/next/no-img-element */
export default function AdsCard() {
  const collections = [
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
      prize: "12",
      id: 2,
    },
    {
      name: "celon ginger",
      desc: "cinamon chai tea",
      img: "/tea-3.png",
      prize: "4.85",
      id: 3,
    },
  ];

  return (
    <section className="container mb-[100px] mt-[180px]">
      <h4 className="font-semibold text-center text-[28px] mb-[40px]">
        You may also like
      </h4>
      <div className="w-full flex items-center justify-center">
        {collections.map((tea) => (
          <div
            className="flex flex-col items-center justify-center"
            key={tea.id}
          >
            <img className="w-[264px] h-[264px]" src={tea.img} alt={tea.desc} />
            <div className="flex flex-col capitalize font-light text-center text-[14px] py-1">
              <span>{tea.name}</span>
              <span>{tea.desc}</span>
              <span className="mt-2">
                <b>{`$${tea.prize} `}</b>
                /50g
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
