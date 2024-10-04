import { extendTheme } from '@chakra-ui/react'
import { config } from './foundations/config'
import { radii } from './foundations/radii'
import { styles } from './foundations/styles'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'

const customTheme = extendTheme({
  radii,
  config,
  colors,
  fonts,
  styles,
})

export default customTheme