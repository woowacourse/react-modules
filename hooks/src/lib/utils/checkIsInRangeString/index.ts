export default function checkIsInRangeString(
  target: string,
  from: string,
  to: string
) {
  // 범위 비교
  const rangeArray = [to, from].sort((a, b) => a.localeCompare(b));
  if (rangeArray[0] !== from || rangeArray[1] !== to)
    throw new Error('잘못된 범위입니다.');

  // 사전순으로 정렬
  const compareArray = [target, from, to].sort((a, b) => a.localeCompare(b));

  // 가운데 값이 target과 같으면 범위 내에 값이 존재하는 것
  return compareArray[1] === target;
}
