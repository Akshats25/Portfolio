/**
 * @name Experience.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "./hooks/useOnScreen";

/**
 * @Experience
 *
 * @description Experience section page.
 * Content to be inserted later.
 *
 */
function Experience() {
  const [sectionRef, sectionVisible] = useOnScreen<HTMLDivElement>();

  return (
    <ParallaxLayer
      id="experience"
      offset={4}
      speed={0}
      className="relative flex min-h-[600px] flex-col items-center justify-center bg-slate-50"
    >
      <div
        ref={sectionRef}
        className={cn(
          "flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-16 transition-all duration-700 ease-in-out",
          sectionVisible ? "" : "translate-y-10 opacity-0",
        )}
      >
        {/* Section Title */}
        <h2
          className={cn(
            "text-5xl text-slate-900 lg:text-6xl",
            fontJersey15.className,
          )}
        >
          Experience
        </h2>

        {/* Divider */}
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />

        {/* Experience Items List */}
        <div className="flex w-full flex-col gap-6">
          
          {/* Experience Item: DSA with C++ */}
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md text-left w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className={cn("text-2xl font-bold text-slate-900", fontJersey15.className)}>DSA with C++</h3>
                <p className="text-blue-600 font-medium">Self Learning & Skill Development</p>
              </div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 w-fit">
                Jan - Feb (Current)
              </div>
            </div>
            
            <ul className="list-disc pl-5 text-slate-600 space-y-2 lg:text-lg">
              <li>Mastered foundational and advanced Data Structures including Arrays, Linked Lists, Trees, Graphs, and Hash Maps.</li>
              <li>Implemented optimal algorithmic strategies such as Dynamic Programming, Greedy approaches, and Graph Traversals.</li>
              <li>Deepened understanding of the C++ Standard Template Library (STL), pointers, and manual memory management.</li>
              <li>Consistently solved algorithmic challenges to analyze and optimize time and space complexities (Big O).</li>
            </ul>
          </div>

          {/* Experience Item: Python with DSA */}
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md text-left w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className={cn("text-2xl font-bold text-slate-900", fontJersey15.className)}>Python with DSA</h3>
                <p className="text-blue-600 font-medium">Self Learning & Skill Development</p>
              </div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 w-fit">
                Present
              </div>
            </div>
            
            <ul className="list-disc pl-5 text-slate-600 space-y-2 lg:text-lg">
              <li>Solved complex algorithmic problems using Python&apos;s built-in data structures like lists, dictionaries, and sets.</li>
              <li>Implemented various sorting and searching algorithms to optimize performance and data retrieval times.</li>
              <li>Gained deep understanding of time and space complexity analysis (Big O notation) for Python algorithms.</li>
              <li>Worked extensively with dynamic programming, recursion, and graph algorithms to solve advanced computational problems.</li>
              <li>Continuously practiced on competitive programming platforms to refine problem-solving skills and logical thinking.</li>
            </ul>
          </div>

        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Experience;
