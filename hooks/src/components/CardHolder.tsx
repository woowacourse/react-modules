import { useCardHolder } from '../lib';

const useCardHolderProps = {
  validationErrorMessages: {
    alphabet: '알파벳만 입력해주세요.',
    empty: '소유자 이름을 입력해주세요.',
  },
  validations: {
    alphabet: {
      isOnlyUpperCase: true,
      isNeedChangeUpperCase: false,
    },
  },
};
export default function CardHolder() {
  const cardHolderResult = useCardHolder(useCardHolderProps);
  return (
    <div>
      <h3>card holder</h3>
      <input value={cardHolderResult.cardHolder} type="text" maxLength={50} onChange={cardHolderResult.handleChange} />
      <div>오류 :{cardHolderResult.errorMessage}</div>
    </div>
  );
}
