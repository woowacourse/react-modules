import { CardBrand } from "@/lib/cardBrand/types";
import { ErrorState } from "@/types/validation";

export interface UseCardHookReturn {
  value: string;
  onChange: (value: string) => void;
  errorState: ErrorState;
}

export interface UseCardBrandReturn
  extends Pick<UseCardHookReturn, "errorState"> {
  value: CardBrand | null;
}
