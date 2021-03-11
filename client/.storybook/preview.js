import GlobalStyle from 'components/GlobalStyle'
import GlobalFonts from 'fonts/Fonts'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import styled from 'styled-components'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
