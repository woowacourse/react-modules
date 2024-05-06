import { useState } from 'react';
import { ValidationRules } from './types';
import useValidation from './useValidation';

interface UseMultipleInputsProps {
  initialValues: Record<string, string>;
  validations: ValidationRules;
}

/**
 * 여러 입력을 관리하기 위한 사용자 정의 훅입니다.
 *
 * @param {Record<string, string>} initialValues - 입력 이름과 그 초기값을 매핑한 객체입니다.
 * @param {Object} validations - 검증 함수 배열을 포함하는 객체입니다.
 * @param {Validator<string>[]} validations.onChange - 입력 변경 시 적용될 선택적 검증 함수 배열입니다.
 * @param {Validator<string>[]} validations.onBlur - 입력 포커스 이탈 시 적용될 선택적 검증 함수 배열입니다.
 *
 * @template E - 이벤트 핸들러가 부착될 DOM 요소의 유형입니다.
 *
 * @returns {Record<string, string>} values - 입력의 이름과 현재 값을 매핑한 객체입니다.
 * @returns {React.Dispatch<React.SetStateAction<Record<string, string>>>} setValues - values에 대한 set 함수입니다.
 * @returns {Record<string, boolean>} isValid - 입력의 이름과 현재 검증 상태를 매핑한 객체입니다.
 * @returns {string | null} errorMessage - 최근 검증 실패로 인한 현재 에러 메시지입니다.
 * @returns {Function} onChange - 입력 변경 이벤트에 대한 이벤트 핸들러로, 입력 값과 검증 상태를 업데이트합니다.
 * @returns {Function} onBlur - 입력 포커스 이탈 이벤트에 대한 이벤트 핸들러로, onBlur 검증기를 기반으로 검증 상태를 업데이트합니다.
 */
export default function useMultipleInputs<E extends HTMLInputElement | HTMLSelectElement>({
  initialValues,
  validations,
}: UseMultipleInputsProps) {
  const [values, setValues] = useState(initialValues);
  const [isValid, setValid] = useState(() =>
    Object.keys(initialValues).reduce<Record<string, boolean>>((acc, key) => {
      acc[key] = false;
      return acc;
    }, {}),
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { validate: validateOnChange } = useValidation({ validators: validations.onChange ?? null });
  const { validate: validateOnBlur } = useValidation({ validators: validations.onBlur ?? null });

  const handleChange: React.ChangeEventHandler<E> = (e) => {
    const { value: inputValue, name } = e.target;

    if (!validateOnChange) {
      setValid((prev) => ({ ...prev, [name]: true }));
      setValues((prev) => ({ ...prev, [name]: inputValue }));
      return;
    }

    const result = validateOnChange(inputValue);

    if (result.isValid) {
      setValues((prev) => ({ ...prev, [name]: inputValue }));
    }
    setValid((prev) => ({ ...prev, [name]: result.isValid }));
    setErrorMessage(result.errorMessage);
  };

  const handleBlur: React.FocusEventHandler<E> = (e) => {
    if (!validateOnBlur) return;

    const { name } = e.currentTarget;
    const { isValid, errorMessage } = validateOnBlur(values[name]);
    setValid((prev) => ({ ...prev, [name]: isValid }));
    setErrorMessage(errorMessage);
  };

  return {
    values,
    setValues,
    isValid,
    errorMessage,
    onChange: handleChange,
    onBlur: handleBlur,
  };
}
