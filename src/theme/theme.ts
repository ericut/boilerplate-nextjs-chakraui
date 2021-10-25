import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { colors } from './foundations/colors';
import { breakpoints } from './foundations/breakpoints';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

export const CustomTheme = extendTheme({
  styles: {
    global: {
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  config,
  colors,
  breakpoints,
});
