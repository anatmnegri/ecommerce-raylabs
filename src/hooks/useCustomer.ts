import { useEffect, useState } from "react";
import { getCustomers, Customer } from "@/services/customerService";

export function useCustomers() {
  const [data, setData] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCustomers();
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
