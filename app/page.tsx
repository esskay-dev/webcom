import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TextLoop from "./sections/TextLoop";
import ToolbarExpandable from "./sections/ToolbarExpandable";
import { GridPattern, DotPattern } from "@/components/velora/grid-pattern";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,_#000000e6,_#EAEEFE_66%)]">
      <GridPattern />
      <DotPattern />
      <Header />
      <Hero />
      <TextLoop />
      <ToolbarExpandable />
    </main>
  );
}
