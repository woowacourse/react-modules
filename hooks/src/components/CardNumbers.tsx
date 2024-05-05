import { ChangeEvent, FocusEvent, useState } from 'react';
import { useCardNumbers } from '../lib';
import { CardNumberErrorMessages } from '../lib/hooks/cardNumbers/useCardNumber';
import { CardNumbersType, UseCardNumbersProps } from '../lib/hooks/cardNumbers/useCardNumbers';

const errorMessages: CardNumberErrorMessages = {
  empty: '카드 번호를 입력해주세요.',
  number: '숫자만 사용 가능해요.',
  length: '4개 숫자를 입력해주세요.',
};

export default function CardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(Array.from({ length: 4 }, () => undefined));
  const [targetInputIndex, setTargetInputIndex] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const useCardNumbersProps: UseCardNumbersProps = {
    fieldCount: 4,
    cardNumberCounts: [4, 4, 4, 4],
    cardNumbers,
    errorMessages,
    isNeedValidValue: true,
  };

  const { validationErrorMessage, validationResult, formattedValue } = useCardNumbers(useCardNumbersProps);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setTargetInputIndex(index);
    setShowErrorMessage(true);
    setCardNumbers((prev) => {
      const newPrev = [...prev];
      newPrev[index] = e.target.value;

      return newPrev;
    });
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>, index: number) => {
    setTargetInputIndex(index);
    setShowErrorMessage(true);
    setCardNumbers((prev) => {
      const newPrev = [...prev];
      newPrev[index] = e.target.value;

      return newPrev;
    });
  };

  /**
   * 현재 입력이 이루어지거나, blur의 타겟인 input 필드에 대한 오류 여부를 표시하기 위한 클래스 네임을 반환하는 함수
   * @param index input 의 index
   */
  const getClassName = (index: number) =>
    !validationResult[index].isValid && showErrorMessage && index === targetInputIndex ? 'error' : '';

  return (
    <div>
      {Array.from({ length: 4 }, (_, index) => (index === 1 ? 3 : 4)).map((value, index) => (
        <input
          key={`card-number_${index}`}
          maxLength={value}
          value={formattedValue?.[index]}
          type="text"
          className={getClassName(index)}
          data-testid={`card-number-input-${index}`}
          onChange={(e) => handleChange(e, index)}
          onBlur={(e) => handleBlur(e, index)}
        />
      ))}

      <div data-testid="card-numbers-error">{showErrorMessage && validationErrorMessage[targetInputIndex]}</div>
    </div>
  );
}
