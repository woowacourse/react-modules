export const preventScroll = () => {
  // 현재 스크롤 위치 저장
  const scrollY = window.scrollY;

  // 스크롤을 고정시키고, 화면을 현재 스크롤 위치에 고정
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflowY = 'scroll'; // hidden으로 하면 스크롤바 사라져서 이상함

  // 현재 스크롤 위치를 반환하여 나중에 복원할 수 있게 함
  return scrollY;
};

export const allowScroll = (scrollY: number) => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.overflowY = '';

  // 저장된 스크롤 위치로 이동
  window.scrollTo(0, scrollY);
};
