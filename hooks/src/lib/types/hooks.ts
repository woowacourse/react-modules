/**
 * @typedef {Object} UseCardModuleProps
 * @template E - 유효성 검사시, 검사 항목에 대한  오류 메세지 객체(validationErrorMessages ) 타입
 * @template V - 유효성 검사 규칙을 정의하는 객체(validations) 타입
 * @property {T} validationErrorMessages - 유효성 검사 오류 메세지를 저장하는 객체
 * @property {V= undefined} validations - 유효성 검사 규칙을 정의하는 객체 , 해당 props를 사용하지 않는 경우 V를 쓰지 않는다.
 */
export type UseCardModuleProps<E, V = undefined> = {
  validationErrorMessages: E;
} & (V extends undefined ? {} : { validations: V });

export type ErrorMessage = string | null;

/**
 * @template E  - validationErrorMessage 타입
 * @template  T - validationResult 타입
 * @template  V -formattedValue 타입
 * @property {E} validationErrorMessage -유효성 검사 결과에 따른 오류 메세지
 * @property {T} validationResult - 유효성 검사 결과
 * @property {V}  유효성 검사를 통과한 후 특정 형식으로 변형된 값을 나타내는 변수명으로 유저가 module의 props로 지정한 변수 변경 여부에 따라 다른 값을 내보낸다.(유효하지 않으면 입력값이 없기를 바란다면 '', 대문자로만 반환되기를 바란다면 대문자로 변경된다.)
 */
export interface UseCardModuleReturn<E, T, V = never> {
  validationErrorMessage: E;
  validationResult: T;
  formattedValue?: V;
}
