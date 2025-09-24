import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";  
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "LIQUIDAÇÃO VERÃO",
      description: "Até 50% OFF em peças selecionadas",
      discount: "50%",
      validUntil: "31/01/2024",
      color: "bg-red-500"
    },
    {
      id: 2,
      title: "COMBO 3 PEÇAS",
      description: "Leve 3 pague 2 em toda loja",
      discount: "33%",
      validUntil: "15/02/2024", 
      color: "bg-primary"
    },
    {
      id: 3,
      title: "FRETE GRÁTIS",
      description: "Em compras acima de R$ 199",
      discount: "R$ 25",
      validUntil: "Sempre",
      color: "bg-green-500"
    }
  ];

  const saleProducts = [
    {
      id: 1,
      name: "Urban Rebellion Tee",
      price: 59.90,
      originalPrice: 119.90,
      image: product1,
      salesCount: 345,
      stockCount: 8,
    },
    {
      id: 2,
      name: "Minimalist Essential", 
      price: 49.90,
      originalPrice: 79.90,
      image: product2,
      salesCount: 189,
      stockCount: 12,
    },
    {
      id: 3,
      name: "Revolution Statement",
      price: 69.90,
      originalPrice: 139.90,
      image: product3,
      salesCount: 156,
      stockCount: 5,
    },
    {
      id: 4,
      name: "Geometric Street Art",
      price: 54.90,
      originalPrice: 84.90,
      image: product4,
      salesCount: 203,
      stockCount: 15,
    },
    {
      id: 5,
      name: "Dark Mode Core",
      price: 64.90,
      originalPrice: 94.90,
      image: product1,
      salesCount: 167,
      stockCount: 9,
    },
    {
      id: 6,
      name: "Neon Strike Oversized",
      price: 74.90,
      originalPrice: 149.90,
      image: product2,
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
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="font-bold text-sm uppercase tracking-wide">
                🔥 OFERTAS IMPERDÍVEIS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              MEGA <span className="text-primary">PROMOÇÕES</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              As melhores ofertas em streetwear que você não pode perder
            </p>
          </div>

          {/* Promotion Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {promotions.map((promo) => (
              <Card key={promo.id} className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 ${promo.color} text-white px-3 py-1 rounded-bl-lg`}>
                  <span className="font-bold text-sm">-{promo.discount}</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      Válido até: {promo.validUntil}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Flash Sale Banner */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg mb-16 text-center">
            <h2 className="text-3xl font-bold mb-2">⚡ FLASH SALE - 24H APENAS!</h2>
            <p className="text-xl mb-4">Até 70% OFF em produtos selecionados</p>
            <div className="flex justify-center gap-4 text-2xl font-bold">
              <div className="bg-white/20 px-3 py-2 rounded">
                <div>12</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="bg-white/20 px-3 py-2 rounded">
                <div>34</div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="bg-white/20 px-3 py-2 rounded">
                <div>56</div>
                <div className="text-xs">SEG</div>
              </div>
            </div>
          </div>

          {/* Products on Sale */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              PRODUTOS EM <span className="text-primary">PROMOÇÃO</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleProducts.map((product) => (
                <div key={product.id} className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-red-500 hover:bg-red-600">
                      {Math.round((1 - product.price / product.originalPrice!) * 100)}% OFF
                    </Badge>
                  </div>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    salesCount={product.salesCount}
                    stockCount={product.stockCount}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Promo */}
          <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 GANHE 10% DE DESCONTO
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Cadastre-se na nossa newsletter e receba ofertas exclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors">
                GANHAR DESCONTO
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              *Cupom enviado por email após confirmação do cadastro
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;