export const ERROR = {
	NO_CARD_BRAND: "카드 번호에 맞는 카드사가 없습니다.",
	EMPTY_VALUE: "값을 입력해주세요.",
	ONLY_NUMBER: "숫자만 입력 가능합니다.",
	MAX_LENGTH: (length: number) => `${length}자리를 입력해주세요.`,
	OUT_RANGE: (min: number, max: number) => `${min}~${max}까지의 범위만 입력 가능합니다.`,
	BEFORE_YEAR: "현재보다 이전년도는 입력할 수 없습니다.",
};
