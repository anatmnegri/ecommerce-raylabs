import { useEffect, useState } from "react";
import { getOrders, Order } from "@/services/orderService";

export function useOrders(customerId?: string) {
  const [data, setData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOrders(customerId!);
        setData(result);
      } catch (err) {
        setError((err as Error).message || "Erro inesperado");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [customerId]);

  return { data, loading, error };
}
