/**
 * @name Skills.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { cn } from "@/lib/utils";
import { fontJersey15 } from "@/lib/font";

/**
 * @Skills
 *
 * @description Engineering Excellence section - 3 Cards.
 *
 */
function Skills() {
  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      className="flex min-h-[600px] flex-col items-center justify-center bg-slate-50 px-6 lg:px-12 py-16"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2
          className={cn(
            "text-5xl font-bold text-slate-900 mb-10 text-center",
            fontJersey15.className
          )}
        >
          Engineering Excellence
        </h2>

        {/* 3 Cards Layout */}
        <div className="grid grid-cols-1 gap-6 w-full lg:grid-cols-3">
          
          {/* Card 1: Programming Languages */}
          <div className="col-span-1 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className={cn("text-2xl text-slate-900", fontJersey15.className)}>Programming Languages</h3>
            </div>
            
            <div className="flex flex-col gap-3 text-slate-700">
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/typescript.svg" alt="TypeScript" className="h-6 w-6 object-contain" />
                <span className="font-medium">JavaScript / TypeScript</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/python.svg" alt="Python" className="h-6 w-6 object-contain" />
                <span className="font-medium">Python</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/java.svg" alt="Java" className="h-6 w-6 object-contain" />
                <span className="font-medium">Java</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/cpp.svg" alt="C++" className="h-6 w-6 object-contain" />
                <span className="font-medium">C++</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/csharp.svg" alt="C#" className="h-6 w-6 object-contain" />
                <span className="font-medium">C#</span>
              </div>
            </div>
          </div>

          {/* Card 2: Tools */}
          <div className="col-span-1 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className={cn("text-2xl text-slate-900", fontJersey15.className)}>Tools & Tech</h3>
            </div>
            
            <div className="flex flex-col gap-3 text-slate-700">
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/react.svg" alt="React" className="h-6 w-6 object-contain" />
                <span className="font-medium">React & Next.js</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/node.svg" alt="Node.js" className="h-6 w-6 object-contain" />
                <span className="font-medium">Node.js</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/git.svg" alt="Git" className="h-6 w-6 object-contain" />
                <span className="font-medium">Git & GitHub</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/docker.svg" alt="Docker" className="h-6 w-6 object-contain" />
                <span className="font-medium">Docker</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/aws.png" alt="AWS" className="h-6 w-6 object-contain" />
                <span className="font-medium">AWS</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <img src="/img/skills/azure.png" alt="Azure" className="h-6 w-6 object-contain" />
                <span className="font-medium">Azure</span>
              </div>
            </div>
          </div>

          {/* Card 3: Soft Skills */}
          <div className="col-span-1 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={cn("text-2xl text-slate-900", fontJersey15.className)}>Soft Skills</h3>
            </div>
            
            <div className="flex flex-col gap-3 text-slate-700">
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span className="font-medium">Effective Communication</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span className="font-medium">Agile Collaboration</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="font-medium">Problem Solving</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-2 hover:bg-slate-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Time Management</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Skills;
