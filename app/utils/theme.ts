export type ThemeType = {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  helperText: string;
};

// #33A357 -> simple green

const appColors = {
  primary: '#0E5A4C',
  secondary: '#258082',
  tertiary: '#D4B33B',
  white: 'white',
  black: '#242526',
};

export const light: ThemeType = {
  background: '#F7F7F7',
  text: '#242526',
  helperText: '#B6B6B6',
  ...appColors,
};

export const dark: ThemeType = {
  background: '#18191A',
  text: 'white',
  helperText: '#B6B6B6',
  ...appColors,
};
