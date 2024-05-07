import { useEffect, useState } from "react";

const ERROR_MESSAGE = (index: number) => `${index}번 째 카드 번호를 잘못입력하셨습니다.`;
//TODO: AMEX, Diners, UnionPay 추가하기.
//TODO: 카드 브랜드 사용자에게 입력 받으면 좋을 듯 하다.
const VALID_CARD_LIST = ["Master", "Visa"];
const NO_VALID_CARD = `${VALID_CARD_LIST.join(",")}카드가 아닙니다. 카드 번호를 확인해주세요.`;

const useCardNumbers = () => {
  //TODO: 상태관리를 통해서 카드 넘버의 상태 갯수를 정한다.
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
    const MASTER_CARD_START_NUMBER_LIST = [51, 52, 53, 54];
    // eslint-disable-next-line no-useless-escape
    const MASTER_REG_PATTERN = new RegExp(`${MASTER_CARD_START_NUMBER_LIST.map(String).join("|")}\d{0,3}$`);
    if (MASTER_REG_PATTERN.test(value) || value.startsWith("4")) {
      setErrorMessage((prev) => {
        return [undefined, ...prev.slice(1)];
      });
    } else {
      setErrorMessage((prev) => {
        return [NO_VALID_CARD, ...prev.slice(1)];
      });
    }
    setWrapper(value, setFirst, 0);
  };

  return {
    numbers: {
      firstState: [first, setFirstWrapper] as const,
      secondState: [second, (value: string) => setWrapper(value, setSecond, 1)] as const,
      thirdState: [third, (value: string) => setWrapper(value, setThird, 2)] as const,
      fourthState: [fourth, (value: string) => setWrapper(value, setFourth, 3)] as const,
    },
    error: {
      isError: errorMessage.some((message) => message),
      errorMessage,
    },
    //TODO: 카드 브랜드를 반환한다.
  };
};

export default useCardNumbers;
