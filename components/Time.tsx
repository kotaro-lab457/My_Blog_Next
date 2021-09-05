import { parseISO, format } from "date-fns";
import { NextPage } from "next";

const Date: NextPage<{ dateString: string }> = ({ dateString }:{dateString:string}) => {
  const date = parseISO(dateString);
  const days = format(date, "LLLL d, yyyy");
  return <time dateTime={dateString}>{days}</time>;
};

export default Date;
