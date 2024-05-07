//다음 순서대로 검사
//처음 몇개의 숫자를 검사할 것인지?
//몇개까지 검사하고 ealry return 할 것인지?

type CardBrandName = "VISA" | "MasterCard" | "AMEX" | "UnionPay" | "Diners";

interface CardBrandInfo {
  name: CardBrandName;
  cardNumbersFormat: number[];
}

export const cardBrandsInfo: CardBrandInfo[] = [
  {
    name: "VISA",
    cardNumbersFormat: [4, 4, 4, 4],
    //4로 시작하는 16자리 숫자
    //4이면 얼리리턴
  },
  {
    name: "MasterCard",
    cardNumbersFormat: [4, 4, 4, 4],
    //51~55로 시작하는 16자리 숫자
    //5이면 두번째 숫자 확인
  },
  {
    name: "AMEX",
    cardNumbersFormat: [4, 6, 5],
    // (34로 시작): 3412 345678 90123
    // (37로 시작): 3712 345678 90123
  },
  {
    name: "Diners",
    cardNumbersFormat: [4, 6, 4],
    //Diners: 36으로 시작하는 14자리 숫자
  },
  {
    name: "UnionPay",
    cardNumbersFormat: [4, 4, 4, 4],
    //622126~622925로 시작하는 경우: 6221 2612 3456 7890
    // 624~626로 시작하는 경우: 6240 1234 5678 9012
    // 6282~6288로 시작하는 경우: 6282 1234 5678 9012
  },
];
