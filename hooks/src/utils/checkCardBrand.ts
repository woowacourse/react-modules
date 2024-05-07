export const decideCardBrandByFirstTwoDigits = (value: string) => {
  const slicedValue = value.slice(0, 2);
  // const secondSlicedValue = value.slice(2, 6);

  if (slicedValue === "4") {
    return "VISA";
  }
  if (slicedValue === "5" && +slicedValue[1] >= 1 && +slicedValue[1] <= 5) {
    return "MASTER";
  }
  if (slicedValue === "34" || slicedValue === "37") {
    return "AMEX";
  }
  if (slicedValue === "36") {
    return "DINERS";
  }
  return null;
};

export const decideCardBrandByNextFourDigits = (value: string) => {
  const slicedValue = value.slice(0, 2);
  const secondSlicedValue = value.slice(2, 6);
  if (slicedValue === "62" && secondSlicedValue.startsWith("2")) {
    if (+secondSlicedValue >= 2126 && +secondSlicedValue <= 2925) {
      return "UNION_PAY";
    }
  }
  return null;
};
