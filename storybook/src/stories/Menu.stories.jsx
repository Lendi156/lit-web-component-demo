import { CyberpunkMenu } from '@edts/cyberpunk-ui/react'

const items = [
  { label: 'Overview', icon: '⌂', active: true },
  { label: 'Analytics', icon: '▥' },
  { label: 'Settings', icon: '⚙' },
  { label: 'Restricted', disabled: true },
]

const meta = {
  title: 'Components/Menu',
  component: CyberpunkMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Navigation menu with vertical or horizontal orientation. Each item can include an icon, active state, and disabled state. Enabled item clicks emit `menu-item-click` with `{ item }`.',
      },
    },
  },
  argTypes: {
    items: { control: 'object', description: 'Menu entries with label and optional icon/active/disabled fields.' },
    orientation: { control: 'select', options: ['vertical', 'horizontal'] },
    onMenuItemClick: { action: 'menu-item-click' },
  },
}

export default meta

export const Vertical = {
  args: { items, orientation: 'vertical' },
}

export const Horizontal = {
  args: { items, orientation: 'horizontal' },
}

export const ItemStates = {
  args: { items, orientation: 'vertical' },
  parameters: {
    docs: {
      description: {
        story: 'The first item is active, the last is disabled, and the other entries are enabled.',
      },
    },
  },
}
