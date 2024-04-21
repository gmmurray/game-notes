import dayjs, { Dayjs } from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const dateFrom = (input?: Dayjs) =>
  !!input ? dayjs().from(input) : dayjs().fromNow();

export const dateTo = (input?: Dayjs) =>
  !!input ? dayjs().to(input) : dayjs().toNow();

export const lastUpdatedString = (dateString: string): string =>
  `updated ${dateTo(dayjs(dateString))}`;
