import { Stage } from "@/components/stage";

interface RowProps {
  title: string;
  description: string;
  tags: string[];
  children: React.ReactNode;
}

export function Row({ title, description, tags, children }: RowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 border-t border-white/10">
      <div>
        <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>
        <p className="text-zinc-400 max-w-md mb-6">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-zinc-400 bg-zinc-800/60 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Stage>{children}</Stage>
    </div>
  );
}
