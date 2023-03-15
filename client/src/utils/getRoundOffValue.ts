export const getRoundOffValue: (
  rawValue: number
) => number = (rawValue) => {
  return Math.round(rawValue * 100) / 100;
};
