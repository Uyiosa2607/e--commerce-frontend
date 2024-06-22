/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/items/navbar";
import Footer from "@/components/items/footer";
import { FaPlus } from "react-icons/fa6";

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
            <div className="flex h-screen flex-col justify-between bg-white">
              <div className="py-4">
                <ul className="mt-6">
                  <li>
                    <details className="group flex [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-2 py-2 mr-2">
                        <span className="text-sm">COLLECTION </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <FaPlus />
                        </span>
                      </summary>

                      <ul className="gap-2 flex flex-col mb-3  px-2">
                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>

                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <div className="h-[2px] w-[45%] ml-3 mx-auto  bg-gray-200"></div>

                  <li>
                    <details className="group flex [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-2 py-2 mr-2">
                        <span className="text-sm font-medium">ORIGIN</span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <FaPlus />
                        </span>
                      </summary>

                      <ul className="gap-2 flex flex-col mb-3  px-2">
                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>

                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <div className="h-[2px] w-[45%] ml-3 mx-auto  bg-gray-200"></div>

                  <li>
                    <details className="group flex [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-2 py-2 mr-2">
                        <span className="text-sm font-medium">FLAVOUR</span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <FaPlus />
                        </span>
                      </summary>

                      <ul className="gap-2 flex flex-col mb-3  px-2">
                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>

                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <div className="h-[2px] w-[45%] ml-3 mx-auto  bg-gray-200"></div>

                  <li>
                    <details className="group flex [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-2 py-2 mr-2">
                        <span className="text-sm font-medium">QUALITIES</span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <FaPlus />
                        </span>
                      </summary>

                      <ul className="gap-2 flex flex-col mb-3  px-2">
                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>

                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <div className="h-[2px] w-[45%] ml-3 mx-auto  bg-gray-200"></div>

                  <li className="">
                    <details className="group flex [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-2 py-2 mr-2">
                        <span className="text-sm font-medium">CAFFAINE </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <FaPlus />
                        </span>
                      </summary>

                      <ul className="gap-2 flex flex-col mb-3  px-2">
                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>

                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <div className="h-[1px] w-[45%] ml-3 mx-auto bg-gray-200"></div>

                  <li>
                    <details className="group flex [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-2 py-2 mr-2">
                        <span className="text-sm font-medium">ALLERGENS</span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <FaPlus />
                        </span>
                      </summary>

                      <ul className="flex gap-1 flex-col mb-3 px-4">
                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>

                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <div className="h-[2px] w-[45%] ml-3 mx-auto  bg-gray-200"></div>

                  <li>
                    <details className="group flex [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between px-2 py-2 mr-2">
                        <span className="text-sm font-medium">ORGANIC</span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <FaPlus />
                        </span>
                      </summary>

                      <ul className="gap-2 flex flex-col mb-3  px-2">
                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>

                        <li className="flex gap-1">
                          <input type="checkbox" />
                          <a href="#" className="text-sm font-medium">
                            Details
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid py-[80px] grid-cols-3 w-full gap-y-6 gap-x-[160px]">
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
