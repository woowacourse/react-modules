import { UNIONPAY_RANGES } from '../card.contant';

function isUnionPay(value: string): boolean {
  const prefix6 = parseInt(value.slice(0, 6), 10);
  const prefix3 = parseInt(value.slice(0, 3), 10);
  const prefix4 = parseInt(value.slice(0, 4), 10);

  return (
    (prefix6 >= UNIONPAY_RANGES.PREFIX_6.min && prefix6 <= UNIONPAY_RANGES.PREFIX_6.max) ||
    (prefix3 >= UNIONPAY_RANGES.PREFIX_3.min && prefix3 <= UNIONPAY_RANGES.PREFIX_3.max) ||
    (prefix4 >= UNIONPAY_RANGES.PREFIX_4.min && prefix4 <= UNIONPAY_RANGES.PREFIX_4.max)
  );
}

export default isUnionPay;
