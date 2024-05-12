/**
 * UseInput : 단일 input 태그의 입력값을 제어하고, handleChange, handleBlur 이벤트 핸들러와 에러 상태 반환
 */
export interface UseInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * UseCard : 카드 등록 도메인에 대한 단일 input 커스텀 훅 반환 타입.
 * - value: 입력 필드의 현재 값.
 * - handleChange: 입력 필드의 값이 변경될 때 호출되는 함수. 입력 값의 유효성을 실시간으로 검사하고, 유효하지 않은 값에 대해서는 상태 업데이트 중단
 * - handleBlur: 입력 필드에서 포커스가 벗어날 때 호출되는 함수. 이 함수는 최종 값의 형식 검증.
 * - errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체. isValid와 errorMessage 속성을 포함.
 */
export interface UseCard extends Omit<UseInput, 'setValue'> {
  handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  errorInfo: ValidationResult;
}

/**
 * UseInputs : input 태그의 입력값을 객체로 제어하는데, 객체 프로퍼티들이 같은 validation을 처리할 경우 사용
 */
export interface UseInputs {
  value: Record<string, string>;
  setValue: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

/**
 * UseCardNumber : UseInputs 에서 setValue와 setErrorInfo를 제외한 cardNumber 타입.
 * - value: 입력 필드의 현재 값.
 * - handleChange: 입력 필드의 값이 변경될 때 호출되는 함수. name을 명시적으로 받아 어떤 객체 프로퍼티에서 change 이벤트가 발생했는지 체크함.
 * - handleBlur: 입력 필드에서 포커스가 벗어날 때 호출되는 함수. name을 명시적으로 받아 어떤 객체 프로퍼티에서 blur 이벤트가 발생했는지 체크함.
 * - errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체. isValid와 errorMessage 속성을 포함.
 */
export interface UseCardNumber extends Omit<UseInputs, 'setValue'> {
  handleBlur: (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => void;
  errorInfo: Record<string, ValidationResult>;
}
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

/**
 * UseSelect : select 태그의 입력값을 처리하는 커스텀 훅 반환 타입.
 */
export interface UseSelect {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // errorInfo: ValidationResult;
  // setErrorInfo: React.Dispatch<React.SetStateAction<ValidationResult>>;
}

/**
 * UseCardType : UseSelect를 활용하여 배열로 카드 타입들을 받고, 해당 카드 타입만 유효한 입력으로 처리하는 커스텀 훅 반환 타입
 * - value: 입력 필드의 현재 값.
 * - handleChange: 입력 필드의 값이 변경될 때 호출되는 함수. 값을 선택하지 않은 경우와 설정한 카드 타입들과 다른 option 값이 들어오면 에러 처리.
 * - errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체. isValid와 errorMessage 속성을 포함.
 */
export interface UseCardType extends Omit<UseSelect, 'setValue'> {
  errorInfo: ValidationResult;
}

export interface CardChecker {
  name: string;
  format: number[];
  validMaxLength: number;
}
