import Header from 'components/Header/Header'

export default {
  title: 'Capstone Project/Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const Main = Template.bind({})
Main.args = {
  title: 'Vinz',
  subtitle: 'Wine Assistant and Taste Journal',
}

export const WineStorage = Template.bind({})
WineStorage.args = {
  title: 'Vinz',
  subtitle: 'Wine Storage',
}
