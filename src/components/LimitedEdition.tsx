import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import CarouselSection from "@/components/ui/carousel-section";
import { gsapAnimations } from "@/lib/gsap";
import { Clock, Flame } from "lucide-react";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";

const LimitedEdition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);

  const limitedProducts = [
    {
      id: 31,
      name: "Exclusive Phantom Edition",
      price: 199.90,
      originalPrice: 299.90,
      image: product1,
      isLimited: true,
      salesCount: 12,
      stockCount: 3,
    },
    {
      id: 32,
      name: "Golden Hour Limited",
      price: 179.90,
      originalPrice: 249.90,
      image: product2,
      isLimited: true,
      salesCount: 8,
      stockCount: 5,
    },
    {
      id: 33,
      name: "Underground Legends",
      price: 164.90,
      originalPrice: 219.90,
      image: product3,
      isLimited: true,
      salesCount: 15,
      stockCount: 2,
    },
  ];

  useEffect(() => {
    if (titleRef.current && productsRef.current && timerRef.current) {
      gsapAnimations.scaleIn(titleRef.current);
      gsapAnimations.fadeInUp(productsRef.current.children);
      gsapAnimations.slideInFromLeft(timerRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary/5 via-background to-red-500/5">
      <div className="container mx-auto px-4">
        {/* Urgency Timer */}
        <div ref={timerRef} className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 border-2 border-primary/20 px-6 py-3 rounded-lg">
            <Clock className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-bold text-lg">
              RESTAM APENAS 48 HORAS
            </span>
            <Flame className="h-5 w-5 text-primary animate-bounce" />
          </div>
        </div>

        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-bold text-sm uppercase tracking-wide">
              🚨 Edição Limitada
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
            COLEÇÃO <span className="text-primary">EXCLUSIVA</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Peças únicas em quantidades limitadas. Quando acabar, não volta mais.
          </p>
        </div>

        {/* Products Carousel */}
        <div ref={productsRef} className="mb-12">
          <CarouselSection 
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }} 
            className="px-4"
          >
            {limitedProducts.map((product) => (
              <div key={product.id} className="relative">
                <div className="absolute -top-2 -right-2 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  ÚLTIMAS {product.stockCount} PEÇAS
                </div>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  isLimited={product.isLimited}
                  salesCount={product.salesCount}
                  stockCount={product.stockCount}
                />
              </div>
            ))}
          </CarouselSection>
        </div>
      </div>
    </section>
  );
};

export default LimitedEdition;