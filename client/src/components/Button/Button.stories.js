import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const IconLeft = Template.bind({})
IconLeft.args = {
  iconPos: 'left',
  buttonText: 'Button',
}

export const IconRight = Template.bind({})
IconRight.args = {
  iconPos: 'right',
  buttonText: 'Button',
}
