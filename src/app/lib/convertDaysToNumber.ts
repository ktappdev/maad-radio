export const convertDaysToNumbers = (days: string[]): number[] => {
  const dayMap: { [key: string]: number } = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  return days.map((day) => dayMap[day.toLowerCase()]);
};
