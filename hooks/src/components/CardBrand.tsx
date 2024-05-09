import { ChangeEvent, useState } from 'react';

import useCardBrand from '../lib/hooks/useCardBrand';
import useCardNumbers from '../lib/hooks/useCardNumbers';

export default function CardBrand() {
  const [value, setValue] = useState('');
  const { brand } = useCardBrand({ cardNumbers: value });
  const { cardNumbers } = useCardNumbers({ numbers: value });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>card brand</h3>
      <input type="text" data-testid="card-cvc-input" onChange={handleChange} />
      <div>brand:{brand}</div>
      <div>numbers: {cardNumbers?.join('-')}</div>
    </div>
  );
}
