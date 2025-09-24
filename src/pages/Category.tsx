import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

// Mock products data
const mockProducts = {
  oversized: [
    {
      id: "1",
      name: "Camiseta Oversized Revolution",
      price: 89.90,
      originalPrice: 129.90,
      image: "/src/assets/product-1.jpeg",
      hoverImage: "/src/assets/product-2.jpeg",
      isNew: true,
      stockCount: 8,
    },
    {
      id: "5",
      name: "Oversized Urban Jungle",
      price: 94.90,
      image: "/src/assets/product-2.jpeg",
      salesCount: 67,
    },
  ],
  regata: [
    {
      id: "6",
      name: "Regata Bulkzone Essentials",
      price: 69.90,
      originalPrice: 89.90,
      image: "/src/assets/product-3.jpeg",
      isLimited: true,
    },
  ],
  camisas: [
    {
      id: "7",
      name: "Camisa Social Street",
      price: 149.90,
      image: "/src/assets/product-4.jpeg",
      salesCount: 45,
    },
  ],
  meme: [
    {
      id: "8",
      name: "Camiseta Meme Culture",
      price: 79.90,
      image: "/src/assets/product-1.jpeg",
      isNew: true,
      salesCount: 234,
    },
  ],
  anime: [
    {
      id: "9",
      name: "Camiseta Anime Exclusive",
      price: 94.90,
      originalPrice: 119.90,
      image: "/src/assets/product-2.jpeg",
      stockCount: 3,
    },
  ],
};

const categoryTitles = {
  oversized: "Oversized",
  regata: "Regatas",
  camisas: "Camisas", 
  bermudas: "Bermudas",
  straps: "Straps",
  cintos: "Cintos",
  acessorios: "Acessórios",
  meme: "Camisas Meme",
  anime: "Anime Collection",
};

const Category = () => {
  useScrollToTop(); // Fix scroll position on navigation
  
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  
  const products = mockProducts[category as keyof typeof mockProducts] || [];
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || "Categoria";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-foreground capitalize">{categoryTitle}</span>
        </div>

        {/* Category Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black text-foreground mb-2">
              {categoryTitle}
            </h1>
            <p className="text-muted-foreground">
              {products.length} produtos encontrados
            </p>
          </div>
          
          {/* Filters and View Controls */}
          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background"
            >
              <option value="popular">Mais Populares</option>
              <option value="newest">Mais Novos</option>
              <option value="price-low">Menor Preço</option>
              <option value="price-high">Maior Preço</option>
            </select>
            
            {/* View Mode */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-red-100 border border-primary/20 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                🔥 Promoção Especial {categoryTitle}
              </h2>
              <p className="text-muted-foreground">
                Leve 3 peças e ganhe 20% de desconto + frete grátis
              </p>
            </div>
            <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2">
              3 por 2
            </Badge>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <div key={product.id}>
                <Link to={`/produto/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Em breve!
            </h2>
            <p className="text-muted-foreground mb-6">
              Estamos preparando produtos incríveis para a categoria {categoryTitle}.
            </p>
            <Button asChild>
              <Link to="/">
                Ver Outros Produtos
              </Link>
            </Button>
          </div>
        )}

        {/* Load More (if needed) */}
        {products.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Produtos
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;