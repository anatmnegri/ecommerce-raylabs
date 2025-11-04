"use client";
import CheckoutForms from "@/components/CheckoutForm";
import { CartItemCard } from "@/components/CartItemCard";
import { useCartDetails } from "@/hooks/useCartDetails";
import productImg from "../../../public/images/productImg.svg";

export default function CheckoutPage() {
  const { items, updateQuantity, removeItem, loading } = useCartDetails();

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold pt-24 text-[#393330] mb-4">
              CARREGANDO...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold pt-24 text-[#393330] mb-4">
              SEU CARRINHO ESTÁ VAZIO
            </h2>
            <p className="text-[#393330]">
              Adicione alguns produtos ao seu carrinho para continuar.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-8">
      <div className=" flex md:justify-between px-20 md:px-0 gap-8 md:flex-row md:gap-16 flex-col">
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
            REVISE SEU PEDIDO
          </h2>
          {items.map((item) => (
            <CartItemCard
              key={item.id}
              imageUrl={item.image || productImg}
              title={item.name}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={(newQuantity: number) =>
                updateQuantity(item.id, newQuantity)
              }
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
            FINALIZE SUA COMPRA
          </h2>
          <CheckoutForms />
        </div>
      </div>
    </section>
  );
}
