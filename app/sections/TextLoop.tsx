import { TextLoop as AnimatedTextLoop } from "@/components/motion-primitives/text-loop";

export default function TextLoop() {
  return (
    <section>
      <div className="container desc">
        <div className="content">
          <div>
            <div className="text-xl font-bold tracking-tighter text-white bg-clip-text mt-6">
              <h3>Text Loop</h3>
            </div>
            <div className="mt-6 text-white">
              <p>
                The count slides up into the corner as it pops open, <br />
                and blurs out on the way back. Press the bell, then press it
                again.
              </p>
            </div>
            <nav className="mt-6 text-white">
              <div className="flex items-center gap-2">
                <p className="border px-2 py-0.5 rounded-sm tracking-tight">
                  react
                </p>
                <p className="border px-2 py-0.5 rounded-sm tracking-tight">
                  tailwind
                </p>
                <p className="border px-2 py-0.5 rounded-sm tracking-tight">
                  css
                </p>
              </div>
            </nav>
          </div>
          <div className="stage-box">
            Beautiful templates for{" "}
            <AnimatedTextLoop
              className="overflow-y-clip inline-flex justify-start"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
                exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" },
              }}
            >
              <span>Founders</span>
              <span>Developers</span>
              <span>Designers</span>
              <span>Design Engineers</span>
            </AnimatedTextLoop>
          </div>
        </div>
      </div>
    </section>
  );
}
