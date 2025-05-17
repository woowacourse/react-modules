import { useState } from 'react';
import { CARD_RULES, CardCompanyRule, detectCardCompany, formatCardNumber } from '../CardCompany/checkCompany';
import { validateCardNumber } from './validateCardNumber';
import { CardCompany } from '../types/cardCompany';
import { extractDigits } from '../utils/extractDigits';

/**
 * 카드 번호 입력 상태를 관리하고 카드사 자동 판별, 포맷팅, 유효성 검사를 수행하는 커스텀 훅입니다.
 *
 * - 숫자 외 문자는 자동 제거됩니다.
 * - 카드사(Visa, MasterCard, AMEX 등)는 입력된 숫자 패턴에 따라 자동 판별됩니다.
 * - 판별된 카드사에 따라 번호 포맷(예: 4-4-4-4 또는 4-6-5 등)이 자동 적용됩니다.
 * - 카드사별 길이 조건에 따라 유효성 검사 결과(errorState, errorMessage)를 반환합니다.
 * - 커스텀 카드사 규칙(customRules)을 인자로 전달하여 확장 가능합니다.
 *
 * @param {Record<CardCompany, CardCompanyRule>} [customRules] - 사용자 정의 카드사 규칙 (옵션)
 * @returns {{
 *   cardNumber: string; // 포맷팅된 카드 번호 문자열 (예: '4111-1111-1111-1111')
 *   company: CardCompany; // 자동 감지된 카드사 (예: 'Visa', 'AMEX', 'Unknown')
 *   errorState: { errorState: boolean; errorMessage: string }; // 유효성 검사 결과
 *   handleCardNumberChange: (input: string) => void; // 입력 이벤트 핸들러
 * }}
 */

export default function useCardNumber(customRules?: Record<CardCompany, CardCompanyRule>) {
  const [rawCardNumber, setRawCardNumber] = useState('');

  const rules = customRules ?? CARD_RULES;
  const company = detectCardCompany(rawCardNumber, rules);

  const formatted = formatCardNumber(rawCardNumber, rules[company].formatBlocks);

  const validationResult = validateCardNumber(rawCardNumber, company);

  const handleCardNumberChange = (input: string) => {
    const digitsOnly = extractDigits(input);
    setRawCardNumber(digitsOnly);
  };

  return {
    cardNumber: formatted,
    company,
    errorState: validationResult,
    handleCardNumberChange
  };
}
