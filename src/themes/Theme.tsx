import { extendTheme } from '@chakra-ui/react';
import { cardTheme } from './Cards/CardTheme';

const theme = extendTheme({
  components: {
    Card: cardTheme,
  },
});

export default theme;