import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5551980485249"; // Número do WhatsApp
  
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim do site da Bulkzone e gostaria de mais informações.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 animate-float"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        
        {/* Chat Popup */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border animate-slide-up">
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-bold">Chat WhatsApp</h3>
                <p className="text-sm opacity-90">Bulkzone Streetwear</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mb-2">
                  <p className="text-sm text-gray-700">
                    Olá! 👋 <br />
                    Como podemos te ajudar hoje?
                  </p>
                </div>
                <p className="text-xs text-gray-500">Bulkzone Team • Agora</p>
              </div>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Iniciar Conversa
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingWhatsApp;