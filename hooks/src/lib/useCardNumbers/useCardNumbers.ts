import ValidationResult, {
  ERROR_MESSAGE,
  ERROR_TYPE,
  ValidationError,
} from "../types/ValidationResult";
import { useMemo, useState } from "react";

import Validation from "../utils/Validation";

// 카드사 식별
enum CardGlobalBrand {
  VISA = "Visa",
  MASTER = "Master",
  DINERS = "Diners",
  AMEX = "AMEX",
  UNION_PAY = "UnionPay",
  NOT_IDENTIFIED = "notIdentified",
}

const isVisaCard = (cardNumber: string): cardNumber is CardGlobalBrand.VISA => {
  return cardNumber.startsWith("4");
};

const isMasterCard = (
  cardNumber: string
): cardNumber is CardGlobalBrand.MASTER => {
  return ["51", "52", "53", "54", "55"].some((startingNumber) =>
    cardNumber.startsWith(startingNumber)
  );
};

const isDinersCard = (
  cardNumber: string
): cardNumber is CardGlobalBrand.DINERS => {
  return cardNumber.startsWith("36");
};

const isAmexCard = (cardNumber: string): cardNumber is CardGlobalBrand.AMEX => {
  return ["34", "37"].some((startingNumber) =>
    cardNumber.startsWith(startingNumber)
  );
};

const isUnionPayCard = (
  cardNumber: string
): cardNumber is CardGlobalBrand.UNION_PAY => {
  if (cardNumber.length >= 3) {
    const targetNumber = parseInt(cardNumber.slice(0, 3));
    if (624 <= targetNumber && targetNumber <= 626) {
      return true;
    }
  }

  if (cardNumber.length >= 4) {
    const targetNumber = parseInt(cardNumber.slice(0, 4));
    if (6282 <= targetNumber && targetNumber <= 6288) {
      return true;
    }
  }

  if (cardNumber.length >= 6) {
    const targetNumber = parseInt(cardNumber.slice(0, 6));
    if (622126 <= targetNumber && targetNumber <= 622925) {
      return true;
    }
  }

  return false;
};

const identifyCardGlobalBrand = (cardNumber: string): CardGlobalBrand => {
  if (isVisaCard(cardNumber)) {
    return CardGlobalBrand.VISA;
  }
  if (isMasterCard(cardNumber)) {
    return CardGlobalBrand.MASTER;
  }
  if (isDinersCard(cardNumber)) {
    return CardGlobalBrand.DINERS;
  }
  if (isAmexCard(cardNumber)) {
    return CardGlobalBrand.AMEX;
  }
  if (isUnionPayCard(cardNumber)) {
    return CardGlobalBrand.UNION_PAY;
  }
  return CardGlobalBrand.NOT_IDENTIFIED;
};
// ---

// 포맷팅
type CardFormat = Record<CardGlobalBrand, number[]>;

const cardFormat: CardFormat = {
  [CardGlobalBrand.VISA]: [4, 4, 4, 4],
  [CardGlobalBrand.MASTER]: [4, 4, 4, 4],
  [CardGlobalBrand.DINERS]: [4, 6, 4],
  [CardGlobalBrand.AMEX]: [4, 6, 5],
  [CardGlobalBrand.UNION_PAY]: [4, 4, 4, 4],
  [CardGlobalBrand.NOT_IDENTIFIED]: [4, 4, 4, 4],
};

const formatCardNumber = (
  cardNumber: string,
  cardGlobalBrand: CardGlobalBrand
) => {
  const format = cardFormat[cardGlobalBrand];

  let currentIndex = 0;
  return format.map((length) =>
    cardNumber.substring(currentIndex, (currentIndex += length))
  );
};
// ---

const calculateValidCardNumberLength = (cardGlobalBrand: CardGlobalBrand) => {
  return cardFormat[cardGlobalBrand].reduce(
    (prevSum, segmentLength) => prevSum + segmentLength,
    0
  );
};

// useCardNumber
interface CardNumberValidationResult {
  cardNumber: string;
  validationResult?: ValidationResult;
  cardGlobalBrand?: CardGlobalBrand;
  maxLength?: number;
  formattedCardNumber?: string[];
  handleUpdateCardNumber: (value: string) => void;
}

export default function useCardNumber(
  initialValues: string = ""
): CardNumberValidationResult {
  const [cardNumber, setCardNumber] = useState(initialValues);

  const [cardGlobalBrand, setCardGlobalBrand] = useState<CardGlobalBrand>();
  const [validCardNumberLength, setValidCardNumberLength] = useState<number>();

  const [validationResult, setValidationResult] = useState<ValidationResult>();

  const formattedCardNumber = useMemo(
    () => cardGlobalBrand && formatCardNumber(cardNumber, cardGlobalBrand),
    [cardNumber, cardGlobalBrand]
  );

  const handleUpdateCardNumber = (cardNumber: string) => {
    try {
      const cardGlobalBrand = identifyCardGlobalBrand(cardNumber);
      const validCardNumberLength =
        calculateValidCardNumberLength(cardGlobalBrand);

      validateBeforeUpdate(cardNumber, validCardNumberLength);

      setCardNumber(cardNumber);
      setCardGlobalBrand(cardGlobalBrand);
      setValidCardNumberLength(validCardNumberLength);
      setValidationResult({ isValid: true });

      validateAfterUpdate(cardNumber, validCardNumberLength);
    } catch (error) {
      if (error instanceof ValidationError) {
        setValidationResult({
          isValid: false,
          errorType: error.errorType,
          errorMessage: error.errorMessage,
        });
      }
    }
  };

  return {
    cardNumber,
    validationResult,
    cardGlobalBrand,
    maxLength: validCardNumberLength,
    formattedCardNumber,
    handleUpdateCardNumber,
  };
}
// ---

// validation
const validateBeforeUpdate = (value: string, maxCardNumberLength: number) => {
  if (!Validation.isNumeric(value)) {
    throw new ValidationError(
      ERROR_TYPE.numericOnly,
      ERROR_MESSAGE[ERROR_TYPE.numericOnly]
    );
  }
  if (value.length > maxCardNumberLength) {
    throw new ValidationError(
      ERROR_TYPE.maxLength,
      ERROR_MESSAGE[ERROR_TYPE.maxLength](maxCardNumberLength)
    );
  }
};

const validateAfterUpdate = (value: string, validCardNumberLength: number) => {
  if (!Validation.hasLength(value, validCardNumberLength)) {
    throw new ValidationError(
      ERROR_TYPE.invalidLength,
      ERROR_MESSAGE[ERROR_TYPE.invalidLength](validCardNumberLength)
    );
  }
};
// ---
