import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import productImg from "../../../public/images/productImg.svg";

export default function Products() {
  return (
    <section className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-semibold pt-24 text-[#393330]">
          PEQUE TUDO QUE PRECISAR
        </h2>
        <div className="grid grid-cols-4 gap-6 pt-10">
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
        </div>
        <div className="grid grid-cols-4 gap-6 pt-10">
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
          <ProductCard
            image={productImg}
            title="Café Torrado Notas Cítricas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            price="R$44,44"
          />
        </div>
      </div>
    </section>
  );
}
