import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import CarouselSection from "@/components/ui/carousel-section";
import { gsapAnimations } from "@/lib/gsap";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const NewArrivals = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const newProducts = [
    {
      id: 21,
      name: "Fresh Drop Supreme",
      price: 134.90,
      originalPrice: 179.90,
      image: product4,
      isNew: true,
      salesCount: 45,
      stockCount: 20,
    },
    {
      id: 22,
      name: "Limited Edition Crew",
      price: 149.90,
      image: product3,
      isNew: true,
      isLimited: true,
      salesCount: 23,
      stockCount: 8,
    },
    {
      id: 23,
      name: "Midnight Vibe Oversized",
      price: 114.90,
      originalPrice: 149.90,
      image: product2,
      isNew: true,
      salesCount: 67,
      stockCount: 14,
    },
    {
      id: 24,
      name: "Neo Streetwear Essential",
      price: 99.90,
      image: product1,
      isNew: true,
      salesCount: 89,
      stockCount: 25,
    },
  ];

  useEffect(() => {
    if (titleRef.current && productsRef.current) {
      gsapAnimations.textReveal(titleRef.current);
      gsapAnimations.slideInFromRight(productsRef.current.children);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-bold text-sm uppercase tracking-wide">
              ✨ Acabou de Chegar
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
            NOVOS <span className="text-primary">LANÇAMENTOS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Os últimos drops da BulkZone. Seja o primeiro a vestir o futuro do streetwear.
          </p>
        </div>

        {/* Products Carousel */}
        <div ref={productsRef} className="mb-12">
          <CarouselSection 
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 4 }} 
            className="px-4"
          >
            {newProducts.map((product) => (
              <div key={product.id}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  isNew={product.isNew}
                  isLimited={product.isLimited}
                  salesCount={product.salesCount}
                  stockCount={product.stockCount}
                />
              </div>
            ))}
          </CarouselSection>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            EXPLORAR NOVIDADES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;