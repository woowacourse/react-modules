import { identifyCard } from './identifyCard';

const CARD_FORMAT = {
  VISA: [4, 4, 4, 4],
  MASTERCARD: [4, 4, 4, 4],
  AMEX: [4, 6, 5],
  DINERS: [4, 6, 4],
  UNIONPAY: [4, 4, 4, 4, 3],
  DEFAULT: [4, 4, 4, 4],
};

const formatByPattern = (digits: string, pattern: number[]) => {
  let start = 0;
  const parts = pattern.map((len) => {
    const part = digits.substring(start, start + len);
    start += len;
    return part;
  });
  return parts.filter(Boolean).join(' ');
};

export function formatCardNumber(rawValue: string) {
  // 1) 숫자만 추출
  const digits = rawValue.replace(/\D/g, '');

  // 2) 카드사 감지
  const brand = identifyCard(digits) as keyof typeof CARD_FORMAT;

  // 3) 포맷 패턴 선택
  const pattern = CARD_FORMAT[brand] || CARD_FORMAT.DEFAULT;

  // 4) 포맷팅 적용
  return formatByPattern(digits, pattern);
}
