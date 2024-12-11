import type { DiscountDataType } from "@/types/DiscountDataType";

export default function DiscountCard({
  discount,
  color,
}: {
  discount: DiscountDataType;
  color: string;
}) {
  return (
    <div
      className={`flex flex-col items-center w-full p-4 border border-${color}-200`}
    >
      <img src={discount.image} alt={discount.title} width={100} height={100} />
      <div className="flex flex-col w-full items-center justify-center">
        <h3>{discount.title}</h3>
        <p>{discount.description}</p>
        <p>{discount.period}</p>
      </div>
    </div>
  );
}
