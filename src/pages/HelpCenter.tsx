import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

const HelpCenter = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Como faço para rastrear meu pedido?",
      answer: "Após a confirmação do pagamento, você receberá um código de rastreamento por email. Você também pode acompanhar o status do seu pedido na área 'Meus Pedidos' em sua conta."
    },
    {
      id: "item-2", 
      question: "Qual o prazo de entrega?",
      answer: "O prazo varia conforme sua região: Sudeste (2-4 dias úteis), Sul (3-5 dias úteis), Nordeste (4-7 dias úteis), Norte/Centro-Oeste (5-8 dias úteis). Frete grátis para compras acima de R$199."
    },
    {
      id: "item-3",
      question: "Como funciona a política de troca?",
      answer: "Você tem até 30 dias para solicitar a troca. O produto deve estar sem uso, com etiquetas e na embalagem original. Entre em contato conosco para iniciar o processo."
    },
    {
      id: "item-4",
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos cartões de crédito (Visa, Mastercard), PIX, boleto bancário e parcelamento em até 12x sem juros no cartão de crédito."
    },
    {
      id: "item-5",
      question: "Como escolher o tamanho certo?",
      answer: "Consulte nossa tabela de medidas disponível em cada produto. Em caso de dúvida, entre em contato conosco. Oferecemos troca gratuita se o tamanho não servir."
    },
    {
      id: "item-6",
      question: "O site é seguro para compras?",
      answer: "Sim! Utilizamos certificado SSL e criptografia para proteger seus dados. Todos os pagamentos são processados por plataformas seguras e confiáveis."
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
                CENTRAL DE <span className="text-primary">AJUDA</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Encontre respostas para as dúvidas mais comuns ou entre em contato conosco
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Atendimento rápido e personalizado</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    (11) 99999-9999
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Telefone</CardTitle>
                  <CardDescription>Segunda a Sexta: 9h às 18h</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    (11) 3000-0000
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Resposta em até 24h</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    contato@bulkzone.com.br
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Still Need Help */}
            <div className="bg-muted/50 p-8 rounded-lg mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ainda precisa de ajuda?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você com qualquer dúvida ou problema.
              </p>
              <Button size="lg">
                FALAR COM ATENDIMENTO
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;