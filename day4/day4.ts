export const day4part1 = (rawFile: string): number => {
  const assignmentPairs = rawFile.split('\n');

  let totalCount = 0;

  for (const assignmentPair of assignmentPairs) {
    const [elf1, elf2] = assignmentPair.split(',');

    const [e1p1, e1p2] = elf1.split('-').map(Number);
    const [e2p1, e2p2] = elf2.split('-').map(Number);

    if ((e1p1 >= e2p1 && e1p2 <= e2p2) || (e2p1 >= e1p1 && e2p2 <= e1p2)) {
      totalCount += 1;
    }
  }

  return totalCount;
};

export const day4part2 = (rawFile: string): number => {
  const assignmentPairs = rawFile.split('\n');

  let totalCount = 0;

  for (const assignmentPair of assignmentPairs) {
    const [elf1, elf2] = assignmentPair.split(',');

    const [e1p1, e1p2] = elf1.split('-').map(Number);
    const [e2p1, e2p2] = elf2.split('-').map(Number);

    if (e1p1 <= e2p2 && e2p1 <= e1p2) {
      totalCount += 1;
    }
  }

  return totalCount;
};
