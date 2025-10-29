"use client";
import CheckoutForms from "@/components/CheckoutForm";
import { Header } from "@/components/Header";
import { CartItemCard } from "@/components/CartItemCard";
import productImg from "../../../public/images/productImg.svg";
import { TotalPrice } from "@/components/TotalPrice";

export default function CheckoutPage() {
  return (
    <section className="bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className=" flex justify-center gap-8 md:flex-row md:gap-16 pt-24 ">
          <div>
            <h2 className="text-2xl font-bold ">Revise seu pedido</h2>
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
          <div>
            <h2 className="text-2xl font-bold ">Preencha as informações</h2>
            <CheckoutForms />
          </div>
        </div>
      </div>
    </section>
  );
}
