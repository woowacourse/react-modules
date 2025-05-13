import React from "react";
import useCardForm, {
  CardFormValues,
  UseCardFormReturn,
} from "../lib/hooks/useCardForm";
import "./CardForm.css";

interface CardFormProps {
  cardForm?: UseCardFormReturn;
}

const CardForm: React.FC<CardFormProps> = ({ cardForm }) => {
  const {
    values,
    errors,
    isValid,

    handleChange,
    handleSubmit,
    cardNetwork,
    formattedCardNumber,
    cardPlaceholder,
    cardNumberMaxLength,
    reset,
  } =
    cardForm ||
    useCardForm({
      formatOptions: { placeholderChar: "X", splitter: " " },
      onSubmit: (values: CardFormValues) => {
        alert(
          `카드 정보가 성공적으로 등록되었습니다: ${JSON.stringify(values)}`
        );
      },
    });

  return (
    <div className="card-form-container">
      <form className="card-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">카드 번호</label>
          <input
            id="cardNumber"
            type="text"
            value={formattedCardNumber}
            onChange={handleChange.cardNumber}
            placeholder={cardPlaceholder}
            maxLength={cardNumberMaxLength}
          />
          {errors.cardNumber && (
            <p className="error-message">{errors.cardNumber}</p>
          )}
          {cardNetwork !== "DEFAULT" && (
            <p className="card-network-info">{cardNetwork}</p>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">유효기간</label>
            <input
              id="expiryDate"
              type="text"
              value={values.expiryDate}
              onChange={handleChange.expiryDate}
              placeholder="MM/YY"
            />
            {errors.expiryDate && (
              <p className="error-message">{errors.expiryDate}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="cvc">CVC</label>
            <input
              id="cvc"
              type="text"
              value={values.cvc}
              onChange={handleChange.cvc}
              placeholder="123"
            />
            {errors.cvc && <p className="error-message">{errors.cvc}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">비밀번호 앞 2자리</label>
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange.password}
            placeholder="••"
            maxLength={2}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="submit-button"
            disabled={!isValid || cardForm?.isSubmitting}
          >
            카드 등록하기
          </button>

          <button type="button" className="reset-button" onClick={reset}>
            초기화
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
