import { CyberpunkCard } from '@edts/cyberpunk-ui/react'

const meta = {
  title: 'Components/Card',
  component: CyberpunkCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Surface for grouping related content. Place main content in the default slot and use header/footer slots for optional card sections.',
      },
    },
  },
  argTypes: {
    elevated: { control: 'boolean', description: 'Adds the elevated visual treatment.' },
  },
}

export default meta

export const Default = {
  render: () => (
    <CyberpunkCard>
      <h3 slot="header">System status</h3>
      <p>All monitored systems are operating within expected parameters.</p>
      <span slot="footer">Updated moments ago</span>
    </CyberpunkCard>
  ),
}

export const Elevated = {
  render: () => (
    <CyberpunkCard elevated>
      <h3 slot="header">Priority panel</h3>
      <p>Use the elevated option to give a card additional visual prominence.</p>
      <span slot="footer">Elevated</span>
    </CyberpunkCard>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The elevated state emphasizes a card relative to surrounding surfaces.',
      },
    },
  },
}
