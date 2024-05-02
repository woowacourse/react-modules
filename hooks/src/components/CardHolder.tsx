import { useCardHolder } from '../lib';

export default function CardHolder() {
  const cardHolderResult = useCardHolder({
    validationErrors: {
      alphabet: '알파벳만 입력해주세요.',
      empty: '값을 입력해주세요.',
    },
  });
  return (
    <div>
      <h3>card holder</h3>
      <input value={cardHolderResult.cardHolder} type="text" maxLength={50} onChange={cardHolderResult.handleChange} />
      <div>오류 :{cardHolderResult.errorMessage}</div>
    </div>
  );
}
