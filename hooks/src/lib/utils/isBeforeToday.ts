const isBeforeToday = (month: number, year: number) => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear() - 2000;

  if (todayYear < year) return false;
  if (todayYear === year && todayMonth >= month) return false;
  return true;
};

export default isBeforeToday;
