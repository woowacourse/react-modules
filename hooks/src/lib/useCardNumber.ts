import { useState } from "react";

const numberRegex = /^[0-9]*$/;

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const isValid = Object.values(errorMessage).every(
    (message) => message === ""
  );

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    sequence: string
  ) => {
    const value = event.target.value;

    if (!numberRegex.test(value)) return;

    setCardNumber({ ...cardNumber, [sequence]: value });

    if (value.length < 4) {
      setErrorMessage({
        ...errorMessage,
        [sequence]: "4글자를 입력해 주세요.",
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      [sequence]: "",
    });
  };

  return { errorMessage, isValid, cardNumber, handleCardNumberChange };
}
