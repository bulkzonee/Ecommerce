import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-center">
              SOBRE A <span className="text-primary">BULKZONE</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed">
                A Bulkzone nasceu da paixão pelo streetwear autêntico e da necessidade de trazer para o Brasil 
                designs únicos que falam a linguagem da rua. Somos mais que uma marca de roupas - somos um 
                movimento urbano que conecta pessoas através do estilo.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                  <p>
                    Democratizar o streetwear de qualidade no Brasil, oferecendo peças exclusivas 
                    que expressam personalidade e atitude urbana.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
                  <p>
                    Ser reconhecida como a principal referência em streetwear brasileiro, 
                    inspirando uma nova geração de entusiastas da moda urbana.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Por que escolher a Bulkzone?</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Designs Exclusivos</h4>
                  <p className="text-sm">Criações únicas desenvolvidas por artistas brasileiros</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👕</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Qualidade Premium</h4>
                  <p className="text-sm">Tecidos selecionados e acabamento impecável</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Entrega Rápida</h4>
                  <p className="text-sm">Envio para todo Brasil com agilidade</p>
                </div>
              </div>

              <div className="bg-muted/50 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Faça Parte do Movimento</h3>
                <p className="text-center mb-6">
                  Junte-se a milhares de pessoas que já escolheram expressar sua personalidade 
                  através do streetwear autêntico da Bulkzone.
                </p>
                <div className="text-center">
                  <a href="/" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors">
                    EXPLORAR COLEÇÕES
                  </a>
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

export default AboutUs;