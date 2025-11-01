"use client";
import CheckoutForms from "@/components/CheckoutForm";
import { Header } from "@/components/Header";
import { CartItemCard } from "@/components/CartItemCard";
import productImg from "../../../public/images/productImg.svg";
import { TotalPrice } from "@/components/TotalPrice";

export default function CheckoutPage() {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-8">
      <div className=" flex md:justify-between px-20 md:px-0 gap-8 md:flex-row md:gap-16 flex-col">
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
            REVISE SEU PEDIDO
          </h2>
          <CartItemCard
            imageUrl={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            price={44.44}
            quantity={2}
          />
          <CartItemCard
            imageUrl={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            price={44.44}
            quantity={2}
          />
          <CartItemCard
            imageUrl={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            price={44.44}
            quantity={2}
          />
          <TotalPrice price={44.44} quantity={2} />
        </div>
        <div className="basis-1/2">
          <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
            PRENCHA AS INFORMAÇÕES
          </h2>
          <CheckoutForms />
        </div>
      </div>
    </section>
  );
}
