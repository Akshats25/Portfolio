/**
 * @name About.tsx
 * @type Page
 */

import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import { cn } from "@/lib/utils";
import { RefObject } from "react";
import { fontJersey15 } from "@/lib/font";

type Props = {
  parallaxRef: RefObject<IParallax | null>;
};

/**
 * @About
 *
 * @description Page About — Bento Box layout for Who I Am, What I do, My Mission.
 *
 */
function About({ parallaxRef }: Props) {
  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="flex min-h-[600px] flex-col items-center justify-center bg-slate-50 px-6 lg:px-12 py-16"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2
          className={cn(
            "text-5xl font-bold text-slate-900 mb-10",
            fontJersey15.className
          )}
        >
          About Me
        </h2>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 gap-6 w-full lg:grid-cols-3 lg:grid-rows-2 h-full lg:h-[500px]">
          
          {/* Box 1: Who I am */}
          <div className="col-span-1 lg:row-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
            <h3 className={cn("text-3xl text-slate-900", fontJersey15.className)}>Who I Am</h3>
            <p className="text-slate-600 leading-relaxed">
               I am a passionate software developer with a knack for building clean and modern web applications. 
               My curiosity drives me to continuously learn and explore new technologies, creating solutions that solve real-world problems.
            </p>
          </div>

          {/* Box 2: What I do */}
          <div className="col-span-1 lg:col-span-2 lg:row-span-1 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center gap-4">
            <h3 className={cn("text-3xl text-slate-900", fontJersey15.className)}>What I Do</h3>
            <p className="text-slate-600 leading-relaxed lg:w-4/5">
              I specialize in Full Stack Development, architecting scalable backend systems, designing intuitive and responsive user interfaces, and ensuring robust database architectures. I love turning complex ideas into functional code.
            </p>
          </div>

          {/* Box 3: My Mission */}
          <div className="col-span-1 lg:col-span-2 lg:row-span-1 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center gap-4">
            <h3 className={cn("text-3xl text-slate-900", fontJersey15.className)}>My Mission</h3>
            <p className="text-slate-600 leading-relaxed lg:w-4/5">
              To engineer software solutions that not only fulfill business requirements but also provide seamless, accessible, and delightful experiences for users globally. I aim for engineering excellence in every line of code.
            </p>
          </div>

        </div>
      </div>
    </ParallaxLayer>
  );
}

export default About;
