import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// GSAP Animation Utilities for BulkZone
export const gsapAnimations = {
  // Hero animations
  heroEntry: (elements: string | Element | NodeListOf<Element> | HTMLCollection) => {
    const elementsArray = elements instanceof HTMLCollection ? Array.from(elements) : elements;
    gsap.fromTo(elementsArray, 
      { 
        opacity: 0, 
        y: 60,
        scale: 0.9 
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      }
    );
  },

  // Product card animations
  productCardHover: (element: Element) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(element, { 
      y: -10, 
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(227, 6, 19, 0.3)",
      duration: 0.3,
      ease: "power2.out" 
    });
    return tl;
  },

  // Scroll triggered animations
  slideInFromLeft: (elements: string | Element | NodeListOf<Element> | HTMLCollection) => {
    const elementsArray = elements instanceof HTMLCollection ? Array.from(elements) : elements;
    gsap.fromTo(elementsArray, 
      { 
        opacity: 0, 
        x: -100 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elementsArray,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  slideInFromRight: (elements: string | Element | NodeListOf<Element> | HTMLCollection) => {
    const elementsArray = elements instanceof HTMLCollection ? Array.from(elements) : elements;
    gsap.fromTo(elementsArray, 
      { 
        opacity: 0, 
        x: 100 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elementsArray,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  fadeInUp: (elements: string | Element | NodeListOf<Element> | HTMLCollection) => {
    const elementsArray = elements instanceof HTMLCollection ? Array.from(elements) : elements;
    gsap.fromTo(elementsArray, 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: elementsArray,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Header animations
  headerEntry: (element: Element) => {
    gsap.fromTo(element, 
      { 
        y: -100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.out"
      }
    );
  },

  // Text reveal animations
  textReveal: (elements: string | Element | NodeListOf<Element> | HTMLCollection) => {
    const elementsArray = elements instanceof HTMLCollection ? Array.from(elements) : elements;
    gsap.fromTo(elementsArray, 
      { 
        opacity: 0,
        y: 30,
        rotationX: 90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elementsArray,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Scale in animation
  scaleIn: (elements: string | Element | NodeListOf<Element> | HTMLCollection) => {
    const elementsArray = elements instanceof HTMLCollection ? Array.from(elements) : elements;
    gsap.fromTo(elementsArray, 
      { 
        scale: 0.8, 
        opacity: 0 
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elementsArray,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Parallax effect
  parallax: (element: Element, speed: number = 0.5) => {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  },

  // Carousel animations
  slideNext: (container: Element, distance: number = 100) => {
    gsap.to(container, {
      x: `-${distance}%`,
      duration: 0.6,
      ease: "power3.out"
    });
  },

  slidePrev: (container: Element, distance: number = 100) => {
    gsap.to(container, {
      x: `+${distance}%`,
      duration: 0.6,
      ease: "power3.out"
    });
  },

  resetSlide: (container: Element) => {
    gsap.set(container, { x: 0 });
  }
};

export { gsap, ScrollTrigger };