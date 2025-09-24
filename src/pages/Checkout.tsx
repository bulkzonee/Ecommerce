import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { useCheckout } from '@/hooks/useCheckout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, Truck, MapPin, User, Package } from 'lucide-react';

const Checkout = () => {
  useScrollToTop();
  const { user } = useAuth();
  const { items, getTotalPrice } = useCart();
  const { processOrder, loading } = useCheckout();
  const navigate = useNavigate();
  
  const [checkoutData, setCheckoutData] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Brasil',
    paymentMethod: 'pix'
  });

  // Redirect if not authenticated or cart is empty
  useEffect(() => {
    if (!user) {
      toast.error('Você precisa estar logado para finalizar a compra');
      navigate('/auth');
      return;
    }
    
    if (items.length === 0) {
      toast.error('Seu carrinho está vazio');
      navigate('/');
      return;
    }
  }, [user, items, navigate]);

  // GSAP animations
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.checkout-header', { y: -50, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.checkout-card', { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2 }, '-=0.4');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkoutData.fullName || !checkoutData.phone || !checkoutData.street || !checkoutData.city) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    const order = await processOrder({
      fullName: checkoutData.fullName,
      phone: checkoutData.phone,
      address: {
        street: checkoutData.street,
        city: checkoutData.city,
        state: checkoutData.state,
        zipCode: checkoutData.zipCode,
        country: checkoutData.country
      },
      paymentMethod: checkoutData.paymentMethod
    });

    if (order) {
      navigate('/profile?tab=orders');
    }
  };

  const shippingCost = 15.90;
  const subtotal = getTotalPrice();
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="checkout-header text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Finalizar Compra</h1>
          <p className="text-muted-foreground">Preencha seus dados para concluir o pedido</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <Card className="checkout-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Dados Pessoais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nome Completo *</Label>
                      <Input
                        id="fullName"
                        value={checkoutData.fullName}
                        onChange={(e) => setCheckoutData({ ...checkoutData, fullName: e.target.value })}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={checkoutData.phone}
                        onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="checkout-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Endereço de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="street">Rua/Endereço *</Label>
                    <Input
                      id="street"
                      value={checkoutData.street}
                      onChange={(e) => setCheckoutData({ ...checkoutData, street: e.target.value })}
                      placeholder="Rua, número, complemento"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade *</Label>
                      <Input
                        id="city"
                        value={checkoutData.city}
                        onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                        placeholder="Cidade"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input
                        id="state"
                        value={checkoutData.state}
                        onChange={(e) => setCheckoutData({ ...checkoutData, state: e.target.value })}
                        placeholder="UF"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">CEP</Label>
                      <Input
                        id="zipCode"
                        value={checkoutData.zipCode}
                        onChange={(e) => setCheckoutData({ ...checkoutData, zipCode: e.target.value })}
                        placeholder="00000-000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">País</Label>
                      <Input
                        id="country"
                        value={checkoutData.country}
                        onChange={(e) => setCheckoutData({ ...checkoutData, country: e.target.value })}
                        placeholder="País"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="checkout-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Forma de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={checkoutData.paymentMethod} 
                    onValueChange={(value) => setCheckoutData({ ...checkoutData, paymentMethod: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix">PIX (Desconto de 5%)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Cartão de Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="boleto" id="boleto" />
                      <Label htmlFor="boleto">Boleto Bancário</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full text-lg py-6" 
                disabled={loading}
              >
                {loading ? 'Processando...' : 'Finalizar Pedido'}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="checkout-card sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Resumo do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          Tamanho: {item.size} | Qtd: {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3 h-3" />
                      Frete
                    </span>
                    <span>R$ {shippingCost.toFixed(2)}</span>
                  </div>
                  {checkoutData.paymentMethod === 'pix' && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Desconto PIX (5%)</span>
                      <span>-R$ {(subtotal * 0.05).toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>
                      R$ {checkoutData.paymentMethod === 'pix' 
                        ? (total - subtotal * 0.05).toFixed(2)
                        : total.toFixed(2)
                      }
                    </span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  Prazo de entrega: 5-7 dias úteis
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;