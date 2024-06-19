import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <main className="p-4">
      <div className="wrapper flex items-center justify-between w-full">
        <div className="flex font-bold text-[12px] flex-col gap-0">
          <p>MOCK MARKET</p>
        </div>
        <div className="flex items-center gap-[50px]">
          <span>Home</span>
          <span>Cart</span>
          <Button className="px-6 py-1">login</Button>
        </div>
      </div>
    </main>
  );
}
