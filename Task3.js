function mostElement(arr) {
  let quency = {};
  Element;
  let maxquency = 0;
  let mostElement;

  for (let i = 0; i < arr.length; i++) {
    const Element = arr[i];
    quency[Element] = (quency[Element] || 0) + 1;

    if (quency[Element] > maxquency) {
      maxquency = quency[Element];
      mostElement = Element;
    }
  }

  return mostElement;
}
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(mostElement(inputArray));
