import Header from 'components/Header/Header'

export default {
  title: 'Capstone Project/Header',
  component: Header,
}

const Template = args => <Header {...args} />

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
