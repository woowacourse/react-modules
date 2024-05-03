/**
import { UseCardModuleProps } from './../../../dist/lib/types/hooks.d';
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
