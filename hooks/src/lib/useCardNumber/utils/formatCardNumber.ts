import { splitIntoChunks } from "../../utils/splitIntoChunks";
import { CARD_BRAND, CardBrand } from "../constants/cardBrand";

export function formatCardNumber(cardNumber: string, brand: CardBrand): string[] {
  return splitIntoChunks(cardNumber, ...CHUNK_SIZES[brand]);
}

const DEFAULT_CHUNK_SIZES = [4, 4, 4, 4];
const CHUNK_SIZES: Record<CardBrand, number[]> = {
  [CARD_BRAND.Diners]: [4, 6, 4],
  [CARD_BRAND.AMEX]: [4, 6, 5],
  [CARD_BRAND.UnionPay]: DEFAULT_CHUNK_SIZES,
  [CARD_BRAND.Visa]: DEFAULT_CHUNK_SIZES,
  [CARD_BRAND.MasterCard]: DEFAULT_CHUNK_SIZES,
  [CARD_BRAND.unknown]: DEFAULT_CHUNK_SIZES,
};
