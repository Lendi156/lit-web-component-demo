import { CyberpunkContainer } from '@edts/cyberpunk-ui/react'

const sizes = ['sm', 'md', 'lg', 'xl']

const meta = {
  title: 'Components/Container',
  component: CyberpunkContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Centered content wrapper with breakpoint-like maximum widths. Set fluid to remove the maximum width.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: sizes, description: 'Maximum-width preset.' },
    fluid: { control: 'boolean', description: 'Use the full available width.' },
    padding: { control: 'text', description: 'Container padding value.' },
  },
}

export default meta

export const AllSizes = {
  render: () => (
    <div className="story-stack">
      {sizes.map((size) => (
        <div className="story-example" key={size}>
          <strong>{size}</strong>
          <CyberpunkContainer size={size}>
            <div className="story-box">Maximum width preset: {size}</div>
          </CyberpunkContainer>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The presets range from sm (640px) through md (860px), lg (1200px), and xl (1400px).',
      },
    },
  },
}

export const Fluid = {
  render: () => (
    <CyberpunkContainer fluid>
      <div className="story-box">Fluid container fills the available width.</div>
    </CyberpunkContainer>
  ),
}

export const Playground = {
  args: { size: 'lg', fluid: false, padding: '1rem' },
  render: (args) => (
    <CyberpunkContainer {...args}>
      <div className="story-box">Resize the preview to inspect this container.</div>
    </CyberpunkContainer>
  ),
}
