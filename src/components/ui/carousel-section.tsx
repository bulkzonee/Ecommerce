import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

interface CarouselSectionProps {
  children: React.ReactNode;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  className?: string;
}

const CarouselSection = ({ 
  children, 
  itemsPerView = { mobile: 1, tablet: 2, desktop: 4 }, 
  className = "" 
}: CarouselSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(itemsPerView.desktop);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setCurrentItemsPerView(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setCurrentItemsPerView(itemsPerView.tablet);
      } else {
        setCurrentItemsPerView(itemsPerView.desktop);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [itemsPerView]);

  useEffect(() => {
    if (containerRef.current) {
      const totalItems = React.Children.count(children);
      setMaxIndex(Math.max(0, totalItems - currentItemsPerView));
      setCurrentIndex(0);
      gsap.set(containerRef.current, { x: 0 });
    }
  }, [children, currentItemsPerView]);

  const slideNext = () => {
    if (currentIndex < maxIndex && containerRef.current) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      
      const totalItems = React.Children.count(children);
      gsap.to(containerRef.current, {
        x: `-${newIndex * (100 / totalItems) * currentItemsPerView}%`,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0 && containerRef.current) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      
      const totalItems = React.Children.count(children);
      gsap.to(containerRef.current, {
        x: `-${newIndex * (100 / totalItems) * currentItemsPerView}%`,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  };

  const slideToIndex = (index: number) => {
    if (containerRef.current && index !== currentIndex) {
      setCurrentIndex(index);
      const totalItems = React.Children.count(children);
      gsap.to(containerRef.current, {
        x: `-${index * (100 / totalItems) * currentItemsPerView}%`,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-600 ease-out"
          style={{ width: `${(React.Children.count(children) * 100) / currentItemsPerView}%` }}
        >
          {React.Children.map(children, (child, index) => (
            <div 
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / React.Children.count(children)}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {maxIndex > 0 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={slidePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={slideNext}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors hover:scale-125 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => slideToIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CarouselSection;