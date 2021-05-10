import RecipeCard from 'components/RecipeCard/RecipeCard'

export default {
  title: 'Vinz – Capstone Project/RecipeCard',
  component: RecipeCard,
}

const Template = args => <RecipeCard {...args} />

export const Default = Template.bind({})
Default.args = {
  catTags: ['italian', 'pasta', 'vegetarian'],
}
