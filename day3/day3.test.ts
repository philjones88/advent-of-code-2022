import intersect from 'fast_array_intersect';
import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { findUniqueArrayElements } from '../common/arrays';
import { day3part2, getItemValue } from './day3';

import { day3part1 } from './day3';

test('test item value function', () => {
  expect(getItemValue('a')).toEqual(1);
  expect(getItemValue('z')).toEqual(26);
  expect(getItemValue('A')).toEqual(27);
  expect(getItemValue('Z')).toEqual(52);
});

test('find common array elements', () => {
  expect(
    intersect([
      ['a', 'B', 'c'],
      ['a', 'b', 'C'],
    ])
  ).toEqual(['a']);
});

test('find unique array elements', () => {
  expect(findUniqueArrayElements(['a', 'a', 'b', 'B', 'c'])).toEqual(['a', 'b', 'B', 'c']);
});

test('Day 3 Part 1 Example', () => {
  const rawFile = readFileSync('day3/example.txt', 'utf-8');

  const result = day3part1(rawFile);

  expect(result).toEqual(157);
});

test('Day 3 Part 2 Example', () => {
  const rawFile = readFileSync('day3/example.txt', 'utf-8');

  const result = day3part2(rawFile);

  expect(result).toEqual(70);
});
