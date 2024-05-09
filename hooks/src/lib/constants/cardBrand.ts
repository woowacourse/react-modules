import { CardBrand } from '../type';

export const CARD_BRAND_NAME = [
  '비자카드',
  '마스터카드',
  '다이너스 클럽',
  '아메리칸 익스프레스',
  '유니온페이',
] as const;

type CardBrandName = (typeof CARD_BRAND_NAME)[number];

const CARD_BRAND: CardBrand<CardBrandName>[] = [
  {
    name: '비자카드',
    numberLength: 16,
    startWiths: ['4'],
    formatArray: [4, 4, 4, 4],
  },
  {
    name: '마스터카드',
    numberLength: 16,
    startWiths: [{ from: '51', to: '55' }],
    formatArray: [4, 4, 4, 4],
  },
  {
    name: '다이너스 클럽',
    numberLength: 14,
    startWiths: ['36'],
    formatArray: [4, 6, 4],
  },
  {
    name: '아메리칸 익스프레스',
    numberLength: 15,
    startWiths: ['34', '37'],
    formatArray: [4, 6, 5],
  },
  {
    name: '유니온페이',
    numberLength: 16,
    startWiths: [
      { from: '622126', to: '622925' },
      { from: '624', to: '626' },
      { from: '6282', to: '6288' },
    ],
    formatArray: [4, 4, 4, 4],
  },
];

export default CARD_BRAND;
