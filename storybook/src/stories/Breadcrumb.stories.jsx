import { CyberpunkBreadcrumb } from '@edts/cyberpunk-ui/react'

const items = [
  { label: 'Dashboard', href: '#' },
  { label: 'Operations', href: '#' },
  { label: 'Systems' },
]

const meta = {
  title: 'Components/Breadcrumb',
  component: CyberpunkBreadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Navigation trail for showing the current page location. Provide items with a label and optional href; the final item without an href is displayed as the current page.',
      },
    },
  },
  argTypes: {
    items: { control: 'object', description: 'Ordered breadcrumb entries: { label, href? }.' },
    separator: { control: 'text', description: 'Text separating breadcrumb items.' },
  },
}

export default meta

export const DefaultTrail = {
  args: { items, separator: '/' },
}

export const AlternateSeparator = {
  args: { items, separator: '›' },
  parameters: {
    docs: {
      description: {
        story: 'Customize the visual separator without changing the navigation items.',
      },
    },
  },
}
