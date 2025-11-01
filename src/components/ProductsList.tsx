"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import productImg from "../../public/images/productImg.svg";
import { Categorias } from "./Categorias";
import { Snowflake } from "lucide-react";

interface ProductsListProps {
  title?: string;
}
export default function ProductsList({ title }: ProductsListProps) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <section className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto gap-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold pt-24 text-[#393330]">{title}</h2>
        <div className="flex items-center gap-4 font-poppins">
          <Categorias title="Categoria 1" icon={Snowflake} />
          <Categorias title="Categoria 2" icon={Snowflake} />
          <Categorias title="Categoria 3" icon={Snowflake} />
        </div>
        <div className="grid grid-cols-4 gap-6 pt-10 ">
          {products.map((produto: any) => (
            <ProductCard
              key={produto.id}
              image={productImg}
              title={produto.nome}
              description={produto.descricao}
              price={`R$${produto.preco}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
