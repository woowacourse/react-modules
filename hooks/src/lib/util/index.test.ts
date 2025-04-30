import { isNumeric } from "./index";
describe("isNumeric 유틸 테스트", () => {
  it("입력값이 숫자면 true를 반환한다", () => {
    expect(isNumeric("1")).toBe(true);
  });
  it("입력값이 문자면 false를 반환한다", () => {
    expect(isNumeric("a")).toBe(false);
  });
});
