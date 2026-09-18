import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";

const logoUrl = "";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white gap-3">
        <p className="text-white/60 hidden md:block ">
          Interface components I’ve seen, liked, and rebuilt.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Explore for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            {logoUrl ? (
              <Image src={logoUrl} alt="My Logo" height={40} width={40} />
            ) : (
              <div className="h-10 w-10" />
            )}
            <MenuIcon className="h-5 w-5 text-white md:hidden" />
            <nav className="hidden md:flex gap-6 text-white/60 items-center">
              <a href="">Text Loop</a>
              <a href="#">Gooey Menu</a>
              <a href="#">Spring Drag</a>
              <a href="#">Like Button</a>
              <a href="#">Turning Deck</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium in-line-flex items-center jsutify-center tracking-tight">
                Grab a drink!
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
