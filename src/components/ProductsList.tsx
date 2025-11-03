"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/ProductCard";
import productImg from "../../public/images/productImg.svg";

export default function ProductsList() {
  const { data: products, loading, error } = useProducts();

  if (loading) {
    return <div>Carregando produtos...</div>;
  }

  if (error) {
    return <div>Erro ao buscar produtos: {error}</div>;
  }

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((produto: any) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              image={productImg}
              name={produto.name}
              description={produto.description}
              price={`R$${produto.price.toFixed(2)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
