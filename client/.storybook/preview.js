import GlobalStyle from '../src/components/GlobalStyle'
import GlobalFonts from '../src/fonts/Fonts'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
}

export const decorators =[
  Story => (
    <>
      <GlobalFonts/>
      <GlobalStyle/>
      <Story />
    </>
  ),
]
