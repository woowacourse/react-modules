import { useState } from "react";

const useCardNumbers = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const [errorMessage, setErrorMessage] = useState(Array(4).fill(null));

  const setWrapper = (value: string, setState: (value: string) => void, index: number) => {
    const number = Number(value);
    if (Number.isNaN(number)) {
      setErrorMessage((prev) => {
        const arr = [...prev];
        arr[index] = "잘못됨";
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
        return [null, ...prev.slice(1)];
      });
    } else {
      setErrorMessage((prev) => {
        return ["잘못됨", ...prev.slice(1)];
      });
    }
    setWrapper(value, setFirst, 0);
  };

  return {
    firstState: [first, setFirstWrapper] as const,
    secondState: [second, (value: string) => setWrapper(value, setSecond, 1)] as const,
    thirdState: [third, (value: string) => setWrapper(value, setThird, 2)] as const,
    fourthState: [fourth, (value: string) => setWrapper(value, setFourth, 3)] as const,
    error: {
      isError: errorMessage.some((message) => message),
      errorMessage,
    },
  };
};

export default useCardNumbers;
