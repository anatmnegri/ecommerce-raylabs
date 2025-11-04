import { useMemo } from "react";
import { useCart, CartDetails } from "@/contexts/CartContext";
import { useProducts } from "@/hooks/useProducts";

export function useCartDetails() {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    getTotalItems,
    clearCart,
    isCartOpen,
    openCart,
    closeCart,
  } = useCart();
  const { data: products, loading: productsLoading } = useProducts();

  const itemsWithDetails: CartDetails[] = useMemo(() => {
    if (!products || products.length === 0) return [];

    return items.map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      if (!product) {
        return {
          id: cartItem.productId,
          name: "Produto não encontrado",
          description: "",
          price: 0,
          quantity: cartItem.quantity,
        };
      }

      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: cartItem.quantity,
      };
    });
  }, [items, products]);

  const getTotalPrice = () => {
    return itemsWithDetails.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return {
    items: itemsWithDetails,
    rawItems: items,
    addItem,
    removeItem,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
    isCartOpen,
    openCart,
    closeCart,
    loading: productsLoading,
  };
}
