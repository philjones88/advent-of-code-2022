const compareValues = (left: any, right: any): any => {
  if (Number.isInteger(left) && Number.isInteger(right)) {
    if (left > right) {
      return false;
    }
    if (left < right) {
      return true;
    }
    return null;
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
      const result = compareValues(left[i], right[i]);
      if (result !== null) {
        return result;
      }
    }
    if (left.length < right.length) {
      return true;
    } else if (left.length > right.length) {
      return false;
    }
    return null;
  }

  return compareValues(Number.isInteger(left) ? [left] : left, Number.isInteger(right) ? [right] : right);
};

export const day13part1 = (rawFile: string): number => {
  let result = 0;

  rawFile
    .trim()
    .split('\n\n')
    .forEach((rawPair, idx) => {
      let [left, right] = rawPair
        .trim()
        .split('\n')
        .map((p) => JSON.parse(p));

      if (compareValues(left, right)) {
        result += idx + 1;
      }
    });

  return result;
};

export const day13part2 = (rawFile: string): number => {
  let first = 0;
  let second = 0;

  [
    ...rawFile
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((p) => JSON.parse(p)),
    [[2]],
    [[6]],
  ]
    .sort((l, r) => {
      let sortResult = compareValues(l, r);
      if (sortResult !== null) {
        return sortResult ? -1 : 1;
      }
      return 0;
    })
    .forEach((line, indx) => {
      if (JSON.stringify(line) === '[[2]]') {
        first = indx + 1;
      }
      if (JSON.stringify(line) === '[[6]]') {
        second = indx + 1;
      }
    });

  return first * second;
};
