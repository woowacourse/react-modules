import { useState } from 'react';
import useInputValidate from '../useInputValidate/useInputValidate';

interface CardBrandInfo {
  validate: RegExp;
  replaceProps: { regex: RegExp; group: string };
  maxLength: number;
}

type CardBrand = 'Visa' | 'MasterCard' | 'Diners' | 'AMEX' | 'UnionPay';

const defaultMaxLength = 16;
const defaultReplaceProps = { regex: /(\d{1,4})/g, group: '$1-' };

const CARD_BRAND_TABLE: Record<CardBrand, CardBrandInfo> = {
  Visa: {
    validate: /^4\d*$/,
    replaceProps: { regex: /(\d{1,4})/g, group: '$1-' },
    maxLength: 16,
  },
  MasterCard: {
    validate: /^5[1-5]\d*$/,
    replaceProps: { regex: /(\d{1,4})/g, group: '$1-' },
    maxLength: 16,
  },
  Diners: {
    validate: /^36\d*$/,
    replaceProps: { regex: /(\d{1,4})(\d{1,6})?(\d{1,4})?/, group: '$1-$2-$3' },
    maxLength: 14,
  },
  AMEX: {
    validate: /^3[47]\d*$/,
    replaceProps: { regex: /(\d{1,4})(\d{1,6})?(\d{1,5})?/, group: '$1-$2-$3' },
    maxLength: 15,
  },
  UnionPay: {
    validate:
      /^(6221(2[6-9]|[3-8]|9[0-1]|92[0-5]\d*)|(62[4-6]\d*)|628[2-8]\d*)$/,
    replaceProps: { regex: /(\d{1,4})/g, group: '$1-' },
    maxLength: 16,
  },
};

const useCardNumber = (initValue: string) => {
  const [cardBrand, setCardBrand] = useState<CardBrand | null>(null);
  const maxLength = cardBrand
    ? CARD_BRAND_TABLE[cardBrand].maxLength
    : defaultMaxLength;

  const getPureNumbers = (value: string) => value.replace(/-/g, '');

  const validateOnChange = (newValue: string) => {
    if (getPureNumbers(newValue).length > maxLength) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\d*$/.test(getPureNumbers(newValue))) {
      return {
        isValid: false,
        errorMessage: '카드번호는 숫자만 입력이 가능해요.',
      };
    }

    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (getPureNumbers(value).length !== maxLength) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength}글자로 입력해 주세요.`,
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const formatValue = (value: string) => {
    const brandWithRegex = (
      Object.entries(CARD_BRAND_TABLE) as [CardBrand, CardBrandInfo][]
    ).find((info) => info[1].validate.test(getPureNumbers(value)));
    const newCardBrand = brandWithRegex ? brandWithRegex[0] : null;
    setCardBrand(newCardBrand);

    const numberValue = getPureNumbers(value);
    if (!newCardBrand)
      return numberValue
        .replace(defaultReplaceProps.regex, defaultReplaceProps.group)
        .replace(/-+$/, '');
    return numberValue
      .replace(
        CARD_BRAND_TABLE[newCardBrand].replaceProps.regex,
        CARD_BRAND_TABLE[newCardBrand].replaceProps.group,
      )
      .replace(/-+$/, '');
  };

  const {
    value,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useInputValidate({
    initValue,
    validateOnChange,
    validateOnBlur,
    formatValue,
  });

  return {
    value,
    cardBrand,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};

export default useCardNumber;
