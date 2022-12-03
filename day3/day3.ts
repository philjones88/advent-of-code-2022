import intersect from 'fast_array_intersect';
import { findUniqueArrayElements } from '../common/arrays';

export const getItemValue = (input: string): number => {
  if (input.length > 1) {
    throw new Error('Item should be 1 character only!');
  }

  if (input.charAt(0).toLowerCase() === input.charAt(0)) {
    return input.charCodeAt(0) - 96;
  }

  if (input.charAt(0).toUpperCase() === input.charAt(0)) {
    return input.charCodeAt(0) - 38;
  }

  throw new Error('Unknown item');
};

export const day3part1 = (rawInput: string): number => {
  const rucksacks = rawInput.split('\n');

  let totalPriorities = 0;

  for (const rucksack of rucksacks) {
    const firstCompartment = rucksack.slice(0, rucksack.length / 2).split('');
    const secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length).split('');
    const itemsInBothCompartments = findUniqueArrayElements(intersect([firstCompartment, secondCompartment]));

    itemsInBothCompartments.forEach((item) => (totalPriorities += getItemValue(item)));
  }

  return totalPriorities;
};

export const day3part2 = (rawInput: string): number => {
  const rucksacks = rawInput.split('\n');

  let totalPriorities = 0;

  for (let i = 0; i < rucksacks.length; i += 3) {
    const groupsRaw = rucksacks.slice(i, i + 3);

    const groups = groupsRaw.map((g) => g.split(''));

    const itemsInBothCompartments = intersect(groups);

    itemsInBothCompartments.forEach((item) => (totalPriorities += getItemValue(item)));
  }

  return totalPriorities;
};
