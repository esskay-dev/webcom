import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="screen pt-8 pb-20 max-w-1xl mx-auto px-6">
      <div className="container">
        <div>
          <div className="text-sm text-white inline-flex border border-white/10 px-3 py-1 rounded-lg tracking-tight">
            5 Interactive Components
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-white bg-clip-text mt-6">
            Interfaces I built while Shipping
          </h1>
          <p className="text-xl text-white tracking-tight mt-6">
            Small interaction details picked up across Domorang, Street, and a
            few side projects — rebuilt here on their own, in plain HTML, CSS
            and JS.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn">Explore for free</button>
            <button className="btn-text gap-1 text-white">
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
