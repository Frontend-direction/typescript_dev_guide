export const  dateStringToDate = (dateString: string):Date => {
  const [year, month, day] = dateString.split('/').map((val: string) : number => {
    return parseInt(val);
  });

  return new Date(day, month-1, year)
}
