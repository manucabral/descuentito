import type { DiscountDataType } from "./DiscountDataType";
import type { DiscountInfoType } from "./DiscountInfoType";

export interface DiscountType {
  supermarket: DiscountInfoType;
  data: {
    [key: string]: DiscountDataType[];
  };
}
