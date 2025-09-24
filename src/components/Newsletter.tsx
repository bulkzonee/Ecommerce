import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, Zap, Users } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2">
              <Mail className="h-4 w-4 mr-2" />
              CLUBE EXCLUSIVO BULKZONE
            </Badge>
            
            <h2 className="text-hero mb-4">
              SEJA O PRIMEIRO A SABER DOS 
              <br />
              <span className="text-primary">LANÇAMENTOS EXCLUSIVOS</span>
            </h2>
            
            <p className="text-xl opacity-90 leading-relaxed">
              Ganhe 15% OFF na primeira compra + acesso antecipado às coleções limitadas
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Gift className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold">15% OFF Primeira Compra</h3>
                <p className="text-sm opacity-80">Desconto exclusivo para novos membros</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Zap className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold">Acesso Antecipado</h3>
                <p className="text-sm opacity-80">48h antes do lançamento oficial</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold">Conteúdo Exclusivo</h3>
                <p className="text-sm opacity-80">Looks, dicas e muito mais</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-slide-up">
            <div className="flex gap-3 mb-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/90 border-0 text-black placeholder:text-gray-600 font-medium"
                required
              />
              <Button 
                type="submit" 
                className="bg-red-800 hover:bg-primary text-white font-bold px-8 whitespace-nowrap"
                disabled={isSubmitted}
              >
                {isSubmitted ? "✓ INSCRITO!" : "QUERO 15% OFF"}
              </Button>
            </div>
            
            <p className="text-sm opacity-75">
              Ao se inscrever, você concorda com nossa política de privacidade.
              <br />
              <span className="font-bold">+2.5k pessoas já fazem parte!</span>
            </p>
          </form>

          {/* Social Proof */}
          <div className="mt-12 flex justify-center items-center gap-4 opacity-80 animate-fade-in">
            <div className="flex -space-x-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-sm font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm">
              <strong>2.547</strong> revolucionários se inscreveram essa semana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;