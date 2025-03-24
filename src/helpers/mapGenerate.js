export function mapGenerate(size) {
  //size 15

  let newArr = new Array(size);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = new Array(size);
    for (let j = 0; j < newArr.length; j++) {
      newArr[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return newArr;
}
