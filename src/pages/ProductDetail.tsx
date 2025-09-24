import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { useScrollToTop } from "@/hooks/useScrollToTop";

// Mock product data (in a real app, this would come from an API)
const mockProduct = {
  id: "1",
  name: "Camiseta Oversized Bulkzone Revolution",
  price: 89.90,
  originalPrice: 129.90,
  images: [
    "/src/assets/product-1.jpeg",
    "/src/assets/product-2.jpeg",
    "/src/assets/product-3.jpeg",
    "/src/assets/product-4.jpeg",
  ],
  description: "Camiseta oversized premium com estampa exclusiva Bulkzone. Tecido 100% algodão com toque macio e durabilidade superior. Perfeita para quem busca conforto e estilo urbano.",
  details: [
    "100% Algodão Premium",
    "Estampa Digital de Alta Qualidade", 
    "Modelagem Oversized Unissex",
    "Disponível do P ao XXG",
    "Lavagem à máquina",
  ],
  sizes: ["P", "M", "G", "GG", "XG", "XXG"],
  colors: ["Preto", "Branco", "Cinza"],
  rating: 4.8,
  reviews: 127,
  stockCount: 8,
  salesCount: 89,
};

const mockRelatedProducts = [
  {
    id: "2",
    name: "Camiseta Streetwear Underground",
    price: 79.90,
    originalPrice: 109.90,
    image: "/src/assets/product-2.jpg",
    isNew: true,
  },
  {
    id: "3", 
    name: "Regata Bulkzone Urban",
    price: 69.90,
    image: "/src/assets/product-3.jpg",
    stockCount: 5,
  },
  {
    id: "4",
    name: "Camiseta Anime Exclusive",
    price: 94.90,
    originalPrice: 119.90,
    image: "/src/assets/product-4.jpg",
    salesCount: 156,
  },
];

const ProductDetail = () => {
  useScrollToTop(); // Fix scroll position on navigation
  
  const { id } = useParams();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("Preto");
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha um tamanho antes de adicionar ao carrinho.",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      image: mockProduct.images[0],
      size: selectedSize,
    });

    toast({
      title: "Produto adicionado!",
      description: `${mockProduct.name} (${selectedSize}) foi adicionado ao carrinho.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/categoria/oversized" className="hover:text-primary">Oversized</Link>
          <span>/</span>
          <span className="text-foreground truncate">{mockProduct.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-4 md:mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-card rounded-lg overflow-hidden">
              <img
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-card rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${mockProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 md:space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary text-primary-foreground">BESTSELLER</Badge>
              {mockProduct.stockCount < 10 && (
                <Badge variant="destructive">ÚLTIMAS UNIDADES</Badge>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {mockProduct.name}
            </h1>

            {/* Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 md:h-5 md:w-5 ${
                        i < Math.floor(mockProduct.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-sm md:text-base">{mockProduct.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">
                ({mockProduct.reviews} avaliações)
              </span>
            </div>

            {/* Pricing */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {formatPrice(mockProduct.price)}
              </span>
              {mockProduct.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl text-muted-foreground line-through">
                    {formatPrice(mockProduct.originalPrice)}
                  </span>
                  <Badge variant="destructive" className="text-xs">
                    -{Math.round(((mockProduct.originalPrice - mockProduct.price) / mockProduct.originalPrice) * 100)}%
                  </Badge>
                </div>
              )}
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-semibold mb-3 text-sm md:text-base">Tamanho:</h3>
              <div className="grid grid-cols-3 sm:flex gap-2">
                {mockProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 md:px-4 border rounded font-medium transition-colors text-sm md:text-base ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-3 text-sm md:text-base">Cor: {selectedColor}</h3>
              <div className="flex flex-wrap gap-2">
                {mockProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-2 md:px-4 border rounded font-medium transition-colors text-sm md:text-base ${
                      selectedColor === color
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                onClick={handleAddToCart}
                size="lg" 
                className="flex-1 text-sm md:text-base"
              >
                <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                ADICIONAR AO CARRINHO
              </Button>
              
              <div className="flex gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex-1 sm:flex-none"
                >
                  <Heart className={`h-4 w-4 md:h-5 md:w-5 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                </Button>
                
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>

            {/* Urgency Messages */}
            <div className="space-y-3">
              {mockProduct.stockCount < 10 && (
                <div className="stock-warning">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Restam apenas {mockProduct.stockCount} unidades!
                </div>
              )}
              
              {mockProduct.salesCount && (
                <div className="text-muted-foreground text-sm">
                  🔥 {mockProduct.salesCount} pessoas compraram esta semana
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3 text-sm md:text-base">Descrição:</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {mockProduct.description}
                </p>
              </div>

              {/* Details */}
              <div>
                <h3 className="font-semibold mb-3 text-sm md:text-base">Detalhes:</h3>
                <ul className="space-y-2">
                  {mockProduct.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Você também pode gostar
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {mockRelatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;