import { ChangeEvent, FocusEvent, useLayoutEffect, useState } from 'react';
import useExpiryDate, {
  ExpiryDate,
  ExpiryDateErrorMessages,
  ExpiryDateValidationErrorMessageKey,
} from '../lib/useExpiryDate';
import { padZero } from '../lib/utils/textFormatter';

const errorMessages: ExpiryDateErrorMessages = {
  empty: '유효 기간을 입력해 주세요.',
  number: '숫자를 입력해 주세요.',
  length: '2자리 숫자만 입력 가능해요.',
  yearFormat: '유효하지 않은 연도에요.',
  monthFormat: '유효하지 않은 달이에요.',
  availability: '유효기간이 만료된 카드는 등록할 수 없어요.',
};

export default function CardExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<ExpiryDate>({ month: '', year: '' });
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [eventType, setEventType] = useState<'change' | 'blur'>();
  const [errorKey, setErrorKey] = useState<ExpiryDateValidationErrorMessageKey>(null);
  const { formattedValue, validationResult, validationErrorMessage } = useExpiryDate({
    expiryDate,
    errorMessages,
    validation: {
      maxYearsFromNow: 3,
    },
    isNeedValidValue: true,
  });

  const isError = (key: 'month' | 'year') => !validationResult[key].isValid;

  const monthClassNameError = showErrorMessage && (isError('month') || !validationResult.isValidAvailability);

  const yearClassNameError = showErrorMessage && (isError('year') || !validationResult.isValidAvailability);

  /**
   * 현재 입력하거나 포커스가 이동한 입력란의 타켓에 따른 오류 메세지를 보여주기 위핸 errorKey를 변경하는 기능
   * @param name input의 name으로 month 또는 year
   */
  const updateErrorKeyByInputName = (name: string) => {
    if (!(name === 'month' || name === 'year')) return;
    setErrorKey(name);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    updateErrorKeyByInputName(name);
    setEventType('change');
    setExpiryDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!value) return;

    updateErrorKeyByInputName(name);
    setEventType('blur');

    setExpiryDate((prev) => ({ ...prev, [name]: padZero(Number(value)) }));
  };

  /**
   * change 이벤트에는 입력란의 빈값 여부, 숫자 여부, 길이에 대한 오류 메세지만 보여주고, blur이벤트에서 입력란 고유의 형식에 대한 오류 메세지를 보여주기 위해 showErrorMessage는 업데이트 하는 기능
   */
  const updateShowErrorMessage = () => {
    if (eventType === 'change') {
      const { month, year } = validationResult;
      const isNotFormatMessage = month?.error !== 'format' || year?.error !== 'format';

      return setShowErrorMessage(isNotFormatMessage);
    }

    setShowErrorMessage(eventType === 'blur');
  };

  /**
   * validationErrorMessage 이 없으면 errorKey를 null로 변경하고, 오직 사용 가능 기간에 대한 오류일 경우 해당 오류 메세지를 보여주기 위핸 errorKey를 변경하는 기능
   *
   */
  const updateErrorKeyByResult = () => {
    if (!validationErrorMessage) return setErrorKey(null);
    const { month, year, isValidAvailability } = validationResult;

    const isOnlyAvailabilityError = month.isValid && year.isValid && !isValidAvailability;

    if (isOnlyAvailabilityError) {
      return setErrorKey('availability');
    }
  };

  useLayoutEffect(() => {
    updateShowErrorMessage();
    updateErrorKeyByResult();
  }, [eventType, validationResult]);

  return (
    <div>
      <h4>Card Expiry Date</h4>
      <input
        className={monthClassNameError ? 'error' : ''}
        data-testid="card-expiry-date-month"
        value={formattedValue?.month}
        type="text"
        name="month"
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
      <input
        className={yearClassNameError ? 'error' : ''}
        data-testid="card-expiry-date-year"
        value={formattedValue?.year}
        type="text"
        name="year"
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
      <div data-testid="card-expiry-date-error">
        {showErrorMessage && errorKey && validationErrorMessage?.[errorKey]}
      </div>
    </div>
  );
}
