import React from 'react';
import useCardNumber from './lib/useCardNumber/useCardNumber';
import useCardExpirationDate from './lib/useCardExpirationDate/useCardExpirationDate';
import useCardCompany from './lib/useCardCompany/useCardCompany';
import useCardOwner from './lib/useCardOwner/useCardOwner';
import useCardCVC from './lib/useCardCVC/useCardCVC';
import useCardPassword from './lib/useCardPassword/useCardPassword';

function App() {
  const cardNumber = useCardNumber();
  const cardCompany = useCardCompany();
  const { month, year, expirationDateError, expirationDateErrorMessage, isExpirationDateValid } = useCardExpirationDate();
  const cardOwner = useCardOwner();
  const cardCVC = useCardCVC();
  const cardPassword = useCardPassword();

  return (
    <>
      <h1>Hooks Modules</h1>

      {/* useCardNumber */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
        <h2 style={{ fontSize: '30px' }}>CardNumber</h2>
        <input
          style={{ border: `1px solid ${cardNumber.error.state ? 'red' : 'black'}`, outline: 'none', padding: '10px' }}
          type='text'
          value={cardNumber.value}
          onChange={cardNumber.onChange}
        />
        <span>{cardNumber.number}</span>
        {cardNumber.error.state && <span style={{ color: 'red' }}>{cardNumber.error.message}</span>}
        {cardNumber.brand !== '' && <span style={{ color: 'purple' }}>{cardNumber.brand}</span>}
        {cardNumber.isValid && <span style={{ color: 'blue' }}>유효한 번호</span>}
      </div>

      {/* useCardCompany */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
        <h2 style={{ fontSize: '30px' }}>cardCompany</h2>
        <input
          readOnly
          onBlur={cardCompany.onBlur}
          style={{ border: `1px solid ${cardCompany.error.state ? 'red' : 'black'}`, outline: 'none', padding: '10px' }}
          value={cardCompany.value}
        />

        <label style={{ padding: '8px', margin: '4px', backgroundColor: '#333', color: 'white' }} htmlFor='BC카드'>
          BC카드
        </label>
        <input hidden onChange={cardCompany.onChange} id='BC카드' type='radio' value='BC카드' name='cardcompany' />

        <label style={{ padding: '8px', margin: '4px', backgroundColor: '#333', color: 'white' }} htmlFor='국민카드'>
          국민카드
        </label>
        <input hidden onChange={cardCompany.onChange} id='국민카드' type='radio' value='국민카드' name='cardcompany' />

        <label style={{ padding: '8px', margin: '4px', backgroundColor: '#333', color: 'white' }} htmlFor='카카오뱅크'>
          카카오뱅크
        </label>
        <input hidden onChange={cardCompany.onChange} id='카카오뱅크' type='radio' value='카카오뱅크' name='cardcompany' />

        <label style={{ padding: '8px', margin: '4px', backgroundColor: '#333', color: 'white' }} htmlFor='신한카드'>
          신한카드
        </label>
        <input hidden onChange={cardCompany.onChange} id='신한카드' type='radio' value='신한카드' name='cardcompany' />
        <p style={{ color: 'red' }}>{cardCompany.error.message}</p>
        {cardCompany.isValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
      </div>

      {/* useCardExpirationDate */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
        <h2 style={{ fontSize: '30px' }}>ExpirationDate</h2>
        <input
          style={{ border: `1px solid ${month.error.state || expirationDateError.state ? 'red' : 'black'}`, outline: 'none', padding: '10px' }}
          maxLength={2}
          type='text'
          value={month.value}
          onChange={month.onChange}
          onBlur={month.onBlur}
        />
        <input
          style={{ border: `1px solid ${year.error.state || expirationDateError.state ? 'red' : 'black'}`, outline: 'none', padding: '10px' }}
          maxLength={2}
          type='text'
          value={year.value}
          onChange={year.onChange}
          onBlur={year.onBlur}
        />
        <span>{month.value}</span>
        <span>{year.value}</span>
        {expirationDateErrorMessage && <p style={{ color: 'red' }}>{expirationDateErrorMessage}</p>}
        {isExpirationDateValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
      </div>

      {/* useCardOwner */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
        <h2 style={{ fontSize: '30px' }}>cardOwner</h2>
        <input
          style={{ border: `1px solid ${cardOwner.error.state ? 'red' : 'black'}`, outline: 'none', padding: '10px' }}
          type='text'
          value={cardOwner.value.toUpperCase()}
          onChange={cardOwner.onChange}
          onBlur={cardOwner.onBlur}
        />
        <span>{cardOwner.value.toUpperCase()}</span>
        {cardOwner.error.state && <p style={{ color: 'red' }}>{cardOwner.error.message}</p>}
        {cardOwner.isValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
      </div>

      {/* useCardCVC */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
        <h2 style={{ fontSize: '30px' }}>cardCVC</h2>
        <input
          style={{ border: `1px solid ${cardCVC.error.state ? 'red' : 'black'}`, outline: 'none', padding: '10px' }}
          type='text'
          maxLength={3}
          value={cardCVC.value}
          onChange={cardCVC.onChange}
          onBlur={cardCVC.onBlur}
        />
        <span>{cardCVC.value.toUpperCase()}</span>
        {cardCVC.error.state && <p style={{ color: 'red' }}>{cardCVC.error.message}</p>}
        {cardCVC.isValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
      </div>

      {/* useCardPassword */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '30px' }}>
        <h2 style={{ fontSize: '30px' }}>cardPassword</h2>
        <input
          style={{ border: `1px solid ${cardPassword.error.state ? 'red' : 'black'}`, outline: 'none', padding: '10px' }}
          type='text'
          maxLength={2}
          value={cardPassword.value}
          onChange={cardPassword.onChange}
          onBlur={cardPassword.onBlur}
        />
        <span>{cardPassword.value.toUpperCase()}</span>
        {cardPassword.error.state && <p style={{ color: 'red' }}>{cardPassword.error.message}</p>}
        {cardPassword.isValid && <p style={{ color: 'blue' }}>유효한 입력</p>}
      </div>
    </>
  );
}

export default App;
