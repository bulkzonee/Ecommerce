import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from "lucide-react";

import { FaTiktok, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bulkzone-black text-white">
      {/* Trust Badges */}
      <div className="border-b border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Truck className="h-6 w-6 text-primary" />
              <div>
                <div className="font-bold text-sm">FRETE GRÁTIS</div>
                <div className="text-xs opacity-70">Acima de R$199</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <RotateCcw className="h-6 w-6 text-primary" />
              <div>
                <div className="font-bold text-sm">TROCA GARANTIDA</div>
                <div className="text-xs opacity-70">30 dias</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <div>
                <div className="font-bold text-sm">COMPRA SEGURA</div>
                <div className="text-xs opacity-70">SSL Certificado</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <CreditCard className="h-6 w-6 text-primary" />
              <div>
                <div className="font-bold text-sm">12X SEM JUROS</div>
                <div className="text-xs opacity-70">No cartão</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-black mb-4">
                BULK<span className="text-primary">ZONE</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Streetwear revolucionário para quem não se contenta com o comum. 
                Faça parte do movimento urbano mais autêntico do Brasil.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-white/20 bg-primary hover:border-primary hover:bg-primary">
                  <FaInstagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 bg-primary hover:border-primary hover:bg-primary">
                  <FaTwitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 bg-primary hover:border-primary hover:bg-primary">
                  <FaFacebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 bg-primary hover:border-primary hover:bg-primary">
                  <FaTiktok className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-primary">NAVEGAÇÃO</h4>
              <ul className="space-y-3">
                <li><a href="/novidades" className="text-gray-400 hover:text-white transition-colors font-medium">Novidades</a></li>
                <li><a href="/camisetas" className="text-gray-400 hover:text-white transition-colors font-medium">Camisetas</a></li>
                <li><a href="/promocoes" className="text-gray-400 hover:text-white transition-colors font-medium">Promoções</a></li>
                <li><a href="/tamanhos" className="text-gray-400 hover:text-white transition-colors font-medium">Tamanhos</a></li>
                <li><a href="/sobre-nos" className="text-gray-400 hover:text-white transition-colors font-medium">Sobre Nós</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-primary">ATENDIMENTO</h4>
              <ul className="space-y-3">
                <li><a href="/central-de-ajuda" className="text-gray-400 hover:text-white transition-colors font-medium">Central de Ajuda</a></li>
                <li><a href="/como-comprar" className="text-gray-400 hover:text-white transition-colors font-medium">Como Comprar</a></li>
                <li><a href="/politica-de-troca" className="text-gray-400 hover:text-white transition-colors font-medium">Política de Troca</a></li>
                <li><a href="/entrega-e-frete" className="text-gray-400 hover:text-white transition-colors font-medium">Entrega e Frete</a></li>
                <li><a href="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors font-medium">Política de Privacidade</a></li>
                <li><a href="/termos-de-uso" className="text-gray-400 hover:text-white transition-colors font-medium">Termos de Uso</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-primary">CONTATO</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>(51) 98048-5249</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>bulkzone@bulkzone.com.br</span>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>Canoas<br />Brasil</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <div className="text-sm text-gray-400 mb-2">Atendimento:</div>
                <div className="font-bold">Segunda a Sexta: 9h às 18h</div>
                <div className="font-bold">Sábado: 9h às 15h</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Bulkzone. Todos os direitos reservados. Desenvolvido por <a href="www.zypex.com.br">Zypex<strong></strong></a>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Pagamento seguro:</span>
              <div className="flex gap-2">
                {['Visa', 'Master', 'PIX', 'Boleto'].map((payment) => (
                  <div key={payment} className="px-2 py-1 bg-white/10 rounded text-xs font-bold">
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;