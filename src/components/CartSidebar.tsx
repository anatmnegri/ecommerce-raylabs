"use client";

import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartItemCard } from "@/components/CartItemCard";
import { useCart } from "@/contexts/CartContext";
import { useCartDetails } from "@/hooks/useCartDetails";
import { ShoppingCart } from "lucide-react";
import productImg from "../../public/images/productImg.svg";

export function CartSidebar() {
  const { isCartOpen, closeCart } = useCart();
  const { items, updateQuantity, removeItem, getTotalPrice, loading } =
    useCartDetails();
  const router = useRouter();

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  if (loading) {
    return (
      <Sheet open={isCartOpen} onOpenChange={closeCart}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart size={20} />
              Meu Carrinho
            </SheetTitle>
          </SheetHeader>
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Carregando...</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="w-[400px] sm:w-[540px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart size={20} />
            Meu Carrinho ({items.length} {items.length === 1 ? "item" : "itens"}
            )
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <ShoppingCart size={48} className="text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Seu carrinho está vazio</p>
              <p className="text-sm text-muted-foreground">
                Adicione produtos para começar suas compras
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  imageUrl={item.image || productImg}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  onQuantityChange={(quantity) =>
                    updateQuantity(item.id, quantity)
                  }
                  onRemove={() => removeItem(item.id)}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t pt-4">
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-[#EE8542]">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full rounded-full font-semibold py-3"
                size="lg"
              >
                Finalizar Compra
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
