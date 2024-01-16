  export function DaysBetween(StartDate: Date, EndDate: Date) {

      const startD = new Date(StartDate);
      const endD = new Date(EndDate);
  // The number of milliseconds in all UTC days (no DST)
  const oneDay = 1000 * 60 * 60 * 24;

  // A day in UTC always lasts 24 hours (unlike in other time formats)
  const start = Date.UTC(endD.getFullYear(), endD.getMonth(), endD.getDate());
  const end = Date.UTC(startD.getFullYear(), startD.getMonth(), startD.getDate());

  // so it's safe to divide by 24 hours
  return (start - end) / oneDay;
}