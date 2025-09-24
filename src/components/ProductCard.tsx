import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isLimited?: boolean;
  stockCount?: number;
  salesCount?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  isNew = false,
  isLimited = false,
  stockCount,
  salesCount,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const { addItem } = useCart();
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Escolha um tamanho antes de adicionar ao carrinho.",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: String(Math.random()), // In real app, use proper ID
      name,
      price,
      image,
      size: selectedSize,
    });

    toast({
      title: "Produto adicionado!",
      description: `${name} (${selectedSize}) foi adicionado ao carrinho.`,
    });
    setSelectedSize("");
  };

  return (
    <Link to={`/produto/${Math.random()}`} className="block">
      <div 
        className="product-card group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-card">
        <img
          src={isHovered && hoverImage ? hoverImage : image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground font-bold">
              NOVO
            </Badge>
          )}
          {isLimited && (
            <Badge className="urgency-badge">
              EDIÇÃO LIMITADA
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 backdrop-blur-sm"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? 'fill-primary text-primary' : ''}`} 
            />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 backdrop-blur-sm"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full space-y-2">
            {/* Quick Size Selection */}
            <div className="flex gap-1 justify-center mb-2">
              {['P', 'M', 'G', 'GG'].map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`px-2 py-1 text-xs border border-white/50 text-white font-medium transition-colors ${
                    selectedSize === size 
                      ? 'bg-white text-black' 
                      : 'hover:bg-white/20'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full"
              onClick={handleQuickAdd}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              ADICIONAR AO CARRINHO
            </Button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        
        {/* Pricing */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <>
              <span className="text-muted-foreground line-through text-sm">
                {formatPrice(originalPrice)}
              </span>
              <Badge variant="destructive" className="text-xs">
                -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
              </Badge>
            </>
          )}
        </div>

        {/* Social Proof & Urgency */}
        <div className="space-y-2">
          {stockCount && stockCount < 10 && (
            <div className="stock-warning">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Restam apenas {stockCount} unidades!
            </div>
          )}
          
          {salesCount && (
            <div className="text-muted-foreground text-sm">
              🔥 {salesCount} pessoas compraram esta semana
            </div>
          )}
        </div>

        {/* Sizes */}
        <div className="mt-3 flex gap-1">
          {['P', 'M', 'G', 'GG'].map((size) => (
            <button
              key={size}
              className="px-3 py-1 text-xs border border-border hover:border-primary hover:text-primary transition-colors rounded font-medium"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      </div>
    </Link>
  );
};

export default ProductCard;