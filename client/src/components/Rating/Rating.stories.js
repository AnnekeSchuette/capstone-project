import Rating from 'components/Rating/Rating'

export default {
  title: 'Capstone Project/Rating',
  component: Rating,
}

const Template = args => <Rating {...args} />

export const Default = Template.bind({})
Default.args = {
  ratingScore: 3,
}