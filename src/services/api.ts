const BASE_URL = "http://localhost:3030/api";

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!res.ok) throw new Error("Erro ao buscar dados da API");
  return res.json();
}
