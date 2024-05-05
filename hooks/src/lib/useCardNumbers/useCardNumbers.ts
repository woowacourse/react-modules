import useCardNumber from "./useCardNumber";
import useCardNumberErrorText from "./useCardNumberErrorText";

import { INPUT_RULES } from "../constants/cardCustomHook";

const useCardNumbers = () => {
  const {
    cardNumber: first,
    errorState: firstErrorState,
    errorText: firstErrorText,
    handleCardNumberChange: handleFirstChange,
  } = useCardNumber();
  const {
    cardNumber: second,
    errorState: secondErrorState,
    errorText: secondErrorText,
    handleCardNumberChange: handleSecondChange,
  } = useCardNumber();
  const {
    cardNumber: third,
    errorState: thirdErrorState,
    errorText: thirdErrorText,
    handleCardNumberChange: handleThirdChange,
  } = useCardNumber();
  const {
    cardNumber: fourth,
    errorState: fourthErrorState,
    errorText: fourthErrorText,
    handleCardNumberChange: handleFourthChange,
  } = useCardNumber();

  const cardNumbers = [first, second, third, fourth];
  const isCardNumberInputCompleted = cardNumbers.every(
    (cardNumber) => cardNumber.length === INPUT_RULES.validCardNumberLength
  );

  const { errorText } = useCardNumberErrorText({
    firstErrorText,
    secondErrorText,
    thirdErrorText,
    fourthErrorText,
  });

  return {
    cardNumbers: {
      first,
      second,
      third,
      fourth,
    },
    errorStates: {
      first: firstErrorState,
      second: secondErrorState,
      third: thirdErrorState,
      fourth: fourthErrorState,
    },
    errorText,
    handleCardNumberChanges: {
      first: handleFirstChange,
      second: handleSecondChange,
      third: handleThirdChange,
      fourth: handleFourthChange,
    },
    isCardNumberInputCompleted,
  };
};

export default useCardNumbers;
