/**
 * @name page.tsx
 * @type All
 */

"use client";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import LoadingScreen from "./components/LoadingScreen";
import NavigationBar from "./components/NavigationBar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTopButton from "./components/BackToTopButton";
// import BackgroundColor from "./components/BackgroundColor";

/**
 * @Home
 * Fonction d'entrée
 *
 * @description Contient l'entièreté du porte folio.
 *
 * Parallax pages:
 *  0 – Hero (Home)
 *  1 – About
 *  2 – Skills
 *  3 – Experience
 *  4 – Certificates
 *  5 – Projects
 *  6 – Contact + Footer
 */
export default function Home() {
  // Booléen qui indique si la page est entrain de se charger
  const [loading, setLoading] = useState(true);

  // Référence de l'objet parallax
  const parallaxRef = useRef<IParallax>(null);

  // Lorsque la page se charge, la variable est à false
  useEffect(() => {
    setLoading(false);
  }, []);

  // Indicateur pour savoir si on est en haut de la page
  const [isTop, setIsTop] = useState(true);

  /**
   * Lorsque l'on scroll, on vérifié si on est au top pour afficher
   * ou pas le bouton go to top
   */
  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollTop = parallaxRef.current.container.current.scrollTop;
      const pageHeight = parallaxRef.current.space;
      setIsTop(10 * scrollTop < 9 * pageHeight);
    }
  };

  // Déclenché uniquement au début
  useEffect(() => {
    const container = parallaxRef.current?.container.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main>
      {/* Ecran de chargement; visible uniquement avant le 1er rendu du Hero */}
      {loading && <LoadingScreen />}

      <BackToTopButton
        parallaxRef={parallaxRef}
        className={isTop ? "translate-x-40 opacity-0" : "opacity-100"}
      />
      {/* Conteneur parallax qui contiendra chaques pages*/}
      <Parallax
        ref={parallaxRef}
        pages={7}
        style={{ top: "0", left: "0" }}
        className="p-animation bg-slate-50"
      >
        <NavigationBar speed={0} parallaxRef={parallaxRef} />

        {/* Hero pour la page d'acceuil (offset 0) */}
        <Hero parallaxRef={parallaxRef} />

        {/* About (offset 1) */}
        <About parallaxRef={parallaxRef} />

        {/* Skills (offset 2) */}
        <Skills />

        {/* Projects (offset 3) */}
        <Projects />

        {/* Experience (offset 4) */}
        <Experience />

        {/* Certificates (offset 5) */}
        <Certificates />

        {/* Contact (offset 6) */}
        <Contact />

        {/* Footer (offset 6, bottom) */}
        <Footer />
      </Parallax>
    </main>
  );
}
