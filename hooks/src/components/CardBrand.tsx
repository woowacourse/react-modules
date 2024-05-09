import { ChangeEvent, useState } from 'react';

import useCardBrand from '../lib/hooks/useCardBrand';

export default function CardBrand() {
  const [cardNumbers, setCardNumbers] = useState('');
  const { brand } = useCardBrand({ cardNumbers });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumbers(e.target.value);
  };

  return (
    <div>
      <h3>card brand</h3>
      <input type="text" data-testid="card-cvc-input" onChange={handleChange} />
      <div>brand:{brand}</div>
    </div>
  );
}
