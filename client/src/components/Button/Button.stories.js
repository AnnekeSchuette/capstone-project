import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  buttonText: 'Default Button',
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  iconPos: 'left',
  iconName: 'ArrowLeft',
  buttonText: 'Button',
}

export const IconRight = Template.bind({})
IconRight.args = {
  iconPos: 'right',
  iconName: 'ArrowRight',
  buttonText: 'Button',
}
