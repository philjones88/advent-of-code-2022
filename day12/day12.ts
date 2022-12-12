interface XY {
  x: number;
  y: number;
}

type Grid = number[][];

const getValueAt = (grid: Grid, coOrds: XY): number => {
  const { x, y } = coOrds;
  return grid[y][x];
};

const charToNumber = (input: string): number => {
  if (input === 'S') {
    return 0;
  }
  if (input === 'E') {
    return 25;
  }
  return 'abcdefghijklmnopqrstuvwxyz'.indexOf(input);
};

const createMountainGrid = (rawFile: string): { grid: Grid; start: XY; end: XY } => {
  let start: XY = { x: 0, y: 0 };
  let end: XY = { x: 0, y: 0 };

  const grid: Grid = rawFile
    .split('\n')
    .filter(Boolean)
    .map((row, y) =>
      row
        .split('')
        .filter(Boolean)
        .map((cell, x) => {
          // saves looping 3 times!
          if (cell === 'S') {
            start = { x, y };
          }
          if (cell === 'E') {
            end = { x, y };
          }
          return charToNumber(cell);
        })
    );

  return { grid, start, end };
};

const neighbourOffsets = [-1, 0, 1].flatMap((x) => [-1, 0, 1].map((y) => ({ x, y } as XY))).filter(({ x, y }) => (x !== 0 || y !== 0) && (x === 0 || y === 0));

const getNeighbours = (grid: Grid, { x, y }: XY): XY[] =>
  neighbourOffsets.map(({ x: dx, y: dy }) => ({ x: x + dx, y: y + dy } as XY)).filter(({ x, y }) => x >= 0 && y >= 0 && x < grid[0].length && y < grid.length);

export const day12part1 = (rawFile: string): number => {
  const { grid, start, end } = createMountainGrid(rawFile);

  const queue: [XY, number][] = [[start, 0]];

  const visited = new Set<string>();

  let result = 0;

  while (queue.length > 0) {
    const [current, stepCount] = queue.shift()!;

    if (visited.has(`${current.x},${current.y}`)) {
      continue;
    }

    visited.add(`${current.x},${current.y}`);

    if (current.x === end.x && current.y === end.y) {
      result = stepCount;
      break;
    }

    queue.push(
      ...getNeighbours(grid, current)
        .filter((coord) => getValueAt(grid, coord) <= getValueAt(grid, current) + 1)
        .map((coord) => [coord, stepCount + 1] as [XY, number])
    );
  }

  return result;
};

export const day12part2 = (rawFile: string): number => {
  // reversing the start/end to find the shortest path
  const { grid, end: start } = createMountainGrid(rawFile);

  const queue: [XY, number][] = [[start, 0]];

  const visited = new Set<string>();

  let result = 0;

  while (queue.length) {
    const [current, stepCount] = queue.shift()!;

    if (visited.has(`${current.x},${current.y}`)) {
      continue;
    }

    if (getValueAt(grid, current) === 0) {
      result = stepCount;
      break;
    }

    visited.add(`${current.x},${current.y}`);

    queue.push(
      ...getNeighbours(grid, current)
        .filter((coord) => getValueAt(grid, coord) >= getValueAt(grid, current) - 1)
        .map((coord) => [coord, stepCount + 1] as [XY, number])
    );
  }

  return result;
};
