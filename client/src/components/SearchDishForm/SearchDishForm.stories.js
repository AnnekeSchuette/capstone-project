import SearchDishForm from 'components/SearchDishForm/SearchDishForm'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Vinz – Capstone Project/SearchDish',
  component: SearchDishForm,
}

const Template = args => <SearchDishForm {...args} {...events} />
const events = actions({ setSearch: 'submitted!' })

export const Default = Template.bind({})
Default.args = {
  isDisabled: true,
}
