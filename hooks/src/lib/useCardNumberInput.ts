import { useState } from "react";
import { CARD_TYPE } from "./constants/cardType";
import { removeSpace } from "./util/removeSpace";
import { isNumber, isRightLength } from "./validation/validate";
import ERROR_MESSAGES from "./constants/error";
import { CARD_TYPE_NAME } from "./type";
import { getCardType } from "./validation/getCardType";

const useCardNumberInput = () => {
  const [cardType, setCardType] = useState<CARD_TYPE_NAME>("EMPTY");
  const [cardNumber, setCardNumber] = useState({
    value: {
      cardNumber: "",
    },
    errorMessage: { cardNumber: "" },
    isError: { cardNumber: false },
  });

  /**
   *   커서 위치 조정 기능
   * 입력폼의 중간 숫자 수정 시 커서 위치 조정을 위한 함수
   * 1. 현재 커서 위치의 다음 값이 공백일 때 현 위치+1 (값 입력 시 커서 조정)
   * 2. 현재 커서 위치의 전 값이 공백일 때 현 위치-1 (값 지울 때 커서 조정)
   */
  const cursorPositionAdjust = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectionStart: number | null,
    value: string,
    formatValue: string
  ) => {
    setTimeout(() => {
      if (selectionStart === null) return;
      let selectInput = selectionStart;
      if (value[selectionStart] === undefined) selectInput++;
      if (
        value[selectionStart] !== undefined &&
        formatValue[selectionStart - 1] === " "
      ) {
        --selectInput;
      }

      event.target.setSelectionRange(selectInput, selectInput);
    });
  };

  const valueFormatting = (value: string, cardType: CARD_TYPE_NAME) => {
    if (!value || value.length <= 4) return value;

    const cardNumberLength = CARD_TYPE[cardType].length;
    if (cardNumberLength === 16) {
      const chunks = [];
      for (let i = 0; i < value.length; i += 4) {
        chunks.push(value.substring(i, i + 4));
      }
      return chunks.join(" ");
    }

    if (cardNumberLength === 15) {
      const part1 = value.substring(0, 4);
      const part2 = value.substring(4, 10);
      const part3 = value.substring(10, 15);

      return `${part1} ${part2} ${part3}`;
    }

    if (cardNumberLength === 14) {
      const part1 = value.substring(0, 4);
      const part2 = value.substring(4, 10);
      const part3 = value.substring(10, 14);

      return `${part1} ${part2} ${part3}`;
    }

    return value;
  };

  const updateCardNumber = (
    errorMessage: string,
    isError: boolean,
    value: string
  ) => {
    setCardNumber({
      errorMessage: { ...cardNumber.value, ["cardNumber"]: errorMessage },
      isError: { ...cardNumber.isError, ["cardNumber"]: isError },
      value: {
        ...cardNumber.value,
        ["cardNumber"]: value,
      },
    });
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, selectionStart } = event.target;

    setCardType(getCardType(value));
    const cardType = getCardType(value);

    const noneSpaceValue = removeSpace(value);
    const formatValue = valueFormatting(noneSpaceValue, cardType);

    if (!isNumber(noneSpaceValue)) {
      updateCardNumber(ERROR_MESSAGES.INVALID_ONLY_NUMBER, true, "");
      return;
    }

    if (
      cardType &&
      !isRightLength(noneSpaceValue, CARD_TYPE[cardType]["length"])
    ) {
      updateCardNumber(
        `${CARD_TYPE[cardType]["length"]}${ERROR_MESSAGES.INVALID_MAX_LENGTH}`,
        true,
        formatValue
      );
      cursorPositionAdjust(event, selectionStart, value, formatValue);
      return;
    }

    updateCardNumber("", false, formatValue);
    cursorPositionAdjust(event, selectionStart, value, formatValue);

    return;
  };

  return { cardNumber, handleCardNumberChange, cardType };
};

export default useCardNumberInput;
