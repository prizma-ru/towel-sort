
function evenMass(mass = []) {
  mas = [];
  for (let i = 0; i < matrix.length; i++)
    if ((i + 1) % 2 == 0) {
      mas.push(matrix[i].reverse());
    }
    else {
      mas.push(matrix[i]);
    }
  return mass.flat();
};

var matrix = [[5, 10, 15], [6, 10, 15], [7, 11, 12], [77, 19, 22, 12], [79, 111, 512, 490, 15]];


console.log(evenMass(matrix));