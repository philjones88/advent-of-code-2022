import { readFileSync } from 'fs';

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

const rawFile = readFileSync('day1/input.txt', 'utf-8');

console.log('PART 1 = ', day1part1(rawFile));

console.log('PART 2 = ', day1part2(rawFile));
