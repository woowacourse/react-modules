import { CENTURY_PREFIX } from '../constants';

const getNowYearAndMonth = () => {
  const today = new Date();

  const currentDate = {
    year: today.getFullYear() - CENTURY_PREFIX,
    month: today.getMonth() + 1,
  };

  return currentDate;
};

export default getNowYearAndMonth;
