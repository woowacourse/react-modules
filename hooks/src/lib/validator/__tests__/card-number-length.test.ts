import { isValidLength } from "../../utils/isValidLength";

describe("isValidLength (입력값 사전 처리 없음)", () => {
  // --- VISA 허용 자릿수: 13, 16, 19 ---
  it("순수 숫자로 이루어진 유효한 자릿수의 VISA 카드 번호일 때 true를 반환한다", () => {
    expect(isValidLength("4".repeat(13))).toBe(true);
    expect(isValidLength("4".repeat(16))).toBe(true);
    expect(isValidLength("4".repeat(19))).toBe(true);
  });

  it("순수 숫자로 이루어진 유효하지 않은 자릿수의 VISA 카드 번호일 때 false를 반환한다", () => {
    expect(isValidLength("4".repeat(12))).toBe(false);
    expect(isValidLength("4".repeat(14))).toBe(false);
  });

  // --- MasterCard 허용 자릿수: 16 ---
  it("16자리 MasterCard일 때만 true를 반환한다", () => {
    expect(isValidLength("5".repeat(16))).toBe(true);
  });

  it("다른 자릿수의 MasterCard일 때 false를 반환한다", () => {
    expect(isValidLength("5".repeat(15))).toBe(false);
    expect(isValidLength("5".repeat(17))).toBe(false);
  });

  // --- AMEX 허용 자릿수: 15, 시작 숫자 34 또는 37 ---
  it("34 또는 37로 시작하고 총 15자리인 AMEX 카드 번호일 때만 true를 반환한다", () => {
    expect(isValidLength("34" + "0".repeat(13))).toBe(true);
    expect(isValidLength("37" + "0".repeat(13))).toBe(true);
  });

  it("AMEX 패턴(34, 37) 외의 숫자로 시작하거나 길이가 맞지 않을 때 false를 반환한다", () => {
    // 15자리지만 '33'으로 시작 → AMEX 아님
    expect(isValidLength("33" + "0".repeat(13))).toBe(false);
    // '34'로 시작하지만 길이가 14자리 → false
    expect(isValidLength("34" + "0".repeat(12))).toBe(false);
    // '37'로 시작하지만 길이가 16자리 → false
    expect(isValidLength("37" + "0".repeat(14))).toBe(false);
  });

  // --- Diners Club 허용 자릿수: 14~19, 시작 숫자 36 ---
  it("36으로 시작하고 14~19자리인 Diners Club 카드 번호일 때 true를 반환한다", () => {
    [14, 15, 16, 17, 18, 19].forEach((len) => {
      const num = "36" + "0".repeat(len - 2);
      expect(isValidLength(num)).toBe(true);
    });
  });

  it("36으로 시작하지만 허용 범위 외 길이일 때 false를 반환한다", () => {
    expect(isValidLength("36" + "0".repeat(11))).toBe(false); // 13자리
  });

  // --- UnionPay 허용 자릿수: 16~19, 다양한 62x 패턴 ---
  it("UnionPay 패턴에 맞고 16~19자리인 카드 번호일 때 true를 반환한다", () => {
    [16, 17, 18, 19].forEach((len) => {
      const num = "622126" + "0".repeat(len - 6);
      expect(isValidLength(num)).toBe(true);
    });
  });

  it("UnionPay 패턴이지만 허용 자릿수 외일 때 false를 반환한다", () => {
    expect(isValidLength("622126" + "0".repeat(9))).toBe(false); // 15자리
  });

  // --- DEFAULT 브랜드 허용 자릿수: 16 ---
  it("기본(DEFAULT) 브랜드로 16자리일 때만 true를 반환한다", () => {
    expect(isValidLength("1".repeat(16))).toBe(true);
  });

  it("기본(DEFAULT) 브랜드지만 16자리가 아닐 때 false를 반환한다", () => {
    expect(isValidLength("1".repeat(15))).toBe(false);
    expect(isValidLength("1".repeat(17))).toBe(false);
  });

  // --- 서식(공백 또는 하이픈) 포함 입력 처리 ---
  it("입력값에 공백 또는 하이픈이 포함되어도, 숫자만 추출한 길이가 유효하면 true를 반환한다", () => {
    // VISA 16자리
    expect(isValidLength("4111 1111 1111 1111")).toBe(true);
    // MasterCard 16자리
    expect(isValidLength("5111-1111-1111-1111")).toBe(true);
  });

  it("숫자만 추출한 길이가 유효하지 않으면 false를 반환한다", () => {
    // 숫자 길이 15 → DEFAULT 기준 16이 아님
    expect(isValidLength("1 1111 1111 1111 11")).toBe(false);
  });
});
