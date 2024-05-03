// 대문자와 공백만 허용하는 정규표현식
export const UPPERCASE_AND_SPACE_ONLY = /^[A-Z\s]+$/;

// 두 개 이상의 연속된 공백을 찾는 정규표현식
export const DOUBLE_BLANK = / {2,}/;

export const MONTH_RANGE = {
  MIN: 1,
  MAX: 12,
};

export const YEAR_RANGE = {
  MIN: 0,
  MAX: 99,
};
