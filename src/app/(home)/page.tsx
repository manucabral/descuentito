import useScrapper from "@/hooks/useScrapper";
import type { DiscountType } from "@/types/DiscountType";
import DiscountCard from "./components/DiscountCard";

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default async function Home() {
  const { getDiscounts } = useScrapper();

  const dia: DiscountType = await getDiscounts("dia");
  const carrefour: DiscountType = await getDiscounts("carrefour");
  const coto: DiscountType = await getDiscounts("coto");

  console.log(dia);
  return (
    <main className="flex flex-col w-full h-full min-h-screen">
      <section>
        <h1>Descuentitos</h1>
        <p>
          Encontrá todos los descuentos que necesitás para ahorrar en tus
          compras.
        </p>
      </section>
      <section className="flex flex-col w-full gap-4">
        {days.map((day: string) => (
          <div key={day} className="flex justify-center bg-slate-900 gap-4">
            <h2 className="text-white">{day}</h2>
            <div className="flex flex-row w-full gap-2">
              {dia.data[day] &&
                dia.data[day].map((discount) => (
                  <DiscountCard
                    discount={discount}
                    color={dia.supermarket.color}
                  />
                ))}
              {carrefour.data[day] &&
                carrefour.data[day].map((discount) => (
                  <DiscountCard
                    discount={discount}
                    color={carrefour.supermarket.color}
                  />
                ))}
              {coto.data[day] &&
                coto.data[day].map((discount) => (
                  <DiscountCard
                    discount={discount}
                    color={coto.supermarket.color}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
