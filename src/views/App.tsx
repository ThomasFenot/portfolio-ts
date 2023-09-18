import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"

import { MainPage } from "../views/MainPage"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"

import theme from '../themes/Theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <MainPage/>
      </Grid>
    </Box>
    </Box>
  </ChakraProvider>
)
