/**
 * @name Project
 * @type Component
 */

"use client";

import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

export default function Project({ title, description, techStack, link }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md lg:w-[380px] xl:w-[420px] text-left">
      <h3 className={cn("text-3xl font-bold text-slate-900", fontJersey15.className)}>
        {title}
      </h3>
      <p className="flex-grow text-slate-600 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700">
            {tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        <span>View Code</span>
      </a>
    </div>
  );
}
