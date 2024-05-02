import useCardHolderName from '../lib/useCardHolderName/useCardHolderName';

const CardHolderName = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardHolderName('');

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

export default CardHolderName;
