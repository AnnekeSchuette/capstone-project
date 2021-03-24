import Button from 'components/Button/Button'

export default {
  title: 'Capstone Project/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  buttonText: 'Default Button',
  isActive: false,
}

export const Focused = Template.bind({})
Focused.args = {
  buttonText: 'Focused Button',
  isActive: true,
}
export const Disabled = Template.bind({})
Disabled.args = {
  buttonText: 'Disabled Button',
  isActive: true,
  disabled: true,
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  iconPos: 'left',
  iconName: 'ArrowLeft',
  buttonText: 'Button',
  isActive: false,
}

export const IconRight = Template.bind({})
IconRight.args = {
  iconPos: 'right',
  iconName: 'ArrowRight',
  buttonText: 'Button',
  isActive: false,
}
