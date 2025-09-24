import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, CreditCard, Truck, CheckCircle } from "lucide-react";

const HowToBuy = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Escolha seus produtos",
      description: "Navegue pela nossa coleção e adicione os produtos desejados ao carrinho. Certifique-se de escolher o tamanho correto consultando nossa tabela de medidas."
    },
    {
      icon: CreditCard,
      title: "2. Finalize o pagamento", 
      description: "Escolha entre cartão de crédito, PIX ou boleto. No cartão, você pode parcelar em até 12x sem juros. Todos os pagamentos são 100% seguros."
    },
    {
      icon: Truck,
      title: "3. Acompanhe a entrega",
      description: "Após a confirmação do pagamento, você receberá o código de rastreamento por email. Frete grátis para compras acima de R$199."
    },
    {
      icon: CheckCircle,
      title: "4. Receba em casa",
      description: "Seu pedido chegará no prazo estimado. Confira os produtos e aproveite! Caso algo não esteja correto, temos 30 dias para troca."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                COMO <span className="text-primary">COMPRAR</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Processo simples e seguro para você receber suas peças favoritas
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 mb-12">
              {steps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-16">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="bg-muted/50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Formas de Pagamento</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Cartão de Crédito</h3>
                  <p className="text-sm text-muted-foreground">
                    Visa, Mastercard<br />
                    Parcelamento em até 12x sem juros
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-bold mb-2">PIX</h3>
                  <p className="text-sm text-muted-foreground">
                    Pagamento instantâneo<br />
                    5% de desconto
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <h3 className="font-bold mb-2">Boleto Bancário</h3>
                  <p className="text-sm text-muted-foreground">
                    Vencimento em 3 dias<br />
                    Confirmação em até 2 dias úteis
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-card p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8">Entrega e Frete</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Prazos de Entrega</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Sudeste:</strong> 2-4 dias úteis</li>
                    <li>• <strong>Sul:</strong> 3-5 dias úteis</li>
                    <li>• <strong>Nordeste:</strong> 4-7 dias úteis</li>
                    <li>• <strong>Norte/Centro-Oeste:</strong> 5-8 dias úteis</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Frete Grátis</h3>
                  <p className="text-muted-foreground mb-4">
                    Para compras acima de <strong className="text-primary">R$ 199,00</strong> 
                    o frete é por nossa conta!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    *Válido para todo o território nacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowToBuy;