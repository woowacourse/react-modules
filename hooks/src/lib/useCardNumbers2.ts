import { VALID_LENGTH } from "@/constants/system";
import useInput from "./common/useInput";
import { cardNumbersValidates } from "./useCardNumbers";
import { ChangeEvent, useState } from "react";

//브랜드를 검사하고
//validLength를 동적으로 정해서 검사한다.
const useCardNumbers2 = () => {
  const [formatted, setFormatted] = useState("");
  const [cardBrand, setCardBrand] = useState("");

  const cardNumbersConfig = {
    validates: cardNumbersValidates,
    validLength: VALID_LENGTH.CARD_NUMBERS,
  };

  const { value, onChange, errorStatus } = useInput({
    initialValue: "",
    ...cardNumbersConfig,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const slicedValue = value.slice(0, 2);
    const secondSlicedValue = value.slice(2, 6);

    if (slicedValue[0] === "4") {
      return "VISA";
    }
    if (
      slicedValue[0] === "5" &&
      slicedValue[1] >= "1" &&
      slicedValue[1] <= "5"
    ) {
      return "MASTER";
    }
    if (slicedValue == "34" || slicedValue == "37") {
      return "AMEX";
    }
    if (slicedValue == "36") {
      return "DINERS";
    }
    if (slicedValue == "62") {
      if (secondSlicedValue[0] === "2") {
        if (+secondSlicedValue >= 2126 && +secondSlicedValue <= 2925) {
          return "UNION_PAY";
        }
      }
    }

    onChange(e);
  };

  return { value, onChange: handleChange, errorStatus };
};

export default useCardNumbers2;
