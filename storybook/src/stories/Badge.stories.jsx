import { CyberpunkBadge } from '@edts/cyberpunk-ui/react'

const variants = ['primary', 'info', 'success', 'warning', 'danger', 'neutral']
const sizes = ['small', 'medium', 'large']

const meta = {
  title: 'Components/Badge',
  component: CyberpunkBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Compact status or category label. Variants communicate status, while sizes control visual emphasis.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: sizes },
    children: { control: 'text', description: 'Short badge label.' },
  },
}

export default meta

export const AllVariants = {
  render: () => (
    <div className="story-stack">
      <p className="story-note">Primary highlights the brand; info, success, warning, and danger indicate status; neutral is a low-emphasis label.</p>
      <div className="story-row">
        {variants.map((variant) => (
          <CyberpunkBadge key={variant} variant={variant}>{variant}</CyberpunkBadge>
        ))}
      </div>
    </div>
  ),
}

export const AllSizes = {
  args: {
    variant: "primary"
  },

  render: () => (
    <div className="story-row">
      {sizes.map((size) => (
        <div className="story-example" key={size}>
          <strong>{size}</strong>
          <CyberpunkBadge variant="info" size={size}>{size} badge</CyberpunkBadge>
        </div>
      ))}
    </div>
  ),

  parameters: {
    docs: {
      description: {
        story: 'Small works well in dense status lists, medium is the default, and large gives labels more emphasis.',
      },
    },
  }
}

export const Playground = {
  args: { variant: 'primary', size: 'medium', children: 'Operational' },
}
