import useCardNumber from '../lib/useCardNumber/useCardNumber';

const CardNumber = () => {
  const {
    value,
    formattingValue,
    errorMessage,
    cardBrand,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardNumber('');

  return (
    <>
      <p>{cardBrand}</p>
      <input
        value={formattingValue}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter') {
            e.currentTarget.blur();
          }
        }}
      />
      <p>value: {value}</p>
      <p>formattingValue : {formattingValue}</p>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardNumber;
