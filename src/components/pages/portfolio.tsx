"use client";

import React, { useRef, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import About from "./sections/about";
import Footer from "./sections/footer";
import Contact from "./sections/contact";
import Stats from "./sections/stats";
import { Testimonials } from "./sections/testimonials";

const PortfolioPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!scrollRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollRef.current,
      content: contentRef.current,
      lerp: 0.04, // Lower value = more smoothness (was 0.08)
      wheelMultiplier: 0.7, // Slightly slows down the wheel speed for a more relaxed feel
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <div 
        ref={scrollRef}
        className="no-scrollbar portfolio-container relative size-full overflow-y-auto"
      >
        <div ref={contentRef} className="flex flex-col">

        <main className="before:border-border after:border-border relative z-10 min-h-screen before:absolute before:top-0 before:left-0 before:h-full before:w-12 before:border-r before:bg-[linear-gradient(-135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] before:bg-[length:5px_5px] after:absolute after:top-0 after:right-0 after:h-full after:w-12 after:border-l after:bg-[linear-gradient(135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] after:bg-[length:5px_5px] max-md:before:hidden max-md:after:hidden md:px-12">
          <Navbar />

          <div className="min-h-[calc(100vh-4rem)] md:px-8">
            <div className="min-h-[calc(100vh-4rem)] md:border-r md:border-l">
              <Hero />
              <Projects />
              <About />
              <Stats />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          </div>
        </main>
      </div>
      </div>
    </>
  );
};

export default PortfolioPage;
