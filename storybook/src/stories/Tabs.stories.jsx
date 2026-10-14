import { CyberpunkTabs } from '@edts/cyberpunk-ui/react'

const tabs = [
  { value: 'overview', label: 'Overview', content: 'Summary of system status and current activity.' },
  { value: 'metrics', label: 'Metrics', content: 'Service metrics and recent performance.' },
  { value: 'disabled', label: 'Unavailable', content: 'This panel is disabled.', disabled: true },
]

const meta = {
  title: 'Components/Tabs',
  component: CyberpunkTabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabbed content switcher. Each tab has a value and label, optional content, and an optional disabled state. Selection emits `tab-changed` with `{ value }`.',
      },
    },
  },
  argTypes: {
    tabs: { control: 'object' },
    activeTab: { control: 'text', description: 'Value of the currently selected tab.' },
    onTabChanged: { action: 'tab-changed' },
  },
}

export default meta

export const TabStates = {
  args: { tabs, activeTab: 'overview' },
  parameters: {
    docs: {
      description: {
        story: 'The first tab is active, the metrics tab is selectable, and the final tab demonstrates the disabled state.',
      },
    },
  },
}

export const MetricsSelected = {
  args: { tabs, activeTab: 'metrics' },
}
