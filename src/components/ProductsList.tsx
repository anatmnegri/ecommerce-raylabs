"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import productImg from "../../public/images/productImg.svg";

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
    <section className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
