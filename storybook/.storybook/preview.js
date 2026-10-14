import '../src/storybook.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    backgrounds: {
      default: 'cyberpunk',
      values: [
        { name: 'cyberpunk', value: '#0a1220' },
        { name: 'dark', value: '#111827' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
  },
}

export default preview
