import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations/config'
import { radii } from './foundations/radii'
import { styles } from './foundations/styles'
import { colors } from './foundations/colors'

const customTheme = extendTheme({
  radii,
  config,
  colors,
  styles,
})

export default customTheme