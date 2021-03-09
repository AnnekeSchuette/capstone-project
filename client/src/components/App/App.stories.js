import App from './App'

export default {
  title: 'App',
  component: App,
}

const Template = args => <App {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'Angélica Zapata - tasty wine yummy yummy!!',
}
