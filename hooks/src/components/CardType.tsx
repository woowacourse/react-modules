import { ChangeEvent, useState } from 'react';
import { useCardType } from '../lib';
import { Brand } from '../lib/useCardType';

const VISA: Brand = {
  name: 'visa',
  cardTypePatters: [4],
};

const MASTER: Brand = {
  name: 'master',
  cardTypePatters: [51, 52, 53, 54],
};

const AMERICAN_EXPRESS: Brand = {
  name: 'american express',
  cardTypePatters: [34, 37],
};

const LENGTH = 4;
const ETC = 'etc';

export default function CardType() {
  const [firstCardNumbers, setFirstCardNumbers] = useState<string>('');
  const { brand } = useCardType({
    firstCardNumbers,
    brands: [VISA, MASTER, AMERICAN_EXPRESS],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length === LENGTH) {
      setFirstCardNumbers(value);
    }
  };

  return (
    <div>
      <h3>card type</h3>
      <input data-testid="card-type-input" type="text" maxLength={LENGTH} onChange={handleChange} />
      <div data-testid="card-type-brand">{brand || ETC}</div>
    </div>
  );
}
