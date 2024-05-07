// import { useState, ChangeEvent } from "react";
// import { ValidateType } from "./useInput";

// const useInputs = <T>(
//   initialValues: string[],
//   validates: ValidateType[],
//   validLength: number[]
// ) => {
//   const [values, setValues] = useState<T>();
//   const [errorStatus, setErrorStatus] = useState<T>();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = e.target;
//     let newError: string | null = null;

//     validates.forEach((validate: ValidateType) => {
//       const result = validate(value);
//       if (!result.isValid && result.error) {
//         return (newError = result.error);
//       }
//     });

//     if (!newError) {
//       setErrorStatus((prev) => ({
//         ...prev,
//         [name]: null,
//       }));
//     } else {
//       setErrorStatus((prev) => ({
//         ...prev,
//         [name]: newError,
//       }));
//     }

//     setValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return {
//     values,
//     onChange: handleChange,
//     // onBlurValidLength: handleBlur,
//   };
// };

// export default useInputs;
