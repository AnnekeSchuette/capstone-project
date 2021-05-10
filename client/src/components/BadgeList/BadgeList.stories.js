import BadgeList from 'components/BadgeList/BadgeList'

export default {
  title: 'Capstone Project/BadgeList',
  component: BadgeList,
}

const Template = args => <BadgeList {...args} />

export const Default = Template.bind({})
Default.args = {
  data: ['merlot', 'cabernet sauvignon', 'pinot noir'],
}
