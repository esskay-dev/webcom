import Header from "./sections/Header";
import Hero from "./sections/Hero";
import IconCloud from "./sections/IconCloud";
import TextLoop from "./sections/TextLoop";
import ToolbarExpandable from "./sections/ToolbarExpandable";
import { GridPattern, DotPattern } from "@/components/velora/grid-pattern";
import BorderBeam from "./sections/BorderBeam";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/93">
      <DotPattern />
      <GridPattern />
      <Header />
      <Hero />
      <TextLoop />
      <ToolbarExpandable />
      <IconCloud />
      <BorderBeam />
    </main>
  );
}
