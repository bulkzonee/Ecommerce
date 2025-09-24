import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Clock, Package } from "lucide-react";

const ShippingInfo = () => {
  const regions = [
    { name: "Sudeste (SP, RJ, MG, ES)", time: "2-4 dias úteis", price: "R$ 15,90" },
    { name: "Sul (PR, SC, RS)", time: "3-5 dias úteis", price: "R$ 18,90" },
    { name: "Nordeste (BA, PE, CE, etc.)", time: "4-7 dias úteis", price: "R$ 22,90" },
    { name: "Norte (AM, PA, RO, etc.)", time: "5-8 dias úteis", price: "R$ 28,90" },
    { name: "Centro-Oeste (DF, GO, MT, MS)", time: "5-8 dias úteis", price: "R$ 25,90" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                ENTREGA E <span className="text-primary">FRETE</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Informações completas sobre prazos, valores e como acompanhar seu pedido
              </p>
            </div>

            {/* Free Shipping Highlight */}
            <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mb-12 text-center">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary mb-2">FRETE GRÁTIS</h2>
              <p className="text-lg">
                Para compras acima de <strong>R$ 199,00</strong> o frete é por nossa conta!
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                *Válido para todo o território nacional
              </p>
            </div>

            {/* Shipping Regions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Prazos e Valores por Região</h2>
              <div className="space-y-4">
                {regions.map((region, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-bold">{region.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {region.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{region.price}</p>
                        <p className="text-sm text-muted-foreground">PAC/Sedex</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Shipping Process */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    Processamento do Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>PIX:</strong> Liberação imediata após confirmação</li>
                    <li>• <strong>Cartão:</strong> Liberação em até 2 horas</li>
                    <li>• <strong>Boleto:</strong> Liberação em até 2 dias úteis</li>
                  </ul>
                  <div className="mt-4 p-3 bg-muted/50 rounded">
                    <p className="text-sm">
                      <strong>Prazo total:</strong> Processamento + Transporte
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-6 w-6 text-primary" />
                    Rastreamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Código enviado por email após despacho</li>
                    <li>• Acompanhe em tempo real nos Correios</li>
                    <li>• Notificações SMS opcionais</li>
                    <li>• Status atualizado na sua conta</li>
                  </ul>
                  <div className="mt-4 p-3 bg-muted/50 rounded">
                    <p className="text-sm">
                      <strong>Dica:</strong> Salve nosso contato para receber as atualizações
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <div className="bg-muted/50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6">Informações Importantes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">📦 Embalagem</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Produtos enviados em embalagem própria</li>
                    <li>• Proteção adequada contra avarias</li>
                    <li>• Embalagem sustentável e reciclável</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">🏠 Entrega</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Entrega em horário comercial</li>
                    <li>• Necessário maior de idade para receber</li>
                    <li>• 3 tentativas de entrega automáticas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact for shipping issues */}
            <div className="bg-card p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Problemas com a Entrega?</h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar com qualquer questão relacionada ao seu pedido
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5511999999999" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors">
                  WhatsApp: (11) 99999-9999
                </a>
                <a href="mailto:entrega@bulkzone.com.br" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-colors">
                  Email: entrega@bulkzone.com.br
                </a>
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

export default ShippingInfo;