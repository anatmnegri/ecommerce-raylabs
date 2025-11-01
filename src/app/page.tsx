import { Destaques } from "@/components/Destaques";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[#F8F7F3] ">
      <Hero imageUrl="" infosCard={true} />
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 pb-20">
        <h2 className="text-2xl font-semibold text-[#393330]">
          NOSSOS DESTAQUES:
        </h2>
        <Destaques />
      </div>
    </div>
  );
}
