export const COLORS: string[] = [
  `black`,

  `brown`,

  `red`,

  `orange`,

  `yellow`,

  `green`,

  `blue`,

  `violet`,

  `grey`,

  `white`,
];

export const colorCode = (color: string): any => {
  if (color !== "colors") {
    return COLORS.indexOf(color);
  } else {
    let band = COLORS.map((col) => {
      COLORS.push(col);
    });
    return COLORS;
  }
};
