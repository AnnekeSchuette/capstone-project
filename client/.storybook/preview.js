import GlobalStyle from 'components/GlobalStyle'
import GlobalFonts from 'fonts/Fonts'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
    argTypesRegex: "^fetch[A-Z].*" ,
    argTypesRegex: "^create[A-Z].*",
    argTypesRegex: "^update[A-Z].*"
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
  layout: 'fullscreen',
}

export const decorators =[

  Story => (
    <>
      <GlobalFonts/>
      <GlobalStyle/>
      <div style={{ padding: '25px' }}>
        <Story />
      </div>
    </>
  ),
]
