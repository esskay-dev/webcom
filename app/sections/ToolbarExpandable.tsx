"use client";

import React, { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";
import useClickOutside from "@/components/motion-primitives/useClickOutside";
import { Folder, MessageCircle, User, WalletCards } from "lucide-react";

const transition = {
  type: "spring" as const,
  bounce: 0.1,
  duration: 0.25,
};

const ITEMS = [
  {
    id: 1,
    label: "User",
    title: <User className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1 text-zinc-700">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-400" />
          <span>Ibelick</span>
        </div>

        <button
          className="relative flex h-8 w-full select-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          Edit Profile
        </button>
      </div>
    ),
  },

  {
    id: 2,
    label: "Messages",
    title: <MessageCircle className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="text-zinc-700">You have 3 new messages.</div>

        <button
          className="relative flex h-8 w-full select-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          View more
        </button>
      </div>
    ),
  },

  {
    id: 3,
    label: "Documents",
    title: <Folder className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col text-zinc-700">
          <div className="space-y-1">
            <div>Project_Proposal.pdf</div>
            <div>Meeting_Notes.docx</div>
            <div>Financial_Report.xls</div>
          </div>
        </div>

        <button
          className="relative flex h-8 w-full select-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          Manage documents
        </button>
      </div>
    ),
  },

  {
    id: 4,
    label: "Wallet",
    title: <WalletCards className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col text-zinc-700">
          <span>Current Balance</span>
          <span>$1,250.32</span>
        </div>

        <button
          className="relative flex h-8 w-full select-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          View Transactions
        </button>
      </div>
    ),
  },
];

export default function ToolbarExpandable() {
  const [active, setActive] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);

  const [contentRef, { height: heightContent }] = useMeasure();
  const [menuRef, { width: widthContainer }] = useMeasure();

  const ref = useRef<HTMLDivElement>(null!);

  useClickOutside(ref, () => {
    setIsOpen(false);
    setActive(null);
  });

  useEffect(() => {
    if (!widthContainer || maxWidth > 0) return;

    setMaxWidth(widthContainer);
  }, [widthContainer, maxWidth]);

  return (
    <section>
      <div className="container desc mt-10">
        <div className="content">
          <div>
            <div className="text-xl font-bold tracking-tighter text-white mt-6">
              <h3>Toolbar Expandable</h3>
            </div>

            <div className="mt-6 text-white">
              <p>
                The count slides up into the corner as it pops open,
                <br />
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
            <MotionConfig transition={transition}>
              <div ref={ref} className="">
                <div className="w-full rounded-xl border border-white/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  <div className="overflow-hidden">
                    <AnimatePresence initial={false} mode="sync">
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={{
                            height: 0,
                          }}
                          animate={{
                            height: heightContent || 0,
                          }}
                          exit={{
                            height: 0,
                          }}
                          style={{
                            width: maxWidth,
                          }}
                        >
                          <div ref={contentRef} className="p-2">
                            {ITEMS.map((item) => {
                              const isSelected = active === item.id;

                              return (
                                <motion.div
                                  key={item.id}
                                  initial={{
                                    opacity: 0,
                                  }}
                                  animate={{
                                    opacity: isSelected ? 1 : 0,
                                  }}
                                  exit={{
                                    opacity: 0,
                                  }}
                                >
                                  <div
                                    className={cn(
                                      "px-2 pt-2 text-sm",
                                      isSelected ? "block" : "hidden",
                                    )}
                                  >
                                    {item.content}
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>

                  <div ref={menuRef} className="flex space-x-2 p-2">
                    {ITEMS.map((item) => (
                      <button
                        key={item.id}
                        aria-label={item.label}
                        type="button"
                        onClick={() => {
                          if (!isOpen) {
                            setIsOpen(true);
                          }

                          if (active === item.id) {
                            setIsOpen(false);
                            setActive(null);
                            return;
                          }

                          setActive(item.id);
                        }}
                        className={cn(
                          "relative flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]",
                          active === item.id && "bg-zinc-100 text-zinc-800",
                        )}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </MotionConfig>
          </div>
        </div>
      </div>
    </section>
  );
}
