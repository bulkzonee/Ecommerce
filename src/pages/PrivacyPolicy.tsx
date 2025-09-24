import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                POLÍTICA DE <span className="text-primary">PRIVACIDADE</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Como coletamos, usamos e protegemos suas informações pessoais
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Coletamos informações que você nos fornece diretamente quando:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cria uma conta em nossa loja</li>
                    <li>Realiza uma compra</li>
                    <li>Entra em contato conosco</li>
                    <li>Assina nossa newsletter</li>
                    <li>Interage com nossas redes sociais</li>
                  </ul>
                  
                  <p className="font-semibold">Tipos de dados coletados:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nome completo e dados de identificação</li>
                    <li>Endereço de email e telefone</li>
                    <li>Endereço de entrega e cobrança</li>
                    <li>Informações de pagamento (processadas de forma segura)</li>
                    <li>Histórico de compras e preferências</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos suas Informações</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Utilizamos suas informações para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processar e entregar seus pedidos</li>
                    <li>Comunicar sobre o status do pedido</li>
                    <li>Fornecer atendimento ao cliente</li>
                    <li>Melhorar nossos produtos e serviços</li>
                    <li>Enviar ofertas e novidades (com seu consentimento)</li>
                    <li>Cumprir obrigações legais e fiscais</li>
                    <li>Prevenir fraudes e atividades ilegais</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Compartilhamento de Informações</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                    exceto nas seguintes situações:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Prestadores de serviço:</strong> Transportadoras, processadores de pagamento</li>
                    <li><strong>Obrigações legais:</strong> Quando exigido por lei ou autoridades</li>
                    <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos e propriedade</li>
                    <li><strong>Consentimento:</strong> Quando você autoriza expressamente</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Segurança dos Dados</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Implementamos medidas de segurança técnicas e organizacionais para proteger 
                    suas informações pessoais:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Criptografia SSL para todas as transações</li>
                    <li>Servidores seguros e protegidos</li>
                    <li>Acesso restrito aos dados pessoais</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Backup regular dos dados</li>
                  </ul>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Seus Direitos (LGPD)</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Conforme a Lei Geral de Proteção de Dados, você tem direito a:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                    <li><strong>Correção:</strong> Atualizar dados incorretos ou incompletos</li>
                    <li><strong>Exclusão:</strong> Solicitar a remoção de seus dados</li>
                    <li><strong>Portabilidade:</strong> Receber seus dados em formato legível</li>
                    <li><strong>Oposição:</strong> Opor-se ao tratamento de seus dados</li>
                    <li><strong>Revogação:</strong> Retirar o consentimento a qualquer momento</li>
                  </ul>
                  
                  <p className="mt-4">
                    Para exercer esses direitos, entre em contato conosco através do email: 
                    <strong> privacidade@bulkzone.com.br</strong>
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies e Tecnologias Similares</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Utilizamos cookies para melhorar sua experiência de navegação:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento do site</li>
                    <li><strong>Cookies de preferência:</strong> Lembram suas configurações</li>
                    <li><strong>Cookies analíticos:</strong> Ajudam a melhorar nosso site</li>
                  </ul>
                  <p>
                    Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Retenção de Dados</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Mantemos suas informações pelo tempo necessário para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cumprir os propósitos descritos nesta política</li>
                    <li>Atender obrigações legais e fiscais</li>
                    <li>Resolver disputas e fazer cumprir acordos</li>
                  </ul>
                  <p>
                    Dados de conta inativa por mais de 5 anos são automaticamente excluídos.
                  </p>
                </div>
              </section>

              <section className="bg-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contato</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Para dúvidas sobre esta Política de Privacidade ou exercer seus direitos:
                  </p>
                  <div className="bg-muted/50 p-4 rounded">
                    <p><strong>Email:</strong> privacidade@bulkzone.com.br</p>
                    <p><strong>Telefone:</strong> (11) 3000-0000</p>
                    <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </section>

              <section className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">Alterações nesta Política</h2>
                <p className="text-muted-foreground">
                  Esta Política de Privacidade pode ser atualizada periodicamente. 
                  Notificaremos sobre alterações significativas por email ou através de aviso em nosso site.
                  A versão mais atual estará sempre disponível nesta página.
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

export default PrivacyPolicy;