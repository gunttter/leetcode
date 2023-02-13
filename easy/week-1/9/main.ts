export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const oldColor = image[sr][sc];

  function solve(row: number, col: number) {
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // ?. returns 'undefined' even if function returns 'null' of 'undefined'
    // С использованием оператора опциональной последовательности
    //function doSomething(onContent, onError) {
    //try {
    // ... делаем что-то с данными
    //}
    //catch (err) {
    //onError?.(err.message); // не выбросит исключение, если onError равен undefined
    //}
    //}

    if (image[row]?.[col] === oldColor) {
      image[row][col] = color;
      solve(row + 1, col);
      solve(row - 1, col);
      solve(row, col + 1);
      solve(row, col - 1);
    }
  }

  if (oldColor !== color) {
    solve(sr, sc);
  }

  return image;
}
