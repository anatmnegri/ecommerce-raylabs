"use client";

import productImg from "../../../public/images/HeroProductsImg.svg";
import { Hero } from "@/components/Hero";
import ProductsList from "@/components/ProductsList";

export default function Products() {
  return (
    <section className="min-h-screen w-full">
      <Hero imageUrl={productImg} title="PRODUTOS" infosCard={false} />
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 pb-20">
        <ProductsList title="PEGUE TUDO QUE PRECISAR" />
      </div>
    </section>
  );
}
