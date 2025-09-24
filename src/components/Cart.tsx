import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, MessageCircle, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleCheckout = () => {
    if (!user) {
      toast.error('Faça login para continuar com a compra');
      navigate('/auth');
      return;
    }
    navigate('/checkout');
  };
  const handleWhatsAppCheckout = () => {
    const itemsList = items
      .map((item) => `${item.name} (${item.size}) - Qtd: ${item.quantity} - ${formatPrice(item.price * item.quantity)}`)
      .join('\n');
    
    const total = formatPrice(getTotalPrice());
    const message = `🛒 *Pedido Bulkzone*\n\n${itemsList}\n\n*Total: ${total}*\n\nGostaria de finalizar este pedido!`;
    
    const whatsappNumber = "5511999999999";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">
            Seu Carrinho ({getTotalItems()})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-auto py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">Carrinho vazio</h3>
                <p className="text-muted-foreground">
                  Adicione produtos incríveis da Bulkzone!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold line-clamp-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Tamanho: {item.size}</p>
                      <p className="font-bold text-primary">{formatPrice(item.price)}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id, item.size)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {/* Shipping Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-800">
                  🚚 <strong>Frete GRÁTIS</strong> acima de R$ 199
                </p>
                {getTotalPrice() < 199 && (
                  <p className="text-xs text-green-600 mt-1">
                    Faltam {formatPrice(199 - getTotalPrice())} para frete grátis!
                  </p>
                )}
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">{formatPrice(getTotalPrice())}</span>
              </div>
              
              {/* Checkout Buttons */}
              <div className="space-y-2">
                <Button 
                  onClick={handleCheckout}
                  className="w-full"
                  size="lg"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Finalizar Compra
                </Button>
                
                <Button 
                  onClick={handleWhatsAppCheckout}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Comprar via WhatsApp
                </Button>
              </div>
              
              <p className="text-xs text-center text-muted-foreground">
                Finalize pelo site ou via WhatsApp
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;