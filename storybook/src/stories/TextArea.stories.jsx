import { CyberpunkTextArea } from '@edts/cyberpunk-ui/react'

const meta = {
  title: 'Components/TextArea',
  component: CyberpunkTextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Multi-line text input with label, placeholder, row count, and native form states. Changes emit `value-changed` with `{ value }`.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    rows: { control: { type: 'number', min: 1, max: 12 } },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onValueChanged: { action: 'value-changed' },
  },
}

export default meta

export const Default = {
  args: {
    label: 'Notes',
    placeholder: 'Add observations...',
    value: '',
    rows: 4,
    disabled: false,
    required: false,
  },
}

export const FormStates = {
  render: () => (
    <div className="story-grid">
      <CyberpunkTextArea label="Required notes" placeholder="A value is required" rows={4} required />
      <CyberpunkTextArea label="Disabled notes" value="This text cannot be edited." rows={4} disabled />
    </div>
  ),
}
