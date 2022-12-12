interface Monkey {
  id: number;
  divideBy: number;
  items: number[];
  throwItem: (n: number, wf: Operation) => [number, number];
  inspectedCount: number;
}

const throwItem = (operation: Operation, divBy: number, wt: number, wf: number) => (old: number, worryFactor: Operation) => {
  const n = worryFactor(operation(old));
  const throwAt = n % divBy === 0 ? wt : wf;
  return [throwAt, n] as [number, number];
};

type Operation = (o: number) => number;

const add =
  (p: number) =>
  (old: number): number =>
    old + p;

const addToOld = (old: number): number => old + old;

const multiple =
  (p: number) =>
  (old: number): number =>
    old * p;

const multipleByOld = (old: number): number => old * old;

const convertLineToMonkey = (line: string): Monkey => {
  const parts = line.split('\n');

  const id = +parts[0].slice(7, 8);

  const items = parts[1]
    .slice(18)
    .split(', ')
    .map((n) => +n.trim());

  const [op, param] = parts[2].slice(23).split(' ');

  const divBy = +parts[3].slice(21);

  const wt = +parts[4].slice(29);

  const wf = +parts[5].slice(30);

  // todo: is eval cleaner?
  let operation = addToOld;

  if (op === '+' && param !== 'old') {
    operation = add(+param);
  } else if (op === '*' && param === 'old') {
    operation = multipleByOld;
  } else if (op === '*') {
    operation = multiple(+param);
  }

  return {
    id,
    divideBy: divBy,
    items,
    throwItem: throwItem(operation, divBy, wt, wf),
    inspectedCount: 0,
  };
};

const compute = (monkeys: Monkey[], numberOfRounds: number, worryFactor: Operation) => {
  for (let i = 0; i < numberOfRounds; i++) {
    for (const monkey of monkeys) {
      for (const item of monkey.items) {
        const [throwAt, nItem] = monkey.throwItem(item, worryFactor);
        monkeys[throwAt].items.push(nItem);
      }
      monkey.inspectedCount = monkey.inspectedCount + monkey.items.length;
      monkey.items = [];
    }
  }
};

const simpleWorryFactor = (n: number) => Math.floor(n / 3);

const complexWorryFactor = (gf: number) => (n: number) => n % gf;

export const day11 = (rawFile: string, args: { numberOfRounds: number; useComplexWorryFactor: boolean }) => {
  const monkeys = rawFile.split('\n\n').map((line) => convertLineToMonkey(line.trim()));

  const worryFactor = args.useComplexWorryFactor ? complexWorryFactor(monkeys.reduce((acc, m) => acc * m.divideBy, 1)) : simpleWorryFactor;

  compute(monkeys, args.numberOfRounds, worryFactor);

  let [t1, t2] = [0, 0];

  for (const { inspectedCount: inspected } of monkeys) {
    if (t1 < inspected) {
      t2 = t1;
      t1 = inspected;
    } else if (t2 < inspected) {
      t2 = inspected;
    }
  }

  return t1 * t2;
};
