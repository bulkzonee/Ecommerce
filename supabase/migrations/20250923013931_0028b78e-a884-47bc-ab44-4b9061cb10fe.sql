-- Fix security warning by setting search_path on functions
CREATE OR REPLACE FUNCTION public.generate_order_number()
RETURNS TEXT
SECURITY DEFINER SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN 'BZ' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
END;
$$;