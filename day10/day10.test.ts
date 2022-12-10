import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { day10part1, day10part2 } from './day10';

test('Day 10 part 1 example', () => {
  const rawFile = readFileSync('day10/example.txt', 'utf-8');
  expect(day10part1(rawFile)).toEqual(13140);
});

test('Day 10 part 2 example', () => {
  const rawFile = readFileSync('day10/example.txt', 'utf-8');
  expect(day10part2(rawFile)).toEqual(
    `##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....`
  );
});
