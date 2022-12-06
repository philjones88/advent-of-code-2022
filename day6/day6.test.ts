import { expect, test } from 'vitest';
import { day6 } from './day6';

test('Day 6 example 1', () => {
  expect(day6('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 4)).toBe(7);
});

test('Day 6 example 2', () => {
  expect(day6('bvwbjplbgvbhsrlpgdmjqwftvncz', 4)).toBe(5);
});

test('Day 6 example 3', () => {
  expect(day6('nppdvjthqldpwncqszvftbrmjlhg', 4)).toBe(6);
});

test('Day 6 example 4', () => {
  expect(day6('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4)).toBe(10);
});

test('Day 6 example 5', () => {
  expect(day6('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4)).toBe(11);
});
