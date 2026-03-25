/**
 * @name Hero.tsx
 * @type Page
 */

import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { RefObject } from "react";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";

// Propriétés
type Props = {
  parallaxRef: RefObject<IParallax | null>;
};

/**
 * @Hero
 *
 * @description New Minimal Landing Page with Bio, CTA, and Socials.
 *
 * @param parallaxRef: Référence de l'élément global parallax
 *
 */
function Hero({ parallaxRef }: Props) {
  return (
      <ParallaxLayer
      offset={0}
      speed={0}
      className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-8 lg:flex-row lg:px-16 mt-20 lg:mt-0">
        
        {/* Left Side: Name, Bio, CTAs, and Socials */}
        <div className="flex flex-col items-start gap-2 lg:w-3/5">
          <h1
            className={cn(
              "text-5xl font-bold text-slate-900 lg:text-7xl",
              fontInter.className
            )}
          >
            Akshat Shukla
          </h1>
          <h2 className={cn("text-2xl font-semibold text-blue-600 mt-2", fontInter.className)}>
            Full Stack Developer
          </h2>
          
          <p className="max-w-xl text-lg text-slate-600 mt-4 leading-relaxed">
            I specialize in building scalable web applications with modern technologies. 
            I&apos;m passionate about creating elegant solutions to complex problems, architecting robust backend systems, and delivering exceptional user experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button 
              onClick={() => parallaxRef.current?.scrollTo(6)}
              className="rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"></path>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span>Hire Me</span>
            </button>

            <a 
              href="/Akshat Shukla.pdf" 
              target="_blank"
              className="rounded-full border-2 border-slate-200 bg-white px-8 py-3 font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-6">
            <a href="https://github.com/Akshats25/" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/akshat-shukla-24903a295/" target="_blank" className="text-slate-400 hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex items-center justify-center lg:w-2/5 mt-10 lg:mt-0">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-100 to-indigo-100 shadow-2xl lg:h-[400px] lg:w-[400px] overflow-hidden">
            {/* The user can drop their profile image as 'profile.jpg' in the public folder */}
            <img 
              src="/profile.jpg" 
              alt="Akshat Shukla Profile" 
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>

      </div>
    </ParallaxLayer>
  );
}

export default Hero;
