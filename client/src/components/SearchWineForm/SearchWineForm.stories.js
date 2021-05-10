import SearchWineForm from 'components/SearchWineForm/SearchWineForm'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Capstone Project/SearchWine',
  component: SearchWineForm,
}

const Template = args => <SearchWineForm {...args} {...events} />
const events = actions({ setSearch: 'submitted!' })

export const Default = Template.bind({})
Default.args = {
  isDisabled: true,
}
