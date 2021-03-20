import Input from 'components/Input/Input'

export default {
  title: 'Capstone Project/Input',
  component: Input,
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Text input:',
  placeholder: 'Write anything ...',
}
