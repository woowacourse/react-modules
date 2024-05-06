import ValidationResult from "../types/ValidationResult";
import { useState } from "react";

interface BrandValidationResult {
  brand: string;
  validationResult: ValidationResult;
  handleUpdateBrand: (value: string) => void;
}

export default function useCardBrand(
  initialValue: string,
  allowedBrands: string[]
): BrandValidationResult {
  validateInitialParams(initialValue, allowedBrands);

  const [brand, setBrand] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdateBrand = (value: string) => {
    setBrand(value);

    const validationResult: ValidationResult = validateBrand(
      value,
      allowedBrands
    )
      ? { isValid: true }
      : {
          isValid: false,
          errorMessage: "지원하지 않는 카드사입니다. 다른 카드를 선택해주세요.",
        };

    setValidationResult(validationResult);
  };

  return { brand, validationResult, handleUpdateBrand };
}

function validateInitialParams(initialValue: string, allowedBrands: string[]) {
  if (allowedBrands.length < 1) {
    throw new Error(
      "[ERROR] 카드사 목록에는 최소 1개 이상의 카드사가 포함되어야 합니다. 다시 확인해주세요."
    );
  }

  if (!validateBrand(initialValue, [...allowedBrands, ""])) {
    throw new Error(
      "[ERROR] 카드사 목록에 포함되지 않은 카드를 초기값으로 설정하실 수 없습니다. 다시 확인해주세요."
    );
  }
}

function validateBrand(value: string, allowedBrands: string[]) {
  return allowedBrands.includes(value);
}
