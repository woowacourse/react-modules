/**
 * UseInput : 단일 input 태그의 입력값을 제어하고, handleChange, handleBlur 이벤트 핸들러와 에러 상태 반환
 * - value: 입력 필드의 현재 값.
 * - setValue: value의 useState setter 함수.
 * - handleChange: 입력 필드의 값이 변경될 때 호출되는 함수. 입력 값의 유효성을 실시간으로 검사하고, 유효하지 않은 값에 대해서는 상태 업데이트 중단
 * - handleBlur: 입력 필드에서 포커스가 벗어날 때 호출되는 함수. 이 함수는 최종 값의 형식 검증.
 * - errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체. isValid와 errorMessage 속성을 포함.
 * - setErrorInfo: errorInfo의 useState setter 함수.
 */
export interface UseInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  errorInfo: ValidationResult;
  setErrorInfo: React.Dispatch<React.SetStateAction<ValidationResult>>;
}

/**
 * UseCard : UseInput 에서 setValue와 setErrorInfo를 제외한 단일 input 커스텀 훅 반환 타입.
 */
export type UseCard = Omit<UseInput, 'setValue' | 'setErrorInfo'>;

/**
 * UseInputs : input 태그의 입력값을 객체로 제어하는데, 객체 프로퍼티들이 같은 validation을 처리할 경우 사용
 * - value: 입력 필드의 현재 값.
 * - setValue: value의 useState setter 함수.
 * - handleChange: 입력 필드의 값이 변경될 때 호출되는 함수. name을 명시적으로 받아 어떤 객체 프로퍼티가 변화했는지 감지함.
 * - handleBlur: 입력 필드에서 포커스가 벗어날 때 호출되는 함수. name을 명시적으로 받아 어떤 객체 프로퍼티가 변화했는지 감지함.
 * - errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체. isValid와 errorMessage 속성을 포함.
 * - setErrorInfo: errorInfo의 useState setter 함수.
 */
export interface UseInputs {
  value: Record<string, string>;
  setValue: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => void;
  errorInfo: Record<string, ValidationResult>;
  setErrorInfo: React.Dispatch<React.SetStateAction<Record<string, ValidationResult>>>;
}

/**
 * UseCardNumber : UseInputs 에서 setValue와 setErrorInfo를 제외한 cardNumber 타입.
 */
export type UseCardNumber = Omit<UseInputs, 'setValue' | 'setErrorInfo'>;

/**
 * ValidationResult : input의 유효 상태와 에러 메시지를 갖는 에러 객체 타입
 */
export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

/**
 * Options : 커스텀 훅의 확장성을 고려한 옵션 타입
 */
export interface Options {
  isAutoFocus?: boolean;
}

/**
 * ValidatorProps : 커스텀 훅에서 받는 change이벤트와 blur이벤트 발생 시 동작하는 validate 함수 객체 타입
 */
export interface ValidatorProps {
  onChange: (value: string) => ValidationResult;
  onBlur: (value: string) => ValidationResult;
}
