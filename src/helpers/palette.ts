export type Palette = {
  primary: string,
  secondary: string,
  background: string,
  text: string,
  text2: string,
};

export type Pallettes = {
  [key: string]: Palette
}

let colourPalette: Pallettes = {
  default: {
    primary: '#003087',
    secondary: '#005bbb',
    background: '#f6f8f8',
    text: '#231f20',
    text2: '#3f525f',
  },
  dark: {
    primary: '#fa9200',
    secondary: '#fdebd1',
    background: '#3f525f',
    text: '#ffffff',
    text2: '#ffffff',
  },
  coloured: {
    primary: '#fae100',
    secondary: '#fefce5',
    background: '#005bbb',
    text: '#ffffff',
    text2: '#ffffff',
  }
}

export function createPalette(name: string, colours: Palette) {
  colourPalette[name] = colours;
}

export function getPalette(palette?: string | (Palette & {basePalette?: string})) {
  let paletteId = 'default';
  if (typeof palette == "string" && colourPalette[palette]) {
    paletteId = palette;
  }
  if (typeof palette == "object" && palette.basePalette) {
    paletteId = palette.basePalette;
  }

  let paletteObj = colourPalette[paletteId];

  if (typeof palette == "object") {
    paletteObj = {...paletteObj, ...palette}
  }

  return paletteObj;
}
