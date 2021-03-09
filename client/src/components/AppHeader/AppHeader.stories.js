import AppHeader from './AppHeader'

export default {
  title: 'AppHeader',
  component: AppHeader,
}

const Template = args => <AppHeader {...args} />

export const Main = Template.bind({})
Main.args = {
  title: 'Pop & Pour',
  subtitle: 'Wine Assistant and Taste Journal',
}

export const JournalPage = Template.bind({})
JournalPage.args = {
  title: 'Pop & Pour',
  subtitle: 'Journal',
}
