import { parseISO, format } from 'date-fns';

type Date = { dateString: string };

const Date: React.FC<Date> = ({ dateString }) => {
  const date = parseISO(dateString);
  const days = format(date, 'LLLL d, yyyy');
  return <time dateTime={dateString}>{days}</time>;
};

export default Date;
