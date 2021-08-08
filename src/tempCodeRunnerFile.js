module.exports = function towelSort(matrix=[]) {
  mas = [];
  for (let i = 0; i < matrix.length; i++)
    if ((i + 1) % 2 == 0) {
      mas.push(...mass[i].reverse());
    }
    else {
      mas.push(...mass[i]);
    }
  return mas;
};






function evenMass(mass = []) {
  mas = [];
  for (let i = 0; i < matrix.length; i++)
    if ((i + 1) % 2 == 0) {
      mas.push(matrix[i].reverse());
    }
    else {
      mas.push(matrix[i]);
    }
  return mas.flat();
};

var matrix = [
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
];


console.log(evenMass(matrix));