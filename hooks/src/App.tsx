import React from "react";
import "./App.css";
import { useState } from "react";

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export const validateCardNumber = (cardNumber: string): ValidationResult => {
    if (isNaN(Number(cardNumber))) {
      return {
        isValid: false,
        errorMessage: "숫자만 입력해주세요.",
      };
    }
  if (cardNumber.length !== 4) {
    return {
      isValid: false,
      errorMessage: "카드 번호는 4자리여야 합니다.",
    };
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};

//0627 형태로 입력된다고 가정 (무조건 4자리를 입력한다고 생각함.)

export const validateCardExpirationDate = (
  expirationDate: string
): ValidationResult => {
    if (isNaN(Number(expirationDate))) {
      return {
        isValid: false,
        errorMessage: "숫자만 입력해주세요.",
      };
    }
  if (expirationDate.length !== 4) {
    return {
      isValid: false,
      errorMessage: "유효기간은 4자리여야 합니다.",
    };
  }



  const month = Number(expirationDate.slice(0, 2));
  const year = Number(expirationDate.slice(2, 4));

  if (month < 1 || month > 12) {
    return {
      isValid: false,
      errorMessage: "월은 1~12 사이여야 합니다.",
    };
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  const hasYearPassed = year < currentYear;
  const hasMonthPassed = year === currentYear && month < currentMonth;

  if (hasYearPassed || hasMonthPassed) {
    return {
      isValid: false,
      errorMessage: "유효기간이 만료되었습니다.",
    };
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};

export const validateCardCVC = (cvc: string): ValidationResult => {
  if (isNaN(Number(cvc))) {
      return {
        isValid: false,
        errorMessage: "숫자만 입력해주세요.",
      };
    }

  if (cvc.length !== 3) {
    return {
      isValid: false,
      errorMessage: "CVC는 3자리여야 합니다.",
    };
  }
  return {
    isValid: true,
    errorMessage: "",
  };
};

export const validateCardSecretNumber = (
  secretNumber: string
): ValidationResult => {


  if (isNaN(Number(secretNumber))) {
    return {
      isValid: false,
      errorMessage: "숫자만 입력해주세요.",
    };
  }
  
  if (secretNumber.length !== 2) {
    return {
      isValid: false,
      errorMessage: "비밀번호는 2자리여야 합니다.",
    };
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [secretNumber, setSecretNumber] = useState("");


  return (
    <>
      <input
        placeholder="카드 번호"
        type="text"
        value={cardNumber}
        onChange={(e) => {
          setCardNumber(e.target.value);
          console.log(validateCardNumber(e.target.value));
        }}
      />
      <input
        placeholder="유효기간"
        type="text"
        value={expiryDate}
        onChange={(e) => {
          setExpiryDate(e.target.value);
          console.log(validateCardExpirationDate(e.target.value));
        }}
      />
      <input
        placeholder="cvc"
        type="text"
        value={cvc}
        onChange={(e) => {
          setCvc(e.target.value);
          console.log(validateCardCVC(e.target.value));
        }

        }
      />
      <input
        placeholder="비밀번호"
        type="text"
        value={secretNumber}
        onChange={(e) => {
          setSecretNumber(e.target.value);
          console.log(validateCardSecretNumber(e.target.value));
        }}
      />
    </>
  );
}

export default App;
