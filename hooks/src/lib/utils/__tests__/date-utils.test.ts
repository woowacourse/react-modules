import {
  isValidExpiryDateFormat,
  isValidExpiryMonth,
  isValidExpiryYear,
  isNotExpiredDate,
} from "../date-utils";

describe("date-utils", () => {
  // 일관된 테스트를 위한 현재 날짜 모의 설정
  const originalDate = global.Date;

  beforeAll(() => {
    // 날짜를 2023-05-15로 모의 설정
    const mockDate = new Date(2023, 4, 15);
    global.Date = jest.fn(() => mockDate) as any;
    global.Date.now = jest.fn(() => mockDate.getTime());
  });

  afterAll(() => {
    global.Date = originalDate;
  });

  describe("isValidExpiryDateFormat", () => {
    it("유효한 4자리 형식에 대해 true를 반환해야 합니다", () => {
      expect(isValidExpiryDateFormat("1225")).toBe(true);
      expect(isValidExpiryDateFormat("0123")).toBe(true);
      expect(isValidExpiryDateFormat("0000")).toBe(true);
      expect(isValidExpiryDateFormat("9999")).toBe(true);
    });

    it("숫자가 아닌 값에 대해 false를 반환해야 합니다", () => {
      expect(isValidExpiryDateFormat("12a5")).toBe(false);
      expect(isValidExpiryDateFormat("abcd")).toBe(false);
      expect(isValidExpiryDateFormat("12/3")).toBe(false);
    });

    it("잘못된 길이에 대해 false를 반환해야 합니다", () => {
      expect(isValidExpiryDateFormat("123")).toBe(false);
      expect(isValidExpiryDateFormat("12345")).toBe(false);
      expect(isValidExpiryDateFormat("")).toBe(false);
    });
  });

  describe("isValidExpiryMonth", () => {
    it("유효한 월(01-12)에 대해 true를 반환해야 합니다", () => {
      expect(isValidExpiryMonth("0123")).toBe(true);
      expect(isValidExpiryMonth("0223")).toBe(true);
      expect(isValidExpiryMonth("1223")).toBe(true);
    });

    it("유효하지 않은 월(00, 13-99)에 대해 false를 반환해야 합니다", () => {
      expect(isValidExpiryMonth("0023")).toBe(false);
      expect(isValidExpiryMonth("1323")).toBe(false);
      expect(isValidExpiryMonth("9923")).toBe(false);
    });

    it("경계값에 대해 false를 반환해야 합니다", () => {
      // 월 경계값 테스트
      expect(isValidExpiryMonth("0023")).toBe(false); // 1보다 작음
      expect(isValidExpiryMonth("0123")).toBe(true); // 정확히 1
      expect(isValidExpiryMonth("1223")).toBe(true); // 정확히 12
      expect(isValidExpiryMonth("1323")).toBe(false); // 12보다 큼
    });

    it("숫자가 아니거나 잘못된 길이에 대해 false를 반환해야 합니다", () => {
      expect(isValidExpiryMonth("abcd")).toBe(false);
      expect(isValidExpiryMonth("01/23")).toBe(false);
      expect(isValidExpiryMonth("123")).toBe(false);
      expect(isValidExpiryMonth("12345")).toBe(false);
    });
  });

  describe("isValidExpiryYear", () => {
    it("현재 연도와 미래 연도에 대해 true를 반환해야 합니다", () => {
      // 모의 설정된 날짜(2023)로, 유효한 연도는 23-99입니다
      expect(isValidExpiryYear("0123")).toBe(true); // 현재 연도(23)
      expect(isValidExpiryYear("0124")).toBe(true); // 미래 연도(24)
      expect(isValidExpiryYear("0199")).toBe(true); // 먼 미래(99)
    });

    it("과거 연도에 대해 false를 반환해야 합니다", () => {
      // 모의 설정된 날짜(2023)로, 유효하지 않은 연도는 00-22입니다
      expect(isValidExpiryYear("0122")).toBe(false); // 과거 연도(22)
      expect(isValidExpiryYear("0100")).toBe(false); // 먼 과거(00)
    });

    it("숫자가 아니거나 잘못된 길이에 대해 false를 반환해야 합니다", () => {
      expect(isValidExpiryYear("ab23")).toBe(false);
      expect(isValidExpiryYear("01/23")).toBe(false);
      expect(isValidExpiryYear("123")).toBe(false);
      expect(isValidExpiryYear("12345")).toBe(false);
    });
  });

  describe("isNotExpiredDate", () => {
    it("미래 날짜에 대해 true를 반환해야 합니다", () => {
      // 모의 설정된 날짜(2023-05-15)로
      expect(isNotExpiredDate("0623")).toBe(true); // 같은 연도 미래 월
      expect(isNotExpiredDate("0524")).toBe(true); // 미래 연도 같은 월
      expect(isNotExpiredDate("1299")).toBe(true); // 먼 미래
    });

    it("현재 월/연도에 대해 true를 반환해야 합니다", () => {
      // 모의 설정된 날짜(2023-05-15)로
      expect(isNotExpiredDate("0523")).toBe(true); // 현재 월/연도
    });

    it("과거 날짜에 대해 false를 반환해야 합니다", () => {
      // 모의 설정된 날짜(2023-05-15)로
      expect(isNotExpiredDate("0423")).toBe(false); // 같은 연도 과거 월
      expect(isNotExpiredDate("0522")).toBe(false); // 과거 연도 같은 월
      expect(isNotExpiredDate("1222")).toBe(false); // 과거 날짜
    });

    it("유효하지 않은 월에 대해 false를 반환해야 합니다", () => {
      expect(isNotExpiredDate("0023")).toBe(false); // 00은 유효하지 않은 월
      expect(isNotExpiredDate("1323")).toBe(false); // 13은 유효하지 않은 월
    });

    it("숫자가 아니거나 잘못된 길이에 대해 false를 반환해야 합니다", () => {
      expect(isNotExpiredDate("abcd")).toBe(false);
      expect(isNotExpiredDate("05/23")).toBe(false);
      expect(isNotExpiredDate("523")).toBe(false);
      expect(isNotExpiredDate("05233")).toBe(false);
    });
  });
});
