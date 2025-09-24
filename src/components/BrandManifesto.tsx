import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BrandManifesto = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-primary"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-6 py-3 rounded-full mb-8 animate-fade-in">
            <span className="font-bold uppercase tracking-wide">
              Manifesto Bulkzone
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-slide-up">
            <h2 className="text-hero leading-tight">
              NÃO SOMOS APENAS UMA MARCA.
              <br />
              <span className="text-primary">SOMOS UM MOVIMENTO.</span>
            </h2>

            <div className="text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed">
              <p>
                <strong className="text-foreground">Bulkzone nasceu nas ruas.</strong> 
                {" "}Entre os muros grafitados, nos encontros de skate, nos shows underground. 
                Criamos peças para quem não aceita o comum, para quem vive a cultura urbana de verdade.
              </p>

              <p>
                Cada camiseta conta uma história. Cada design é um grito de liberdade. 
                <strong className="text-foreground"> Não fazemos roupas, fazemos declarações.</strong>
              </p>

              <blockquote className="text-2xl md:text-3xl font-bold text-primary italic border-l-4 border-primary pl-6 my-8">
                "Seja rebelde. Seja autêntico. Seja Bulkzone."
              </blockquote>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">50k+</div>
                <div className="text-muted-foreground font-medium">Revolucionários</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">200+</div>
                <div className="text-muted-foreground font-medium">Designs Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">100%</div>
                <div className="text-muted-foreground font-medium">Streetwear Autêntico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">24h</div>
                <div className="text-muted-foreground font-medium">Entrega Expressa</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Button variant="hero" size="xl" className="group">
                JUNTE-SE À REVOLUÇÃO
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandManifesto;