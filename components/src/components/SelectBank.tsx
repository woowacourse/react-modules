import React from 'react';
import styles from './SelectBank.module.css';
import { BC, Hana, Hyundai, Kakao, KB, Lotte, Shinhan, Woori } from '../assets';

interface BankInfo {
  src: string;
  alt: string;
  text: string;
}

const banks: Array<BankInfo> = [
  { src: BC, alt: 'BC카드', text: 'BC카드' },
  { src: Shinhan, alt: '신한카드', text: '신한카드' },
  { src: Kakao, alt: '카카오뱅크', text: '카카오뱅크' },
  { src: Hyundai, alt: '현대카드', text: '현대카드' },
  { src: Woori, alt: '우리카드', text: '우리카드' },
  { src: Lotte, alt: '롯데카드', text: '롯데카드' },
  { src: Hana, alt: '하나카드', text: '하나카드' },
  { src: KB, alt: '국민카드', text: '국민카드' },
];

const SelectBank = () => {
  return (
    <div className={styles.container}>
      {banks.map((bank, index) => (
        <div key={index}>
          <img src={bank.src} alt={bank.alt} className={styles.bankLogo} />
          <div className={styles.bankName}>{bank.text}</div>
        </div>
      ))}
    </div>
  );
};

export default SelectBank;
