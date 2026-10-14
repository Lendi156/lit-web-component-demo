import { CyberpunkAlert } from '@edts/cyberpunk-ui/react'

const variants = [
  ['info', 'Informational messages that provide context.'],
  ['success', 'Positive confirmation that an action completed.'],
  ['warning', 'Cautions that need attention but are not failures.'],
  ['danger', 'Errors or critical problems that need action.'],
  ['error', 'Error alias styled the same as danger.'],
]

const meta = {
  title: 'Components/Alert',
  component: CyberpunkAlert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A semantic message panel. Choose a variant to communicate the urgency and meaning of its content.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: variants.map(([variant]) => variant) },
    children: { control: 'text', description: 'Message displayed inside the alert.' },
  },
}

export default meta

export const Variants = {
  render: () => (
    <div className="story-stack">
      {variants.map(([variant, explanation]) => (
        <div className="story-example" key={variant}>
          <strong>{variant}</strong>
          <CyberpunkAlert variant={variant}>{explanation}</CyberpunkAlert>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All supported alert variants. Use info for neutral context, success for confirmation, warning for caution, and danger/error for failures.',
      },
    },
  },
}

export const Playground = {
  args: { variant: 'info', children: 'System sync is operating normally.' },
}
