import { useState } from "react";
import useError from "../useError/useError";
const KEY = "cardBrand";

export const CARD_BRAND_ERROR_MESSAGE = {
  NOT_SELECTED: "카드 브랜드를 선택해주세요.",
};

type useCardBrandProps = {
  userCardBrand?: string;
  optionValues: string[];
};

export default function useCardBrand({
  userCardBrand = "",
  optionValues,
}: useCardBrandProps) {
  const [cardBrand, setCardBrand] = useState(userCardBrand);
  const { error, errorMessage, changeError, clearError } = useError(
    {
      [KEY]: false,
    },
    {
      [KEY]: "",
    }
  );

  function handleCardBrandChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value.trim();
    const { inputError, inputErrorMessage } = getCardBrandError({
      input,
      optionValues,
    });

    if (inputError) {
      changeError(KEY, inputErrorMessage);
      return;
    }

    clearError(KEY);
    setCardBrand(input);
  }

  return {
    cardBrand,
    error: error[KEY],
    errorMessage: errorMessage[KEY],
    handleCardBrandChange,
  };
}

function getCardBrandError({
  input,
  optionValues,
}: {
  input: string;
  optionValues: string[];
}) {
  if (!optionValues.includes(input)) {
    return {
      inputError: true,
      inputErrorMessage: CARD_BRAND_ERROR_MESSAGE.NOT_SELECTED,
    };
  }

  return {
    inputError: false,
    inputErrorMessage: "",
  };
}
