// triangle area calculate
const triangleCal = (b, h) => {
  const calculate = 0.5 * b * h;
  convertAndDisplay("Triangle", calculate);
};

// triangle area calculate
const rectangleCal = (w, l) => {
  const calculate = w * l;
  convertAndDisplay("Rectangle", calculate);
};

// parallelogram area calculate
const parallelogramCal = (b, h) => {
  const calculate = b * h;
  convertAndDisplay("Parallelogram", calculate);
};

// rhombus area calculate
const rhombusCal = (d1, d2) => {
  const calculate = 0.5 * d1 * d2;
  convertAndDisplay("Rhombus", calculate);
};

// pentagon area calculate
const pentagonCal = (p, b) => {
  const calculate = 0.5 * p * b;
  convertAndDisplay("Pentagon", calculate);
};

// ellipse area calculate
const ellipseCal = (a, b) => {
  const calculate = Math.PI * a * b;
  convertAndDisplay("Ellipse", calculate);
};
