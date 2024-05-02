import useCardCompany from '../lib/useCardCompany/useCardCompany';

const CARD_COMPANY_LIST = ['카카오뱅크', '현대카드', '신한카드', '국민카드'];

const CardCompany = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardCompany('', CARD_COMPANY_LIST);

  return (
    <>
      <input
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter') {
            e.currentTarget.blur();
          }
        }}
      />
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardCompany;
