export const day10part1 = (rawFile: string): number => {
  const instructions = rawFile.split('\n').map((i) => i.trim());

  let x = 1;
  let cycle = 21;
  let result = 0;

  const translatedInstructions: string[] = instructions.flatMap((i) => i.split(' '));

  for (const instruction of translatedInstructions) {
    // console.log('instruction', instruction, Number.isInteger(+instruction));
    cycle++;

    if (Number.isInteger(+instruction)) {
      x += +instruction;
    }

    if (cycle % 40 === 0) {
      result += (cycle - 20) * x;
    }
  }

  return result;
};

export const day10part2 = (rawFile: string, emptyChar = '.', filledChar = '#'): string => {
  const instructions = rawFile.split('\n').map((i) => i.trim());

  let display: string[][] = new Array(6).fill(emptyChar).map(() => new Array(40).fill(emptyChar));

  const translatedInstructions: string[] = instructions.flatMap((i) => i.split(' '));

  let cycle = 1;
  let spritePosition = [0, 1, 2];
  let cursorPosition = [0, 0];

  for (const instruction of translatedInstructions) {
    cycle++;
    // console.log('start cycle', cycle, instruction, spritePosition, cursorPosition);

    if (spritePosition.includes(cursorPosition[1])) {
      display[cursorPosition[0]][cursorPosition[1]] = filledChar;
    }

    cursorPosition[1] = cursorPosition[1] + 1;

    if ((cycle - 1) % 40 === 0) {
      cursorPosition[0] = cursorPosition[0] + 1;
      cursorPosition[1] = 0;
    }

    if (Number.isInteger(+instruction)) {
      spritePosition = spritePosition.map((x) => x + +instruction);
    }
    // console.log('end of cycle', cycle, instruction, spritePosition, cursorPosition);
  }

  return display.map((r) => r.join('')).join('\n');
};
