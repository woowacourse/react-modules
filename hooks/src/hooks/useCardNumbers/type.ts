import { ErrorType } from "../../types/ErrorType";
import { CardType } from "../useCardCompany/type";

export interface ValidationResult {
  numbers: string[];
  error: ErrorType[];
  cardType: CardType;
  handleCardNumberChange: (value: string) => void;
}
