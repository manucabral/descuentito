import { requestHandler } from "@/utils/requestHandler";
import type { ResponseDataType } from "@/types/ResponseDataType";

const scrapperService = {
  get: async (supermarketName: string): Promise<ResponseDataType> =>
    await requestHandler({
      method: "GET",
      url: `/supermarket?name=${supermarketName}`,
    }),
};

export default scrapperService;
