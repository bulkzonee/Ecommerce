import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                TERMOS DE <span className="text-primary">USO</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Condições gerais de uso da loja online Bulkzone
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceite dos Termos</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Ao acessar e usar o site da Bulkzone, você concorda com estes Termos de Uso. 
                    Se você não concordar com qualquer parte destes termos, não deve usar nosso site.
                  </p>
                  <p>
                    Estes termos se aplicam a todos os visitantes, usuários e outros que acessam 
                    ou usam o serviço.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Sobre a Bulkzone</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    A Bulkzone é uma loja online especializada em streetwear e moda urbana, 
                    operada por:
                  </p>
                  <div className="bg-muted/50 p-4 rounded">
                    <p><strong>Razão Social:</strong> Bulkzone Comércio de Roupas Ltda.</p>
                    <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
                    <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
                    <p><strong>Email:</strong> contato@bulkzone.com.br</p>
                  </div>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso do Site</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Você pode usar nosso site para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Navegar e visualizar produtos</li>
                    <li>Fazer compras online</li>
                    <li>Criar e gerenciar sua conta</li>
                    <li>Entrar em contato conosco</li>
                  </ul>
                  
                  <p className="font-semibold">É proibido usar o site para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Atividades ilegais ou não autorizadas</li>
                    <li>Transmitir vírus ou códigos maliciosos</li>
                    <li>Coletar informações de outros usuários</li>
                    <li>Interferir no funcionamento do site</li>
                    <li>Usar bots ou ferramentas automatizadas</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Conta do Usuário</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Para fazer compras, você precisa criar uma conta. Você é responsável por:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Manter a confidencialidade da sua senha</li>
                    <li>Fornecer informações precisas e atualizadas</li>
                    <li>Notificar imediatamente sobre uso não autorizado</li>
                    <li>Todas as atividades que ocorrem em sua conta</li>
                  </ul>
                  
                  <p>
                    Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Compras e Pagamentos</h2>
                <div className="text-muted-foreground space-y-4">
                  <p><strong>Preços e Disponibilidade:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Preços podem mudar sem aviso prévio</li>
                    <li>Disponibilidade sujeita ao estoque</li>
                    <li>Ofertas válidas enquanto durarem os estoques</li>
                  </ul>
                  
                  <p><strong>Formas de Pagamento:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cartões de crédito (Visa, Mastercard)</li>
                    <li>PIX (desconto de 5%)</li>
                    <li>Boleto bancário</li>
                  </ul>
                  
                  <p>
                    Todos os pagamentos são processados de forma segura através de parceiros certificados.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Entrega e Frete</h2>
                <div className="text-muted-foreground space-y-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Prazos de entrega são estimativas e podem variar</li>
                    <li>Frete grátis para compras acima de R$ 199,00</li>
                    <li>Entrega via Correios ou transportadoras parceiras</li>
                    <li>Risco de transporte por conta da transportadora</li>
                  </ul>
                  
                  <p>
                    Não nos responsabilizamos por atrasos causados por fatores externos 
                    (greves, condições climáticas, etc.).
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Trocas e Devoluções</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Conforme o Código de Defesa do Consumidor:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>7 dias para desistência (compras online)</li>
                    <li>30 dias para produtos com defeito</li>
                    <li>90 dias de garantia legal</li>
                  </ul>
                  
                  <p>
                    Consulte nossa Política de Trocas para condições específicas.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Propriedade Intelectual</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Todo o conteúdo do site (textos, imagens, logos, designs) são protegidos 
                    por direitos autorais e propriedade intelectual da Bulkzone.
                  </p>
                  <p>É proibido:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Copiar, reproduzir ou distribuir nosso conteúdo</li>
                    <li>Usar nossas marcas ou logos sem autorização</li>
                    <li>Criar sites similares usando nosso conteúdo</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitação de Responsabilidade</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    A Bulkzone não se responsabiliza por:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Danos indiretos ou consequenciais</li>
                    <li>Perda de lucros ou oportunidades</li>
                    <li>Interrupções no serviço</li>
                    <li>Ações de terceiros</li>
                  </ul>
                  
                  <p>
                    Nossa responsabilidade está limitada ao valor da compra realizada.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Lei Aplicável</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Estes termos são regidos pela legislação brasileira. 
                    Qualquer disputa será resolvida no foro da comarca de São Paulo/SP.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contato</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Para dúvidas sobre estes Termos de Uso:</p>
                  <div className="bg-muted/50 p-4 rounded">
                    <p><strong>Email:</strong> juridico@bulkzone.com.br</p>
                    <p><strong>Telefone:</strong> (11) 3000-0000</p>
                    <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                  </div>
                </div>
              </section>

              <section className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">Alterações nos Termos</h2>
                <p className="text-muted-foreground">
                  Estes Termos de Uso podem ser atualizados periodicamente. 
                  Alterações significativas serão comunicadas por email ou aviso no site. 
                  O uso continuado do site após as alterações constitui aceite dos novos termos.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;