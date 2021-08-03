
// You should implement your task here.

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

