import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    githubLink?: string;
    dates?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-300/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle githubLink={item.githubLink} dates={item.dates}>
              {item.title}
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[38vh] w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  githubLink,
  dates,
  className,
  children,
}: {
  githubLink?: string;
  dates?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row items-center justify-between">
        <h4 className={cn("text-blue-400 font-bold tracking-wide items-center", className)}>
          {children}
        </h4>
        {
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center ml-2 md:ml-4 text-2xl font-bold text-gray-500 hover:text-blue-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        }
      </div>
        <div className="text-left">
          <h2 className="text-xs">{dates}</h2>
        </div>
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
