import RecipeCard from 'components/RecipeCard/RecipeCard'

export default {
  title: 'Capstone Project/RecipeCard',
  component: RecipeCard,
}

const Template = args => <RecipeCard {...args} />

export const Default = Template.bind({})
Default.args = {
  data: ['merlot', 'cabernet sauvignon', 'pinot noir'],
}
