import { isNumeric } from "../isNumeric";

describe("isNumeric", () => {
  it("숫자 문자열에 대해 true를 반환해야 합니다", () => {
    expect(isNumeric("0")).toBe(true);
    expect(isNumeric("1")).toBe(true);
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric("-123")).toBe(true);
    expect(isNumeric("0.123")).toBe(true);
    expect(isNumeric("-0.123")).toBe(true);
    expect(isNumeric("123.456")).toBe(true);
  });

  it("숫자가 아닌 문자열에 대해 false를 반환해야 합니다", () => {
    expect(isNumeric("abc")).toBe(false);
    expect(isNumeric("1a")).toBe(false);
    expect(isNumeric("a1")).toBe(false);
    expect(isNumeric("1a2")).toBe(false);
    expect(isNumeric("")).toBe(false);
  });

  it("경계값을 처리해야 합니다", () => {
    expect(isNumeric("9007199254740991")).toBe(true); // MAX_SAFE_INTEGER
    expect(isNumeric("-9007199254740991")).toBe(true); // MIN_SAFE_INTEGER
    expect(isNumeric("Infinity")).toBe(true); // JavaScript의 Infinity
    expect(isNumeric("-Infinity")).toBe(true); // JavaScript의 -Infinity
    expect(isNumeric("NaN")).toBe(false); // 숫자가 아님
  });

  it("특수 숫자 형식을 처리해야 합니다", () => {
    expect(isNumeric("1e5")).toBe(true); // 과학적 표기법
    expect(isNumeric("0xFF")).toBe(true); // 16진수
    expect(isNumeric("0b1010")).toBe(true); // 2진수
    expect(isNumeric("0o777")).toBe(true); // 8진수
    expect(isNumeric(" 123 ")).toBe(true); // 공백은 제거됨
  });
});
