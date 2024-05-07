import { useState } from "react";
import { validMasterNumbers, validVisaNumbers } from "./cardNumberValidator";

type NumberState = readonly [string, (value: string) => void];

type CardBrand = "Visa" | "Master" | "AMEX" | "Diners" | "UnionPay";

interface CardNumberReturn {
  numbers: {
    firstState: NumberState;
    secondState: NumberState;
    thirdState: NumberState;
    fourthState?: NumberState;
  };
  errorList: (string | undefined)[];
  cardBrand?: CardBrand;
  inputMaxLength?: number[];
}

const ERROR_MESSAGE = (index: number) => `${index}번 째 카드 번호를 잘못입력하셨습니다.`;
//TODO: AMEX, Diners, UnionPay 추가하기.
//TODO: 카드 브랜드 사용자에게 입력 받으면 좋을 듯 하다.
const VALID_CARD_LIST = ["Visa", "Master", "AMEX", "Diners", "UnionPay"];
const NO_VALID_CARD = `${VALID_CARD_LIST.join(",")}카드가 아닙니다. 카드 번호를 확인해주세요.`;

const findCardBrand = (value: string): CardBrand | undefined => {
  if (validMasterNumbers(value)) {
    return "Master";
  }
  if (validVisaNumbers(value)) {
    return "Visa";
  }
};

const useCardNumbers = (): CardNumberReturn => {
  const [cardBrand, setCardBrand] = useState<CardBrand | undefined>(undefined);

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const [errorMessage, setErrorMessage] = useState<(string | undefined)[]>(Array(4).fill(undefined));

  const setWrapper = (value: string, setState: (value: string) => void, index: number) => {
    const number = Number(value);
    if (Number.isNaN(number)) {
      setErrorMessage((prev) => {
        const arr = [...prev];
        arr[index] = ERROR_MESSAGE(index);
        return arr;
      });
      return;
    }
    setState(value);
  };

  const setFirstWrapper = (value: string) => {
    const brand = findCardBrand(value);
    if (brand) {
      setErrorMessage((prev) => {
        return [undefined, ...prev.slice(1)];
      });
    } else {
      setErrorMessage((prev) => {
        return [NO_VALID_CARD, ...prev.slice(1)];
      });
    }
    setCardBrand(brand);
    setWrapper(value, setFirst, 0);
  };

  const setSecondWrapper = (value: string) => {
    /*TODO: UnionPay일 경우
     6221인 경우 secondNumbers의 앞 두자가 26보다 커야하고,
     6229인 경우 secondNumbers의 앞 두자가 25보다 작아야한다.
     */
  };

  return {
    numbers: {
      firstState: [first, setFirstWrapper] as const,
      secondState: [second, (value: string) => setWrapper(value, setSecond, 1)] as const,
      thirdState: [third, (value: string) => setWrapper(value, setThird, 2)] as const,
      fourthState: [fourth, (value: string) => setWrapper(value, setFourth, 3)] as const,
    },
    errorList: errorMessage,
    cardBrand,
    //TODO: 카드 브랜드를 반환한다.
  };
};

export default useCardNumbers;
