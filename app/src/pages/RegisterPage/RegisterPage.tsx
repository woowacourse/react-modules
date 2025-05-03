import {
  Button,
  CardCompanyInputField,
  CardCVCNumberInputField,
  CardExpirationDateInputField,
  CardNumberInputField,
  CardPasswordInputField,
  CardPreview,
  If,
  Spacing,
} from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { CardCompanyInput, CardCVCNumberInput, CardExpirationDateInput, CardPasswordInput } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './RegisterPage.styles';
import { $, isInputElement } from '@/utils';
import { useCardNumber, useExpiryDate, useCvcNumber, usePassword } from '../../../../hooks/src/lib';
import { useForm } from '../../../../hooks/src/hooks/useForm';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export default function RegisterPage() {
  const navigate = useNavigate();

  // 현재 스텝
  const [currentStep, setCurrentStep] = useState<Step>(1);

  // 1. 카드 번호
  const { cardNumber, cardNumberErrors, cardNumberRegister, isCardNumberIsValid } = useCardNumber();

  console.log(cardNumberErrors);

  // 2. 카드사
  const {
    value: { company: selectedCompany },
    register: cardCompanyRegister,
    isValid: isCardCompanyValid,
  } = useForm<CardCompanyInput>({
    defaultValues: {
      company: '',
    },
  });

  // 3. 카드 유효기간
  const { expiryDate, expiryDateErrors, expiryDateRegister, isExpiryDateIsValid } = useExpiryDate();

  // 4. 카드 CVC 번호
  const { cvcNumber, cvcNumberErrors, cvcNumberRegister, isCvcNumberIsValid } = useCvcNumber();

  // 5. 비밀번호
  const { password, passwordErrors, passwordRegister, isPasswordIsValid } = usePassword();

  // 카드 뒤집기 상태
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleCardRegisterFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCardCompany = CARD_COMPANIES.find((company) => company.id === selectedCompany);
    navigate('/complete', {
      state: {
        firstCardNumber: cardNumber.first,
        cardCompany: selectedCardCompany?.name ?? '',
      },
    });
  };

  useEffect(
    function handleNextInputFocus() {
      const currentFocusedInput = document.activeElement;
      if (!isInputElement(currentFocusedInput)) return;
      if (currentFocusedInput.value?.length < currentFocusedInput?.maxLength) return;

      const currentSequenceNumber = Number(currentFocusedInput.getAttribute('data-sequence'));
      const nextInput = $<HTMLInputElement | HTMLSelectElement>(`[data-sequence="${currentSequenceNumber + 1}"]`);

      if (nextInput) nextInput.focus();
    },
    [cardNumber, expiryDate, cvcNumber],
  );

  useEffect(() => {
    if (!isCardNumberIsValid) setCurrentStep(1);
    else if (!isCardCompanyValid) setCurrentStep(2);
    else if (!isExpiryDateIsValid) setCurrentStep(3);
    else if (!isCvcNumberIsValid) setCurrentStep(4);
    else if (!isPasswordIsValid) setCurrentStep(5);
    else setCurrentStep(6);
  }, [isCardNumberIsValid, isCardCompanyValid, isExpiryDateIsValid, isCvcNumberIsValid, isPasswordIsValid]);

  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview
          cardNumber={cardNumber}
          cardExpirationDate={expiryDate}
          selectedCompany={selectedCompany}
          cardCVCNumber={cvcNumber}
          isFlipped={isCardFlipped}
        />
      </S.CardPreviewWrapper>

      <Spacing size={30} />

      <S.CardInfoForm onSubmit={handleCardRegisterFormSubmit}>
        <If condition={currentStep === 6}>
          <Button type="submit" isFixed>
            확인
          </Button>
        </If>

        <If condition={currentStep >= 5}>
          <CardPasswordInputField register={passwordRegister} cardPasswordErrors={passwordErrors} />
        </If>

        <If condition={currentStep >= 4}>
          <CardCVCNumberInputField
            register={cvcNumberRegister}
            cardCVCNumberErrors={cvcNumberErrors}
            onFocus={() => setIsCardFlipped(true)}
            onBlur={() => setIsCardFlipped(false)}
          />
        </If>

        <If condition={currentStep >= 3}>
          <CardExpirationDateInputField register={expiryDateRegister} cardExpirationDateErrors={expiryDateErrors} />
        </If>

        <If condition={currentStep >= 2}>
          <CardCompanyInputField register={cardCompanyRegister} />
        </If>

        <If condition={currentStep >= 1}>
          <CardNumberInputField register={cardNumberRegister} cardNumberErrors={cardNumberErrors} />
        </If>
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
