const palette = {
  // Primary
  mainColor: '#532472',
  error: '#EB5757',
  subError: '#FFBA52',

  // Gray
  gray100: '#F1F1F4',
  gray300: '#D7D7D9',
  gray500: '#78787B',
  gray700: '##454547',
  gray800: '##202021',
} as const;

export type PaletteKeyTypes = keyof typeof palette;
