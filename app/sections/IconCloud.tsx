import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "github",
  "git",
  "html5",
  "css3",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

export default function () {
  return (
    <div className="container desc mt-10">
      <div className="content">
        <div>
          <div className="componentName">
            <h1>Icon Cloud</h1>
          </div>
          <div className="componentParagraph">
            <p>
              The count slides up into the corner as it pops open, <br />
              and blurs out on the way back. Press the bell, then press it
              again.
            </p>
          </div>
          <nav className="componentContainer">
            <div className="componentFlex">
              <p className="componentStack">react</p>
              <p className="componentStack">tailwind</p>
              <p className="componentStack">css</p>
            </div>
          </nav>
        </div>
        <div className="stage-box">
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
}
