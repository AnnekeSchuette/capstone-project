import JournalForm from 'components/JournalForm/JournalForm'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Vinz – Capstone Project/JournalForm',
  component: JournalForm,
}

const Template = args => <JournalForm {...args} {...events} />
const events = actions({ setSearch: 'saved!' })

export const Default = Template.bind({})
Default.args = {
  ratingScore: 3,
  journalContent:
    'This is a very tasty wine from Jaques. Goes perfectly with Steak!',
  editMode: true,
}
