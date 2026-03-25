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

        {/* Placeholder content */}
        <div className="flex w-full flex-col gap-6">
          {/* INSERT CERTIFICATE ITEMS HERE */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 text-center text-slate-600">
            <p className="text-lg">[ Insert certificates here ]</p>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Certificates;
