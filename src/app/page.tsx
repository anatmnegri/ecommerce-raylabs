import { Destaques } from "@/components/Destaques";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[#F8F7F3] ">
      <Hero imageUrl="" infosCard={true} />
      <Destaques />
    </div>
  );
}
