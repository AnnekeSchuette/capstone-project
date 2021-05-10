import StatusMessage from 'components/StatusMessage/StatusMessage'

export default {
  title: 'Capstone Project/StatusMessage',
  component: StatusMessage,
}

const Template = args => <StatusMessage>{args.text}</StatusMessage>

export const Default = Template.bind({})
Default.args = {
  text:
    'This is an informative message, i.e. if a search delivers no results ... 😢 ',
}
