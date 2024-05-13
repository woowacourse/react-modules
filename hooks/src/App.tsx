import React from 'react';
import { useState } from 'react';
import './App.css';
import { Modal } from 'vwh-wtc-lv2-payments-modal';
import { useCardNumberFormat } from './lib';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);

  const onConfirm = (formValues: Record<string, string>) => {
    Object.entries(formValues).forEach(([key, value]) => {
      console.log(key + ' : ' + value);
    });
  };

  console.log(useCardNumberFormat({ cardNumber: '1234', brand: 'visa' }));
  console.log(useCardNumberFormat({ cardNumber: '123456', brand: 'visa' }));
  console.log(useCardNumberFormat({ cardNumber: '1234567890', brand: 'visa' }));

  console.log(useCardNumberFormat({ cardNumber: '123456', brand: 'masterCard' }));
  console.log(useCardNumberFormat({ cardNumber: '1234567890', brand: 'masterCard' }));

  console.log(useCardNumberFormat({ cardNumber: '123456', brand: 'unionPay' }));
  console.log(useCardNumberFormat({ cardNumber: '1234567890', brand: 'unionPay' }));

  console.log(useCardNumberFormat({ cardNumber: '1234', brand: 'amex' }));
  console.log(useCardNumberFormat({ cardNumber: '123456', brand: 'amex' }));
  console.log(useCardNumberFormat({ cardNumber: '1234567890', brand: 'amex' }));
  console.log(useCardNumberFormat({ cardNumber: '123456789012', brand: 'amex' }));

  console.log(useCardNumberFormat({ cardNumber: '123456', brand: 'diners' }));
  console.log(useCardNumberFormat({ cardNumber: '1234567890', brand: 'diners' }));

  return (
    <>
      <h1 style={{ marginBottom: '20px' }}>Component Modules</h1>
      <button type='button' onClick={openModal}>
        모달 열기
      </button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type='prompt'
        size='medium'
        title='Modal Title'
        description='Modal Description'
        placeholder='Enter Text'
        confirmLabel='Confirm'
        cancelLabel='Cancel'
        onConfirm={onConfirm}
      ></Modal>
    </>
  );
}

export default App;
