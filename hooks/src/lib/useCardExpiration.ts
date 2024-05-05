// import { useState, ChangeEvent } from "react";
// import { validateCardExpiration } from "../validators/cardInputValidator";

// const useCardExpiration = () => {
//   const [cardExpiration, setCardExpiration] = useState({
//     MM: "",
//     YY: "",
//     isValid: true,
//   });

//   const handleCardExpirationMM = (event: ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     const isValid = validateCardExpiration(value, "MM");

//     setCardExpiration((prev) => {
//       return {
//         ...prev,
//         MM: value,
//       };
//     });

//     if (!isValid) {
//       setCardExpiration((prev) => {
//         return {
//           ...prev,
//           isValid: false,
//         };
//       });
//       return;
//     }
//   };

//   const handleCardExpirationYY = (event: ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     const isValid = validateCardExpiration(value, "YY");

//     setCardExpiration((prev) => {
//       return {
//         ...prev,
//         YY: value,
//       };
//     });

//     if (!isValid) {
//       setCardExpiration((prev) => {
//         return {
//           ...prev,
//           isValid: false,
//         };
//       });
//       return;
//     }
//   };

//   return {
//     cardExpiration,
//     handleCardExpirationMM,
//     handleCardExpirationYY,
//   };
// };

// export default useCardExpiration;

import { useState, ChangeEvent, useEffect } from "react";
import {
  validateMonthFormat,
  validateYearFormat,
  isExpirationUpToDate,
} from "../validators/cardInputValidator";

const useCardExpiration = () => {
  const [cardExpiration, setCardExpiration] = useState({
    MM: {
      value: "",
      isValid: false,
    },
    YY: {
      value: "",
      isValid: false,
    },
    isAllValid: false,
  });

  useEffect(() => {
    const monthIsValid = validateMonthFormat(cardExpiration.MM.value);
    const yearIsValid = validateYearFormat(cardExpiration.YY.value);
    const isUpToDate = isExpirationUpToDate(
      cardExpiration.MM.value,
      cardExpiration.YY.value
    );

    setCardExpiration((prev) => ({
      ...prev,
      MM: {
        ...prev.MM,
        isValid: monthIsValid,
      },
      YY: {
        ...prev.YY,
        isValid: yearIsValid,
      },
      isAllValid: monthIsValid && yearIsValid && isUpToDate,
    }));
  }, [cardExpiration.MM.value, cardExpiration.YY.value]);

  const handleCardExpirationChange =
    (type: "MM" | "YY") => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setCardExpiration((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          value: value,
        },
      }));
    };

  return {
    cardExpiration,
    handleCardExpirationMM: handleCardExpirationChange("MM"),
    handleCardExpirationYY: handleCardExpirationChange("YY"),
  };
};

export default useCardExpiration;
