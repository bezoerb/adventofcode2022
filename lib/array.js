/**
 * Get all values from source array which are also included in all other arrays
 * @param {array} source Source array
 * @param  {...any} rest Arrays to compare
 */
export function intersect(source, ...rest) {
  return source.filter((value) => rest.every((arr) => arr.includes(value)));
}

/**
 * Get all values from source array which are not included in any other array
 * @param {array} source Source array
 * @param  {...any} rest Arrays to compare
 */
export function different(source, ...rest) {
  return source.filter((value) => rest.every((arr) => !arr.includes(value)));
}

/**
 * Get the sum of all array elements
 * @param {array} arr
 * @param {number} initial
 */
export function sum(arr, initial = 0) {
  return arr.reduce((acc, val) => {
    return typeof acc === "bigint"
      ? acc + BigInt(parseFloat(val) || 0)
      : acc + parseFloat(val) || 0;
  }, initial);
}

/**
 * Get the sum of all array elements
 * @param {array} arr
 * @param {number} initial
 */
export function multiply(arr, initial = 1) {
  return arr.reduce((acc, val) => {
    return typeof acc === "bigint"
      ? acc * BigInt(parseFloat(val) || 0)
      : acc * parseFloat(val) || 0;
  }, initial);
}

/**
 * Make array unique
 * @param {array} arr
 */
export function unique(arr) {
  return [...new Set(arr)];
}
