/**
 * @name Contact.tsx
 * @type Page
 */

"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "./hooks/useOnScreen";

function Contact() {
  const [sectionRef, sectionVisible] = useOnScreen<HTMLDivElement>();

  return (
    <ParallaxLayer
      id="contact"
      offset={6}
      speed={0}
      className="relative flex min-h-[600px] flex-col items-center justify-center bg-slate-50"
    >
      <div
        ref={sectionRef}
        className={cn(
          "flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-16 transition-all duration-700 ease-in-out",
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
          Contact Me
        </h2>

        {/* Divider */}
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />

        <div className="mt-4 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Box 1: Contact Form */}
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className={cn("text-3xl font-bold text-slate-900 text-left", fontJersey15.className)}>Send a Message</h3>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-left">
                <label className="text-sm font-semibold text-slate-700" htmlFor="name">Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="John Doe" 
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" 
                  required
                />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <label className="text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="john@example.com" 
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" 
                  required
                />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <label className="text-sm font-semibold text-slate-700" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  rows={5} 
                  placeholder="How can I help you?" 
                  className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="mt-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Box 2: Social Links */}
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className={cn("text-3xl font-bold text-slate-900 text-left", fontJersey15.className)}>Let's Connect</h3>
            <p className="text-slate-600 text-left leading-relaxed">
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col gap-4 mt-auto">
              {/* GitHub Link */}
              <a href="https://github.com/Akshats25/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-slate-900">GitHub</span>
                  <span className="text-sm text-slate-500">github.com/Akshats25</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/akshat-shukla-24903a295/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-blue-200 hover:bg-blue-50 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-[#0a66c2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[#0a66c2]">LinkedIn</span>
                  <span className="text-sm text-slate-500">Connect with me</span>
                </div>
              </a>

              {/* Email Link */}
              <a href="mailto:akshatshukla2011@gmail.com" className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-red-200 hover:bg-red-50 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-red-600">Email</span>
                  <span className="text-sm text-slate-500">akshatshukla2011@gmail.com</span>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Contact;
