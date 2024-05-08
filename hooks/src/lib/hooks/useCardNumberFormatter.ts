import { useEffect, useState } from "react";

const useCardNumberFormatter = (length: number) => {
  const [cardNumber, setCardNumber] = useState("");
  const [formattedCardNumber, setFormattedCardNumber] = useState("");

  useEffect(() => {
    const formatCardNumber = () => {
      const cleanedCardNumber = cardNumber.replace(/\D/g, "");

      if (length === 14) {
        const groups = [4, 6, 4];
        let formattedNumber = "";
        let index = 0;

        for (const groupLength of groups) {
          if (index + groupLength <= cleanedCardNumber.length) {
            formattedNumber += cleanedCardNumber.slice(index, index + groupLength) + " ";
            index += groupLength;
          } else {
            formattedNumber += cleanedCardNumber.slice(index);
            break;
          }
        }

        setFormattedCardNumber(formattedNumber.trim());
      } else if (length === 15) {
        const groups = [4, 6, 5];
        let formattedNumber = "";
        let index = 0;

        for (const groupLength of groups) {
          if (index + groupLength <= cleanedCardNumber.length) {
            formattedNumber += cleanedCardNumber.slice(index, index + groupLength) + " ";
            index += groupLength;
          } else {
            formattedNumber += cleanedCardNumber.slice(index);
            break;
          }
        }

        setFormattedCardNumber(formattedNumber.trim());
      } else if (length === 16) {
        const groups = [4, 4, 4, 4];
        let formattedNumber = "";
        let index = 0;

        for (const groupLength of groups) {
          if (index + groupLength <= cleanedCardNumber.length) {
            formattedNumber += cleanedCardNumber.slice(index, index + groupLength) + " ";
            index += groupLength;
          } else {
            formattedNumber += cleanedCardNumber.slice(index);
            break;
          }
        }

        setFormattedCardNumber(formattedNumber.trim());
      } else {
        setFormattedCardNumber(cleanedCardNumber);
      }
    };

    formatCardNumber();
  }, [cardNumber, length]);

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value);
  };

  return { cardNumber, formattedCardNumber, handleCardNumberChange };
};

export default useCardNumberFormatter;
