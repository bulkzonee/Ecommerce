import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";  
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const Categories = () => {
  const categories = [
    { name: "Camisetas", count: 45, active: true },
    { name: "Regatas", count: 23, active: false },
    { name: "Hoodies", count: 18, active: false },
    { name: "Acessórios", count: 12, active: false }
  ];

  const products = [
    {
      id: 1,
      name: "Urban Rebellion Tee",
      price: 89.90,
      originalPrice: 119.90,
      image: product1,
      isNew: true,
      salesCount: 245,
      stockCount: 8,
    },
    {
      id: 2,
      name: "Minimalist Essential",
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
    {
      id: 5,
      name: "Dark Mode Core",
      price: 94.90,
      image: product1,
      salesCount: 167,
    },
    {
      id: 6,
      name: "Neon Strike Oversized",
      price: 109.90,
      originalPrice: 149.90, 
      image: product2,
      isLimited: true,
      salesCount: 89,
      stockCount: 3,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              NOSSAS <span className="text-primary">CAMISETAS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubra a coleção completa de streetwear que define tendências
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 space-y-6">
              {/* Categories */}
              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Categorias</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        category.active 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm opacity-70">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Preço</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 rounded hover:bg-muted transition-colors">
                    Até R$ 50
                  </button>
                  <button className="w-full text-left p-2 rounded hover:bg-muted transition-colors">
                    R$ 50 - R$ 100
                  </button>
                  <button className="w-full text-left p-2 rounded hover:bg-muted transition-colors">
                    R$ 100 - R$ 150
                  </button>
                  <button className="w-full text-left p-2 rounded hover:bg-muted transition-colors">
                    Acima de R$ 150
                  </button>
                </div>
              </div>

              {/* Size Filter */}
              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Tamanhos</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['P', 'M', 'G', 'GG'].map((size) => (
                    <button
                      key={size}
                      className="p-2 border border-border rounded hover:border-primary hover:bg-primary/10 transition-colors text-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <p className="text-muted-foreground">
                  Mostrando {products.length} de 45 produtos
                </p>
                
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Mais Populares</SelectItem>
                    <SelectItem value="newest">Mais Recentes</SelectItem>
                    <SelectItem value="price-low">Menor Preço</SelectItem>
                    <SelectItem value="price-high">Maior Preço</SelectItem>
                    <SelectItem value="name">Nome A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    isNew={product.isNew}
                    isLimited={product.isLimited}
                    salesCount={product.salesCount}
                    stockCount={product.stockCount}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline" size="lg">
                  CARREGAR MAIS PRODUTOS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;