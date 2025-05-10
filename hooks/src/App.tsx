import React, { useState } from "react";
import useCardNumber from "./lib/useCardNumber";
import useExpirationDate from "./lib/useExpirationDate";
import useCardCVC from "./lib/useCardCVC";
import useCardBrand from "./lib/useCardBrand";
import styled from "@emotion/styled";
import { FORMAT_MARK } from "./lib/constants/systemConstants";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState({ month: "", year: "" });
  const [cvc, setCVC] = useState("");

  const {
    handleCardNumberValidation,
    isValid: cardNumberValid,
    errorMessage: cardNumberError,
  } = useCardNumber({
    customErrorMessages: {
      format: "카드 번호는 숫자만 입력해주세요.",
      minLength: "카드 번호가 너무 짧습니다.",
      maxLength: "카드 번호가 너무 깁니다.",
    },
  });

  const {
    handleExpirationDate,
    isValid: expirationValid,
    errorMessage: expirationError,
  } = useExpirationDate({
    customErrorMessages: {
      format: "숫자만 입력해주세요.",
      twoDigits: "2자리 숫자를 입력해주세요.",
      invalidMonth: "1~12 사이여야 합니다.",
    },
  });

  const {
    handleCVCValidate,
    isValid: cvcValid,
    errorMessage: cvcError,
  } = useCardCVC({
    customErrorMessages: {
      format: "숫자만 입력해주세요.",
      length: "3자리 숫자를 입력해주세요.",
    },
  });

  const {
    cardBrand,
    justifyCardBrand,
    guessCardBrandByPrefix,
    handleCardNumberFormat,
  } = useCardBrand();

  const handleCardNumberChange = (e) => {
    const raw = e.target.value.replaceAll(FORMAT_MARK, "");
    guessCardBrandByPrefix(raw, FORMAT_MARK);
    setCardNumber(handleCardNumberFormat(raw, FORMAT_MARK));
  };

  const handleExpirationChange = (e) => {
    const { name, value } = e.target;
    setExpirationDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlurCardNumber = () => {
    handleCardNumberValidation(cardNumber);
    justifyCardBrand(cardNumber, FORMAT_MARK);
  };

  const handleBlurExpiration = () => {
    handleExpirationDate(expirationDate);
  };

  const handleBlurCVC = () => {
    handleCVCValidate(cvc);
  };

  return (
    <Container>
      {cardBrand}
      <Input
        name="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        onBlur={handleBlurCardNumber}
        placeholder="카드 번호"
        maxLength={19}
        invalid={!cardNumberValid}
      />
      {!cardNumberValid && <ErrorText>{cardNumberError}</ErrorText>}

      <Row>
        <Input
          name="month"
          value={expirationDate.month}
          onChange={handleExpirationChange}
          onBlur={handleBlurExpiration}
          placeholder="MM"
          maxLength={2}
          invalid={!expirationValid.month}
        />
        <Input
          name="year"
          value={expirationDate.year}
          onChange={handleExpirationChange}
          onBlur={handleBlurExpiration}
          placeholder="YY"
          maxLength={2}
          invalid={!expirationValid.year}
        />
      </Row>
      {(!expirationValid.month || !expirationValid.year) && (
        <ErrorText>{expirationError}</ErrorText>
      )}

      <Input
        name="cvc"
        value={cvc}
        onChange={(e) => setCVC(e.target.value)}
        onBlur={handleBlurCVC}
        placeholder="CVC"
        maxLength={3}
        invalid={!cvcValid}
      />
      {!cvcValid && <ErrorText>{cvcError}</ErrorText>}
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 20px;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input<{ invalid?: boolean }>`
  padding: 10px;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.875rem;
`;
