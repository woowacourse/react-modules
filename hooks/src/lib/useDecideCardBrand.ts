import { useState } from "react";

const useDecideCardBrand = (value: string) => {
  const [cardBrand, setCardBrand] = useState();

  const slicedValue = value.slice(0, 2);
  const secondSlicedValue = value.slice(2, 6);

  if (slicedValue[0] === "4") {
    return console.log("VISA");
  }
  if (
    slicedValue[0] === "5" &&
    slicedValue[1] >= "1" &&
    slicedValue[1] <= "5"
  ) {
    return console.log("MASTER");
  }
  if (slicedValue == "34" || slicedValue == "37") {
    return console.log("AMEX");
  }
  if (slicedValue == "36") {
    return console.log("DINERS");
  }
  if (slicedValue == "62") {
    if (secondSlicedValue[0] === "2") {
      if (+secondSlicedValue >= 2126 && +secondSlicedValue <= 2925) {
        return console.log("UNION_PAY");
      }
    }
  }

  return { cardBrand };
};

export default useDecideCardBrand;
