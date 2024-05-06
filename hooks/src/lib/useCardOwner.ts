import useInput, { ValidationType } from "./useInput";

const isEnglish = (value: string) => {
  return /^[a-zA-Z ]*$/.test(value);
};

const useCardOwner = (initialValue = "") => {
  const inputValidations: ValidationType[] = [
    {
      validate: (value: string) => value !== "",
      message: "소유자 이름을 영어로 입력해주세요.",
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isEnglish,
      message: "영어만 입력 가능합니다.",
    },
  ];

  const cardOwner = useInput({ initialValue, inputValidations, preventInputValidations });
  const isCardOwnerValid = cardOwner.value !== "" && !cardOwner.error.state;
  console.log("cc", isCardOwnerValid);

  return { cardOwner, isCardOwnerValid };
};

export default useCardOwner;
