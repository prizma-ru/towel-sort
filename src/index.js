
// You should implement your task here.

module.exports = function towelSort(matrix=[]) {
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

