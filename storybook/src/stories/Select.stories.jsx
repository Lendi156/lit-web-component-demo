import { CyberpunkSelect } from '@edts/cyberpunk-ui/react'

const options = [
  { label: 'Engineering', value: 'engineering' },
  { label: 'Operations', value: 'operations' },
  { label: 'Research', value: 'research' },
]

const meta = {
  title: 'Components/Select',
  component: CyberpunkSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Labeled select input. Options can be strings or `{ label, value }` objects; selection changes emit `value-changed` with `{ value }`.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    options: { control: 'object' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onValueChanged: { action: 'value-changed' },
  },
}

export default meta

export const Options = {
  args: { label: 'Department', placeholder: 'Choose department', value: 'engineering', options },
}

export const FormStates = {
  render: () => (
    <div className="story-grid">
      <CyberpunkSelect label="Required" placeholder="Choose an option" options={options} required />
      <CyberpunkSelect label="Disabled" value="operations" options={options} disabled />
      <CyberpunkSelect label="String options" value="Green" options={['Red', 'Green', 'Blue']} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Required and disabled states, plus string option shorthand, are shown alongside object options.',
      },
    },
  },
}
