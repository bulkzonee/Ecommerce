import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Clock, Package, CheckCircle } from "lucide-react";

const ExchangePolicy = () => {
  const steps = [
    {
      icon: Clock,
      title: "Prazo de 30 dias",
      description: "Você tem até 30 dias corridos a partir do recebimento para solicitar a troca"
    },
    {
      icon: Package,
      title: "Produto original",
      description: "O produto deve estar sem uso, com etiquetas e na embalagem original"
    },
    {
      icon: RotateCcw,
      title: "Solicite a troca",
      description: "Entre em contato conosco por WhatsApp, email ou telefone"
    },
    {
      icon: CheckCircle,
      title: "Envio gratuito",
      description: "Enviamos um transportador para retirar o produto em sua casa"
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
                POLÍTICA DE <span className="text-primary">TROCA</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Sua satisfação é nossa prioridade. Facilitamos ao máximo o processo de troca
              </p>
            </div>

            {/* Exchange Process */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Exchange Conditions */}
            <div className="bg-muted/50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6">Condições para Troca</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">✅ Aceitamos troca quando:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Produto com defeito de fabricação</li>
                    <li>• Tamanho não serviu</li>
                    <li>• Produto diferente do pedido</li>
                    <li>• Arrependimento da compra</li>
                    <li>• Produto danificado no transporte</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">❌ Não aceitamos troca quando:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Produto foi usado ou lavado</li>
                    <li>• Etiquetas foram removidas</li>
                    <li>• Prazo de 30 dias vencido</li>
                    <li>• Produto danificado por mau uso</li>
                    <li>• Embalagem original danificada</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exchange Types */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <CardTitle>Troca por Tamanho</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Mesmo produto em tamanho diferente
                  </p>
                  <p className="font-bold text-primary">GRÁTIS</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <CardTitle>Troca por Modelo</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Produto diferente do mesmo valor
                  </p>
                  <p className="font-bold text-primary">GRÁTIS</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <CardTitle>Troca com Diferença</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Produto mais caro ou mais barato
                  </p>
                  <p className="font-bold text-primary">PAGUE/RECEBA A DIFERENÇA</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact for exchange */}
            <div className="bg-card p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Como solicitar uma troca?</h2>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco através de um dos canais abaixo e informe:
                <br />
                • Número do pedido • Motivo da troca • Fotos do produto (se houver defeito)
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline">
                  WhatsApp: (11) 99999-9999
                </Button>
                <Button size="lg" variant="outline">
                  Email: trocas@bulkzone.com.br
                </Button>
                <Button size="lg" variant="outline">
                  Telefone: (11) 3000-0000
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Atendimento: Segunda a Sexta das 9h às 18h | Sábado das 9h às 15h
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExchangePolicy;