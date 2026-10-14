import { CyberpunkCheckbox } from '@edts/cyberpunk-ui/react'

const meta = {
  title: 'Components/Checkbox',
  component: CyberpunkCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Boolean form control that emits `value-changed` with `{ checked, value }` when its state changes.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    value: { control: 'text' },
    onValueChanged: { action: 'value-changed' },
  },
}

export default meta

export const States = {
  render: () => (
    <div className="story-stack">
      <CyberpunkCheckbox label="Unchecked" />
      <CyberpunkCheckbox label="Checked" checked />
      <CyberpunkCheckbox label="Disabled" disabled />
      <CyberpunkCheckbox label="Checked and disabled" checked disabled />
      <CyberpunkCheckbox label="Required" required />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates unchecked, checked, disabled, and required states. Required is a native form constraint.',
      },
    },
  },
}

export const Playground = {
  args: { label: 'Accept system updates', checked: false, disabled: false, required: false, value: 'updates' },
}
