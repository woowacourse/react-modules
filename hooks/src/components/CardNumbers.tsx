import useCardNumbers from '../lib/useCardNumbers/useCardNumbers';

const CardNumbers = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardNumbers(['', '', '', '']);

  return (
    <>
      {[...Array(4)].map((_, index) => (
        <input
          value={value[index]}
          onChange={(e) => onChangeHandler(e, index)}
          onBlur={() => onBlurHandler(index)}
          onFocus={() => onFocusHandler(index)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
              e.currentTarget.blur();
            }
          }}
        />
      ))}
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </>
  );
};

export default CardNumbers;
