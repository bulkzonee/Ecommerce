import { useState } from 'react';
import { useAuth } from './useAuth';
import { useCart } from './useCart';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface CheckoutData {
  fullName: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
}

export const useCheckout = () => {
  const { user } = useAuth();
  const { items, getTotalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const processOrder = async (checkoutData: CheckoutData) => {
    if (!user) {
      toast.error('Você precisa estar logado para finalizar a compra');
      return null;
    }

    if (items.length === 0) {
      toast.error('Seu carrinho está vazio');
      return null;
    }

    setLoading(true);
    
    try {
      // Generate order number
      const { data: orderNumberData, error: orderNumberError } = await supabase
        .rpc('generate_order_number');

      if (orderNumberError) {
        throw orderNumberError;
      }

      const totalAmount = getTotalPrice();

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          order_number: orderNumberData,
          status: 'pending',
          total_amount: totalAmount,
          payment_method: checkoutData.paymentMethod,
          shipping_address: checkoutData.address
        })
        .select()
        .single();

      if (orderError) {
        throw orderError;
      }

      // Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name,
        product_image: item.image,
        size: item.size,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        throw itemsError;
      }

      // Update user profile with shipping info if needed
      await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          full_name: checkoutData.fullName,
          phone: checkoutData.phone,
          address: checkoutData.address
        });

      // Clear cart
      clearCart();
      
      toast.success('Pedido realizado com sucesso!');
      return order;

    } catch (error) {
      console.error('Error processing order:', error);
      toast.error('Erro ao processar pedido');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    processOrder,
    loading
  };
};