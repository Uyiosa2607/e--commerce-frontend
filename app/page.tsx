/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/items/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="flex h-[600px]">
        <img
          className="object-cover flex-1 h-auto w-full"
          src="/landing-main-image.png"
          alt="images of spoon and seeds on a table"
        />
        <div className="flex-1 flex items-center justify-center">
          <div className="pl-[100px] flex justify-center flex-col gap-6">
            <h3 className="text-[25px] font-bold">
              Everyday is unique just like our tea
            </h3>
            <p className="w-[60%] text-[14px]">
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
    </main>
  );
}
