/**
 * @name Navigationbar.tsx
 * @type Component
 */

import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { fontInter } from "@/lib/font";
import "../style/navigationBar.css";
import { RefObject } from "react";
import { cn } from "@/lib/utils";

// Propriétés de NavigationBar
type Props = {
  speed: number;
  parallaxRef: RefObject<IParallax | null>;
};

// Propriétés de NavigationBarText
type PropsAgain = {
  text: string;
  className?: string;
  onClick?: () => void;
};

function NavigationBarText({
  text,
  className = "",
  onClick = () => { },
}: PropsAgain) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "cursor-pointer px-2 py-1 text-xl lg:px-4 lg:text-2xl text-slate-700 hover:text-blue-7 transition-colors font-semibold",
        fontInter.className,
        className,
      )}
    >
      {text}
    </span>
  );
}

/**
 * @NavigationBar
 *
 * @description Redesigned navbar (Light Theme). Links on left, Name on right.
 *
 */
function NavigationBar({ speed, parallaxRef }: Props) {
  const scrollToSection = (sectionOffset: number) => {
    parallaxRef.current?.scrollTo(sectionOffset);
  };

  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none absolute top-0 left-0 z-[100] w-full"
    >
      <div
        id="navigation-bar"
        className="pointer-events-auto flex w-full flex-row items-center justify-between px-6 pt-6 lg:px-16"
      >
        {/* Left Side: Links */}
        <div className="flex flex-wrap items-center gap-2 lg:gap-4 lg:ml-8">
          <NavigationBarText
            text="Projects"
            onClick={() => scrollToSection(3)}
          />
          <NavigationBarText
            text="Learning"
            onClick={() => scrollToSection(4)}
          />
          <NavigationBarText
            text="Certificates"
            onClick={() => scrollToSection(5)}
          />
          <NavigationBarText
            text="Skills"
            onClick={() => scrollToSection(2)}
          />
          <NavigationBarText
            text="Achievements"
            onClick={() => scrollToSection(1)}
          />
        </div>

        {/* Right Side: Name */}
        <div 
          onClick={() => scrollToSection(0)} 
          className={cn(
            "cursor-pointer text-3xl font-bold text-slate-900 hover:text-blue-7 transition-colors",
            fontInter.className
          )}
        >
          Akshat Shukla
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
