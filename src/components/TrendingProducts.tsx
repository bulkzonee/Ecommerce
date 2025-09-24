import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import CarouselSection from "@/components/ui/carousel-section";
import { gsapAnimations } from "@/lib/gsap";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const TrendingProducts = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const trendingProducts = [
    {
      id: 11,
      name: "Oversized Trend Master",
      price: 109.90,
      originalPrice: 149.90,
      image: product1,
      isNew: true,
      salesCount: 342,
      stockCount: 12,
    },
    {
      id: 12,
      name: "Streetwear Phenomenon",
      price: 94.90,
      image: product2,
      salesCount: 287,
    },
    {
      id: 13,
      name: "Urban Legend Tee",
      price: 119.90,
      originalPrice: 159.90,
      image: product3,
      isLimited: true,
      salesCount: 198,
      stockCount: 7,
    },
    {
      id: 14,
      name: "Revolution Core",
      price: 89.90,
      image: product4,
      isNew: true,
      salesCount: 423,
    },
    {
      id: 15,
      name: "Dark Mode Essential",
      price: 99.90,
      image: product1,
      salesCount: 156,
      stockCount: 15,
    },
    {
      id: 16,
      name: "Neon Strike Oversized",
      price: 124.90,
      originalPrice: 169.90,
      image: product2,
      isLimited: true,
      salesCount: 89,
      stockCount: 4,
    },
  ];

  useEffect(() => {
    if (titleRef.current && productsRef.current) {
      gsapAnimations.fadeInUp(titleRef.current);
      gsapAnimations.slideInFromLeft(productsRef.current.children);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="font-bold text-sm uppercase tracking-wide">
              🔥 Trending Now
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
            MAIS <span className="text-primary">PROCURADOS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Os modelos que estão dominando o streetwear brasileiro. Designs únicos que definem tendências.
          </p>
        </div>

        {/* Products Carousel */}
        <div ref={productsRef} className="mb-12">
          <CarouselSection 
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }} 
            className="px-4"
          >
            {trendingProducts.map((product) => (
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
            VER TODAS AS TENDÊNCIAS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;