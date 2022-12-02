export const day1part1 = (rawInput: string): number =>
  Math.max(
    ...rawInput.split('\n\n').map((elfCalories) =>
      elfCalories
        .split('\n')
        .map((calories) => +calories)
        .reduce((acc, curr) => acc + curr, 0)
    )
  );

export const day1part2 = (rawInput: string): number =>
  rawInput
    .split('\n\n')
    .map((elfCalories) =>
      elfCalories
        .split('\n')
        .map((calories) => +calories)
        .reduce((acc, curr) => acc + curr, 0)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr, 0);
