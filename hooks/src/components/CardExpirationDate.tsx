import useCardExpirationDate from '../lib/useCardExpirationDate/useCardExpirationDate';

const CardExpirationDate = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardExpirationDate('');

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
        }} />
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardExpirationDate;
