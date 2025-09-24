import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import { gsapAnimations } from "@/lib/gsap";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsapAnimations.heroEntry(contentRef.current.children);
    }
  }, []);
  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modelo usando camiseta streetwear Bulkzone"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div ref={contentRef}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Flame className="h-4 w-4" />
              <span className="font-bold text-sm uppercase tracking-wide">
                Nova Coleção Chegou
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-manifesto mb-6 text-white animate-slide-up">
              BULKZONE NÃO É SÓ ROUPA,
              <br />
              <span className="bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
                É REVOLUÇÃO
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium animate-slide-up">
              Streetwear exclusivo para quem não se contenta com o comum.
              Faça parte do movimento urbano mais autêntico.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button variant="hero" size="xl" className="group">
                COMPRAR AGORA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="urban" 
                size="xl"
                className="backdrop-blur-sm"
              >
                VER COLEÇÕES
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-8 text-gray-300 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium">+2.5k compraram hoje</span>
              </div>
              
              <div className="text-sm">
                ⚡ <span className="font-bold">Frete grátis</span> acima de R$199
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;