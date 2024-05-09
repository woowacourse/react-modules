import useCardNumbers from '../lib/useCardNumbers/useCardNumbers';

const CardNumbers = () => {
  const {
    value,
    cardBrand,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardNumbers('');

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
      <p>brand : {cardBrand}</p>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardNumbers;
