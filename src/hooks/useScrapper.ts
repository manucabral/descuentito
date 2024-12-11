import scrapperService from "@/services/scrapper.service";
import { ResponseDataType } from "@/types/ResponseDataType";
import { DiscountType } from "@/types/DiscountType";

const useScrapper = () => {
  const getDiscounts = async (
    supermarketName: string
  ): Promise<DiscountType> => {
    const response: ResponseDataType = await scrapperService.get(
      supermarketName as string
    );
    console.log(response.body);
    const body: DiscountType = response.body.body;
    return body;
  };

  return { getDiscounts };
};

export default useScrapper;
