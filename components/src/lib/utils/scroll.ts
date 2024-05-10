function isPageLongerThanViewport() {
  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  );

  const viewportHeight = window.innerHeight;

  return pageHeight > viewportHeight;
}

export const preventScroll = () => {
  // 현재 스크롤 위치 저장
  const scrollY = window.scrollY;

  // 스크롤을 고정시키고, 화면을 현재 스크롤 위치에 고정
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.height = '100%';
  document.body.style.overflowY = isPageLongerThanViewport() ? 'scroll' : 'hidden'; // scroll은 스크롤 width만큼을 남긴다. hidden은 스크롤 width도 아예 없음. 스크롤이 없는 상태(viewport height < page)에서는 스크롤 만큼의 width가 생기면 width가 늘어나고 줄어들어 아이템이 움직이는 문제 존재.

  // 현재 스크롤 위치를 반환하여 나중에 복원할 수 있게 함
  return scrollY;
};

export const allowScroll = (scrollY: number) => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.height = '';
  document.body.style.overflowY = '';

  // 저장된 스크롤 위치로 이동
  window.scrollTo(0, scrollY);
};
