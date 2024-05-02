import useCardPassword from '../lib/useCardPassword/useCardPassword';

const CardPassword = () => {
  const {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  } = useCardPassword('');

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

export default CardPassword;
