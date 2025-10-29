import CheckoutForms from "@/components/CheckoutForm";
import { Header } from "@/components/Header";

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <CheckoutForms />
    </div>
  );
}
