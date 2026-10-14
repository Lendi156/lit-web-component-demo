import { CyberpunkButton } from '@edts/cyberpunk-ui/react'

const variants = ['primary', 'secondary', 'ghost', 'info', 'success', 'warning', 'danger']

const meta = {
  title: 'Components/Button',
  component: CyberpunkButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Action control with semantic color variants. Use primary for the main action, secondary or ghost for lower emphasis, and status variants when the action has a clear semantic meaning.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: variants },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    children: { control: 'text', description: 'Button label or slotted content.' },
  },
}

export default meta

export const AllVariants = {
  render: () => (
    <div className="story-stack">
      <p className="story-note">Primary is the default action; secondary and ghost reduce emphasis. Info, success, warning, and danger indicate action intent.</p>
      <div className="story-row">
        {variants.map((variant) => (
          <CyberpunkButton key={variant} variant={variant}>{variant}</CyberpunkButton>
        ))}
      </div>
    </div>
  ),
}

export const DisabledStates = {
  render: () => (
    <div className="story-row">
      <CyberpunkButton variant="primary">Enabled</CyberpunkButton>
      <CyberpunkButton variant="primary" disabled>Disabled</CyberpunkButton>
      <CyberpunkButton variant="secondary" disabled>Disabled secondary</CyberpunkButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons remain visible but cannot be activated.',
      },
    },
  },
}

export const Playground = {
  args: { variant: 'primary', type: 'button', disabled: false, children: 'Launch' },
}
