import { useEffect, useState } from "react";
import generateCardBrand from "./utils/generateCardBrand";

type Props = {
  cardNumbers: string;
};

export type CardBrand =
  | "MasterCard"
  | "Visa"
  | "Diners"
  | "AMEX"
  | "UnionPay"
  | "";

const useCardBrand = ({ cardNumbers }: Props) => {
  const [cardBrand, setCardBrand] = useState<CardBrand>("");

  useEffect(() => {
    const cardBrand = generateCardBrand(cardNumbers);

    setCardBrand(cardBrand);
  }, [cardNumbers]);

  return { cardBrand };
};

export default useCardBrand;
