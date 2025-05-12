import { renderHook } from "@testing-library/react";
import useCardBrand from "./useCardBrand";

describe("useCardBrand 테스트", () => {
	it("카드 브랜드가 없는 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const cardNumber = "1234";
		const { result } = renderHook(() => useCardBrand(cardNumber));
		expect(result.current.cardBrand).toBe(null);
		expect(result.current.cardBrandError).toEqual({
			isValid: false,
			errorMessage: "카드 번호에 맞는 카드사가 없습니다.",
		});
	});

	describe("AMEX 카드 브랜드", () => {
		it("cardNumber가 34로 시작하면, 카드 브랜드 AMEX와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "341234567890123";
			const { result } = renderHook(() => useCardBrand(cardNumber));
			expect(result.current.cardBrand).toBe("AMEX");
			expect(result.current.formattedCardNumber).toBe("3412-345678-90123");
		});

		it("cardNumber가 37로 시작하면, 카드 브랜드 AMEX와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "371234567890123";
			const { result } = renderHook(() => useCardBrand(cardNumber));
			expect(result.current.cardBrand).toBe("AMEX");
			expect(result.current.formattedCardNumber).toBe("3712-345678-90123");
		});
	});

	describe("Diners 카드 브랜드", () => {
		it("cardNumber가 36로 시작하면, 카드 브랜드 Diners와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "36123456789012";
			const { result } = renderHook(() => useCardBrand(cardNumber));
			expect(result.current.cardBrand).toBe("Diners");
			expect(result.current.formattedCardNumber).toBe("3612-345678-9012");
		});
	});

	describe("Visa 카드 브랜드", () => {
		it("cardNumber가 4로 시작하면, 카드 브랜드 Visa와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "4111222233334444";
			const { result } = renderHook(() => useCardBrand(cardNumber));
			expect(result.current.cardBrand).toBe("Visa");
			expect(result.current.formattedCardNumber).toBe("4111-2222-3333-4444");
		});
	});

	describe("Mastercard 카드 브랜드", () => {
		it("cardNumber가 51~55로 시작하면, 카드 브랜드 Mastercard와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "5111222233334444";
			const { result: result1 } = renderHook(() => useCardBrand(cardNumber));
			expect(result1.current.cardBrand).toBe("Mastercard");
			expect(result1.current.formattedCardNumber).toBe("5111-2222-3333-4444");
		});
	});

	describe("UnionPay 카드 브랜드", () => {
		it("cardNumber가 622126~622925로 시작하면, 카드 브랜드 UnionPay와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "6221261234567890";
			const { result: result1 } = renderHook(() => useCardBrand(cardNumber));
			expect(result1.current.cardBrand).toBe("UnionPay");
			expect(result1.current.formattedCardNumber).toBe("6221-2612-3456-7890");
		});

		it("cardNumber가 624~626로 시작하면, 카드 브랜드 UnionPay와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "6241261234567890";
			const { result: result1 } = renderHook(() => useCardBrand(cardNumber));
			expect(result1.current.cardBrand).toBe("UnionPay");
			expect(result1.current.formattedCardNumber).toBe("6241-2612-3456-7890");
		});

		it("cardNumber가 6282~6288로 시작하면, 카드 브랜드 UnionPay와 카드 번호 포맷이 반환되는지 확인한다.", () => {
			const cardNumber = "6282261234567890";
			const { result: result1 } = renderHook(() => useCardBrand(cardNumber));
			expect(result1.current.cardBrand).toBe("UnionPay");
			expect(result1.current.formattedCardNumber).toBe("6282-2612-3456-7890");
		});
	});
});
