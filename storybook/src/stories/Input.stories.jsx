import { CyberpunkInput } from '@edts/cyberpunk-ui/react'

const types = ['text', 'email', 'password', 'number']

const meta = {
  title: 'Components/Input',
  component: CyberpunkInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Labeled native input supporting standard HTML input types and form states. Changes emit `value-changed` with `{ value }`.',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: types },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onValueChanged: { action: 'value-changed' },
  },
}

export default meta

export const InputTypes = {
  render: () => (
    <div className="story-grid">
      <CyberpunkInput type="text" label="Text" placeholder="Enter a name" />
      <CyberpunkInput type="email" label="Email" placeholder="name@example.com" />
      <CyberpunkInput type="password" label="Password" value="cyberpunk" />
      <CyberpunkInput type="number" label="Number" value="42" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common input types. The type property is passed to the underlying native input.',
      },
    },
  },
}

export const FormStates = {
  render: () => (
    <div className="story-grid">
      <CyberpunkInput label="Required field" required placeholder="Required" />
      <CyberpunkInput label="Disabled field" disabled value="Read only here" />
    </div>
  ),
}

export const Playground = {
  args: { type: 'text', label: 'Operator name', placeholder: 'Enter a name', value: '', disabled: false, required: false },
}
