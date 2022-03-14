import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const formatDateInTimeAgo = (timestamp: number): string => {
  const sentDate = dayjs(timestamp);
  const now = dayjs();

  console.log('formatDateInTimeAgo timestamp=', timestamp);
  console.log('Total Duration:', now.diff(sentDate, 'second', true));
  console.log('now:', dayjs(sentDate).fromNow());

  return dayjs(timestamp).fromNow();
};
