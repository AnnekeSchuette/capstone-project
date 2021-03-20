import SearchForm from 'components/SearchForm/SearchForm'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Capstone Project/SearchForm',
  component: SearchForm,
}

const Template = args => <SearchForm {...args} {...events} />
const events = actions({ setSearch: 'submitted!' })

export const Default = Template.bind({})
Default.args = {
  search: 'Test',
}
