/**
 * @name Certificates.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "./hooks/useOnScreen";

/**
 * @Certificates
 *
 * @description Certificates section page.
 * Content to be inserted later.
 *
 */
function Certificates() {
  const [sectionRef, sectionVisible] = useOnScreen<HTMLDivElement>();

  return (
    <ParallaxLayer
      id="certificates"
      offset={5}
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
          Certificates
        </h2>

        {/* Divider */}
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />

        {/* Certificates Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              tag: "Cloud",
              name: "AWS Certified Solutions Architect",
              date: "Aug 2023",
              org: "Amazon Web Services",
            },
            {
              tag: "Frontend",
              name: "Advanced React Patterns",
              date: "Jan 2024",
              org: "Frontend Masters",
            },
            {
              tag: "Backend",
              name: "Node.js Developer Certification",
              date: "Nov 2023",
              org: "OpenJS Foundation",
            },
          ].map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md text-left"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {cert.tag}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  {cert.date}
                </span>
              </div>
              <h3
                className={cn(
                  "mt-2 text-2xl font-bold text-slate-900",
                  fontJersey15.className,
                )}
              >
                {cert.name}
              </h3>
              <p className="font-medium text-slate-600">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Certificates;
