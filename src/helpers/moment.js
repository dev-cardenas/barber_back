import moment from 'moment';
import 'moment/locale/es';

export function compareDate(date) {
  const now = moment();
  const afterDate = moment(date);

  if (afterDate.diff(now, 'minutes') > 90) {
    return true;
  }
  return false;
}
