import { CyberpunkDropdown } from '@edts/cyberpunk-ui/react'

const items = [
  { label: 'Open report', icon: '↗' },
  { label: 'Duplicate', icon: '⧉' },
  { label: 'Archive', icon: '⌑' },
  { label: 'Unavailable action', disabled: true },
]

const meta = {
  title: 'Components/Dropdown',
  component: CyberpunkDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Trigger button with an action menu. Click the trigger to toggle the menu; clicking outside closes it. Selecting an item emits `dropdown-item-click` with `{ item }`.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    items: { control: 'object', description: 'Menu entries with label and optional icon/disabled values.' },
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onDropdownItemClick: { action: 'dropdown-item-click' },
  },
}

export default meta

export const Actions = {
  args: { label: 'More actions', items, open: false, disabled: false },
}

export const OpenMenu = {
  args: { label: 'More actions', items, open: true, disabled: false },
  parameters: {
    docs: {
      description: {
        story: 'Shows enabled actions and a disabled item. Select an item to emit the item-click event and close the menu.',
      },
    },
  },
}
