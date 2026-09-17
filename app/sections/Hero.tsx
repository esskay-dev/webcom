import { ArrowRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function Hero() {
  return (
    <section className="screen pt-8 pb-20">
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            5 Interactive Components
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            <Highlighter action="underline" color="#FF9800">
              Interfaces
            </Highlighter>{" "}
            I built while{" "}
            <Highlighter action="highlight" color="rgba(77, 77, 90, 0.33)">
              Shipping
            </Highlighter>
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Small interaction details picked up across Domorang, Street, and a
            few side projects — rebuilt here on their own, in plain HTML, CSS
            and JS.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn">Explore for free</button>
            <button className="btn-text gap-1">
              <span>Let's Connect</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
