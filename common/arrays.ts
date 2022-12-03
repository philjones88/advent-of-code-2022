export function findUniqueArrayElements<T>(arr1: T[]): T[] {
  return [...new Set(arr1)];
}
