import {
  validateCVC,
  validateCardNumber,
  validateExpiryDate,
  validatePassword,
} from "../validators";

describe("유효성 검사기", () => {
  // CVC 테스트
  describe("validateCVC", () => {
    it("유효한 CVC에 대해 유효함을 반환해야 함", () => {
      const result = validateCVC("123");
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("숫자가 아닌 CVC에 대해 유효하지 않음을 반환해야 함", () => {
      const result = validateCVC("ABC");
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          field: "cvc",
          code: "INVALID_NUMBER",
        })
      );
    });

    it("길이가 맞지 않을 경우 유효하지 않음을 반환해야 함", () => {
      const result = validateCVC("12");
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          field: "cvc",
          code: "INVALID_LENGTH",
        })
      );
    });
  });

  // 카드번호 테스트
  describe("validateCardNumber", () => {
    it("유효한 카드 번호에 대해 유효함을 반환해야 함", () => {
      const result = validateCardNumber("4111111111111111");
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("숫자가 아닌 카드 번호에 대해 유효하지 않음을 반환해야 함", () => {
      const result = validateCardNumber("41111111ABCD1111");
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          field: "cardNumber",
          code: "INVALID_NUMBER",
        })
      );
    });

    it("길이가 맞지 않을 경우 유효하지 않음을 반환해야 함", () => {
      const result = validateCardNumber("41111111");
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          field: "cardNumber",
          code: "INVALID_LENGTH",
        })
      );
    });
  });

  // 비밀번호 테스트
  describe("validatePassword", () => {
    it("유효한 비밀번호에 대해 유효함을 반환해야 함", () => {
      const result = validatePassword("12");
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("숫자가 아닌 비밀번호에 대해 유효하지 않음을 반환해야 함", () => {
      const result = validatePassword("AB");
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          field: "password",
          code: "INVALID_CHARACTER",
        })
      );
    });
  });

  // 만료일 테스트
  describe("validateExpiryDate", () => {
    it("유효한 만료일에 대해 유효함을 반환해야 함", () => {
      const result = validateExpiryDate("1225");
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("유효하지 않은 월에 대해 유효하지 않음을 반환해야 함", () => {
      const result = validateExpiryDate("1323");
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          field: "expiryDate",
          code: "INVALID_MONTH",
        })
      );
    });

    it("잘못된 형식에 대해 유효하지 않음을 반환해야 함", () => {
      const result = validateExpiryDate("12/23");
      expect(result.valid).toBe(false);
      expect(result.errors).toContainEqual(
        expect.objectContaining({
          field: "expiryDate",
          code: "INVALID_FORMAT",
        })
      );
    });
  });
});
