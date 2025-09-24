import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import CarouselSection from "@/components/ui/carousel-section";
import { gsapAnimations } from "@/lib/gsap";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && productsRef.current) {
      gsapAnimations.fadeInUp(titleRef.current);
      gsapAnimations.scaleIn(productsRef.current.children);
    }
  }, []);
  const featuredProducts = [
    {
      id: 1,
      name: "Camiseta Urban Rebellion",
      price: 89.90,
      originalPrice: 119.90,
      image: product1,
      isNew: true,
      salesCount: 245,
      stockCount: 8,
    },
    {
      id: 2,
      name: "Essential Minimalist Tee",
      price: 79.90,
      image: product2,
      salesCount: 189,
    },
    {
      id: 3,
      name: "Revolution Statement",
      price: 99.90,
      originalPrice: 139.90,
      image: product3,
      isLimited: true,
      salesCount: 156,
      stockCount: 5,
    },
    {
      id: 4,
      name: "Geometric Street Art",
      price: 84.90,
      image: product4,
      isNew: true,
      salesCount: 203,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-bold text-sm uppercase tracking-wide">
              Mais Vendidos
            </span>
          </div>
          
          <h2 className="text-hero mb-4">
            PEÇAS QUE FAZEM A 
            <span className="text-primary"> DIFERENÇA</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            As camisetas que todo mundo está comprando. Designs exclusivos que definem o streetwear brasileiro.
          </p>
        </div>

        {/* Products Carousel */}
        <div ref={productsRef} className="mb-12">
          <CarouselSection 
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }} 
            className="px-4"
          >
            {featuredProducts.map((product) => (
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
        <div className="text-center animate-fade-in">
          <Button variant="hero" size="xl">
            VER TODA A COLEÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;