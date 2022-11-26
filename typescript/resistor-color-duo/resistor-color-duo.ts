interface Color {
  [color: string]: number;
}

const colorsMap: Color = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedValue(colors: string[]): number {
  if (colors.length < 2) {
    throw "At least two colors need to be present";
  }

  const [first, second] = colors;

  return Number(`${colorsMap[first]}${colorsMap[second]}`);
}
