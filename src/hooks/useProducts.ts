import { useEffect, useState } from "react";
import { getProducts, Product } from "@/services/productsService";

export function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts();
        setData(result);
      } catch (err) {
        setError((err as Error).message || "Erro inesperado");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
