import 'styled-components';
import {
  LineHeightTypes,
  FontSizeTypes,
  FontWeightTypes,
  PaletteTypes,
  TextStyleTypes,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: PaletteTypes;
    textStyle: TextStyleTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    lineHeight: LineHeightTypes;
  }
}
