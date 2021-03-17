import WineStorage from 'components/WineStorage/WineStorage'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Capstone Project/Wine Storage',
  component: WineStorage,
}

const Template = args => <WineStorage {...args} {...events} />
const events = actions({ onBookmark: 'is bookmarked' })

export const Default = Template.bind({})
Default.args = {}
