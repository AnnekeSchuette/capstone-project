import JournalEntry from 'components/JournalEntry/JournalEntry'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Vinz – Capstone Project/JournalEntry',
  component: JournalEntry,
}

const Template = args => <JournalEntry {...args} {...events} />
const events = actions({ setSearch: 'saved!' })

export const Default = Template.bind({})
Default.args = {
  journalEntryData: {
    rating: 3,
    notes: 'This is a very tasty wine from Jaques. Goes perfectly with Steak!',
    createdAt: '2021-03-27T17:37:18.394Z',
  },
}
