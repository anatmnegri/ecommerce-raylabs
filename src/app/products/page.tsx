"use client";

import { Categorias } from "@/components/Categorias";
import productImg from "../../../public/images/HeroProductsImg.svg";
import { Hero } from "@/components/Hero";
import ProductsList from "@/components/ProductsList";
import { Snowflake } from "lucide-react";

export default function Products() {
  return (
    <section className="min-h-screen w-full">
      <Hero imageUrl={productImg} title="PRODUTOS" infosCard={false} />
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 pb-20">
        <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
          PEGUE O QUE PRECISAR:
        </h2>
        <div className="flex items-center gap-4 font-poppins">
          <Categorias title="Categoria 1" icon={Snowflake} />
          <Categorias title="Categoria 2" icon={Snowflake} />
          <Categorias title="Categoria 3" icon={Snowflake} />
        </div>
        <ProductsList title="PEGUE TUDO QUE PRECISAR" />
      </div>
    </section>
  );
}
