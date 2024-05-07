// import { CardNumberErrorType, CardNumberKeys, cardNumberKeys } from "@/types/cardNumbers";
// import {  validateNumber } from "@/validate/validate";
// import useInputs from "./common/useInputs";
// import { cardCompanyNumbersInfo } from "@/data/cardCompanyNumbersInfo";
// type CardCompanyNumbers<T> = {
//   name: T;
//   cardNumbersFormat: number[];
// }[];

// export const cardNumbersValidates = [
//   (value: string) => validateNumber(value),
//   // (value: string) => validLength(value, VALID_LENGTH.CARD_NUMBERS),
// ];

// //카드 회사는 여러개가 있음.
// //사실상 props는 필요가 없음.
// const useMultiCardNumbers = () => {
//   const targetCompany = cardCompanyNumbersInfo.find(
//     (company) => company.name === selectedCompany
//   );

//   // if (!targetCompany) throw new Error(SystemErrorMessage.INVALID_OPTION);

//   const cardInputsNumbers = targetCompany!.cardNumbersFormat.length;
//   const inputs = cardNumberKeys

//   const initialValues = cardNumberKeys.reduce((obj, key) => {
//     obj[key] = '';
//     return obj;
//   }, {} as Record<CardNumberKeys, string>);

//   const { values, onChange } = useInputs<CardNumberErrorType>(
//     initialValues,
//     validates : cardNumbersValidates,
//   );

//   // const numberValues = values.reduce((acc, input, index) => {
//   //   acc[`cardNumber${index + 1}` as CardNumberKeys] = input.value;
//   //   return acc;
//   // }, {} as Record<CardNumberKeys, string>);

//   // const errorMessages = values.reduce((acc, input, index) => {
//   //   const errorKey = input.error;
//   //   acc[`cardNumber${index + 1}` as CardNumberKeys] = errorKey
//   //     ? CardNumbersErrorMessages[errorKey]
//   //     : null;
//   //   return acc;
//   // }, {} as Record<CardNumberKeys, string | null>);

//   // for (const key in errorMessages) {
//   //   if (errorMessages[key as CardNumberKeys] === null) {
//   //     delete errorMessages[key as CardNumberKeys];
//   //   }
//   // }

//   return {
//     values: numberValues,
//     onChange,
//     onBlurValidLength,
//     errorMessages,
//   };
// };

// export default useMultiCardNumbers;
