import { parseISO, format } from 'date-fns';

const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  const days = format(date, 'LLLL d, yyyy');
  return <time dateTime={dateString}>{days}</time>;
};

export default Date;
