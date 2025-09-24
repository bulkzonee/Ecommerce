import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";  
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: "Future Vision Tee",
      price: 94.90,
      image: product1,
      isNew: true,
      salesCount: 23,
      releaseDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Cyber Street Essential", 
      price: 89.90,
      originalPrice: 109.90,
      image: product2,
      isNew: true,
      salesCount: 45,
      releaseDate: "2024-01-12"
    },
    {
      id: 3,
      name: "Neon Rebellion Limited",
      price: 124.90,
      image: product3,
      isNew: true,
      isLimited: true,
      salesCount: 18,
      stockCount: 7,
      releaseDate: "2024-01-10"
    },
    {
      id: 4,
      name: "Digital Art Collection",
      price: 99.90,
      image: product4,
      isNew: true,
      salesCount: 67,
      releaseDate: "2024-01-08"
    },
    {
      id: 5,
      name: "Urban Tech Oversized",
      price: 119.90,
      image: product1,
      isNew: true,
      salesCount: 34,
      releaseDate: "2024-01-05"
    },
    {
      id: 6,
      name: "Matrix Code Tee",
      price: 84.90,
      originalPrice: 104.90,
      image: product2,
      isNew: true,
      salesCount: 56,
      releaseDate: "2024-01-03"
    },
    {
      id: 7,
      name: "Holographic Dreams",
      price: 134.90,
      image: product3,
      isNew: true,
      isLimited: true,
      salesCount: 12,
      stockCount: 4,
      releaseDate: "2024-01-01"
    },
    {
      id: 8,
      name: "Pixel Art Revolution",
      price: 79.90,
      image: product4,
      isNew: true,
      salesCount: 89,
      releaseDate: "2023-12-28"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-bold text-sm uppercase tracking-wide">
                ✨ ACABOU DE CHEGAR
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              NOVOS <span className="text-primary">LANÇAMENTOS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              As últimas criações do streetwear brasileiro que estão chegando agora
            </p>
          </div>

          {/* New Collection Banner */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 p-8 rounded-lg mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">🚀 COLEÇÃO FUTURE TECH</h2>
            <p className="text-xl mb-4">Designs futuristas que definem o streetwear de amanhã</p>
            <Badge variant="outline" className="text-lg px-4 py-2">
              Disponível por tempo limitado
            </Badge>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-muted-foreground">
              Mostrando {newProducts.length} novos produtos
            </p>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mais Recentes</SelectItem>
                <SelectItem value="popular">Mais Populares</SelectItem>
                <SelectItem value="price-low">Menor Preço</SelectItem>
                <SelectItem value="price-high">Maior Preço</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {newProducts.map((product, index) => (
              <div key={product.id} className="relative">
                {/* New Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary hover:bg-primary/90">
                    NOVO
                  </Badge>
                </div>
                
                {/* Limited Badge */}
                {product.isLimited && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="destructive">
                      LIMITADO
                    </Badge>
                  </div>
                )}

                {/* Release Date Badge */}
                {index < 3 && (
                  <div className="absolute top-14 left-4 z-10">
                    <Badge variant="outline" className="text-xs bg-background/90">
                      Há {Math.floor((new Date().getTime() - new Date(product.releaseDate).getTime()) / (1000 * 60 * 60 * 24))} dias
                    </Badge>
                  </div>
                )}

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
          </div>

          {/* Coming Soon Section */}
          <div className="bg-muted/50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              EM BREVE: <span className="text-primary">PRÓXIMOS DROPS</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-card p-6 rounded-lg mb-4">
                  <div className="text-4xl mb-4">👽</div>
                  <h3 className="font-bold text-lg mb-2">ALIEN INVASION</h3>
                  <p className="text-sm text-muted-foreground">
                    Coleção intergaláctica com estampas exclusivas
                  </p>
                </div>
                <Badge variant="outline">Fevereiro 2024</Badge>
              </div>
              
              <div className="text-center">
                <div className="bg-card p-6 rounded-lg mb-4">
                  <div className="text-4xl mb-4">🌆</div>
                  <h3 className="font-bold text-lg mb-2">NIGHT CITY</h3>
                  <p className="text-sm text-muted-foreground">
                    Inspiração cyberpunk para o streetwear urbano
                  </p>
                </div>
                <Badge variant="outline">Março 2024</Badge>
              </div>
              
              <div className="text-center">
                <div className="bg-card p-6 rounded-lg mb-4">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="font-bold text-lg mb-2">RETRO GAMING</h3>
                  <p className="text-sm text-muted-foreground">
                    Nostalgia dos games clássicos em alta qualidade
                  </p>
                </div>
                <Badge variant="outline">Abril 2024</Badge>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              🔔 SEJA O PRIMEIRO A SABER
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Cadastre-se e receba notificações sobre novos lançamentos antes de todo mundo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors">
                CADASTRAR
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              *Você receberá um email de confirmação e poderá cancelar a qualquer momento
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;