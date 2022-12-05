import { reverse } from 'dns';

export const exampleStacks = new Map<number, string[]>([
  [1, ['Z', 'N'].reverse()],
  [2, ['M', 'C', 'D'].reverse()],
  [3, ['P'].reverse()],
]);

export const inputStacks = new Map<number, string[]>([
  [1, ['F', 'C', 'J', 'P', 'H', 'T', 'W'].reverse()],
  [2, ['G', 'R', 'V', 'F', 'Z', 'J', 'B', 'H'].reverse()],
  [3, ['H', 'P', 'T', 'R'].reverse()],
  [4, ['Z', 'S', 'N', 'P', 'H', 'T'].reverse()],
  [5, ['N', 'V', 'F', 'Z', 'H', 'J', 'C', 'D'].reverse()],
  [6, ['P', 'M', 'G', 'F', 'W', 'D', 'Z'].reverse()],
  [7, ['M', 'V', 'Z', 'W', 'S', 'J', 'D', 'P'].reverse()],
  [8, ['N', 'D', 'S'].reverse()],
  [9, ['D', 'Z', 'S', 'F', 'M'].reverse()],
]);

export interface Instruction {
  amount: number;
  from: number;
  to: number;
}

export const parseInstructions = (rawInstructions: string): Instruction[] => {
  const result: Instruction[] = [];
  const rawInstructionLines = rawInstructions.split('\n');

  const regex = new RegExp(/move (\d+) from (\d+) to (\d+)/);

  for (const rawInstruction of rawInstructionLines) {
    const matches = regex.exec(rawInstruction.trim());
    if (matches?.length !== 4) {
      throw new Error('Bad instruction!');
    }
    result.push({ amount: +matches[1], from: +matches[2], to: +matches[3] });
  }

  return result;
};

export const day5part1 = (inputStacks: Map<number, string[]>, instructions: Instruction[]): string => {
  const newStacks = new Map(inputStacks);
  for (const instruction of instructions) {
    const cratesToMove = (newStacks.get(instruction.from) as string[]).slice(0, instruction.amount);

    newStacks.set(instruction.from, (newStacks.get(instruction.from) as string[]).slice(instruction.amount));

    newStacks.set(instruction.to, [...cratesToMove.reverse(), ...(newStacks.get(instruction.to) as string[])]);
  }

  let result = '';

  for (const inputStack of newStacks) {
    result += inputStack[1].reverse().pop();
  }

  return result;
};

export const day5part2 = (inputStacks: Map<number, string[]>, instructions: Instruction[]): string => {
  const newStacks = new Map(inputStacks);
  for (const instruction of instructions) {
    const cratesToMove = (newStacks.get(instruction.from) as string[]).slice(0, instruction.amount);

    newStacks.set(instruction.from, (newStacks.get(instruction.from) as string[]).slice(instruction.amount));

    newStacks.set(instruction.to, [...cratesToMove, ...(newStacks.get(instruction.to) as string[])]);
  }

  let result = '';

  for (const inputStack of newStacks) {
    result += inputStack[1].reverse().pop();
  }

  return result;
};