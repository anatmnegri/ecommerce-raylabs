"use client";
import CheckoutForms from "@/components/CheckoutForm";
import { Header } from "@/components/Header";
import { CartItemCard } from "@/components/CartItemCard";
import productImg from "../../../public/images/productImg.svg";
import { TotalPrice } from "@/components/TotalPrice";

export default function CheckoutPage() {
  return (
    <section className="bg-[#F8F7F3]">
      <div className="container mx-auto px-4 py-8 ">
        <Header />
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-16">
          <CheckoutForms />
          <div>
            <CartItemCard
              imageUrl={productImg}
              title="Café Torrado Notas Cítricas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              price={44.44}
              quantity={2}
            />
            <TotalPrice price={44.44} quantity={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
