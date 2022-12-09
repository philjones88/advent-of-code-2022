export const day9 = (rawFile: string, numberOfKnots: number): number => {
  const knots: [number, number][] = new Array(numberOfKnots).fill([0, 0]);
  const tail = knots.length - 1;

  const visited = new Map<string, boolean>([[knots[tail].join(), true]]);

  const movements = rawFile.split('\n');

  for (const move of movements) {
    const [direction, steps] = move.trim().split(' ');

    for (let i = 0; i < +steps; i++) {
      switch (direction) {
        case 'U':
          knots[0] = [knots[0][0] + 1, knots[0][1]];
          break;
        case 'R':
          knots[0] = [knots[0][0], knots[0][1] + 1];
          break;
        case 'D':
          knots[0] = [knots[0][0] - 1, knots[0][1]];
          break;
        case 'L':
          knots[0] = [knots[0][0], knots[0][1] - 1];
          break;
        default:
          throw new Error(`Unknown direction: "${direction}"!`);
      }

      for (let j = 1; j < knots.length; j++) {
        if (!(Math.abs(knots[j - 1][0] - knots[j][0]) <= 1 && Math.abs(knots[j - 1][1] - knots[j][1]) <= 1)) {
          if (knots[j - 1][0] !== knots[j][0]) {
            knots[j] = [knots[j][0] + (knots[j - 1][0] - knots[j][0]) / Math.abs(knots[j - 1][0] - knots[j][0]), knots[j][1]];
          }

          if (knots[j - 1][1] !== knots[j][1]) {
            knots[j] = [knots[j][0], knots[j][1] + (knots[j - 1][1] - knots[j][1]) / Math.abs(knots[j - 1][1] - knots[j][1])];
          }

          if (j === tail) {
            visited.set(knots[j].join(), true);
          }
          // } else {
          //   visited.set(knots[j].join(), false);
          // }
        }
      }
    }
  }

  // Array.from(visited, ([knot, wasVisited]) => ({ knot, wasVisited })).forEach(({ knot, wasVisited }) => console.log(knot));

  return Array.from(visited, ([knot, wasVisited]) => ({ knot, wasVisited }))
    .filter(({ wasVisited }) => wasVisited)
    .reduce((acc) => acc + 1, 0);
};
