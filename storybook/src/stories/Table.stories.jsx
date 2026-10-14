import { CyberpunkTable } from '@edts/cyberpunk-ui/react'

const columns = [
  { key: 'service', label: 'Service' },
  { key: 'status', label: 'Status' },
  { key: 'uptime', label: 'Uptime' },
]

const rows = [
  { service: 'Gateway', status: 'Operational', uptime: '99.98%' },
  { service: 'Telemetry', status: 'Monitoring', uptime: '99.91%' },
  { service: 'Archive', status: 'Operational', uptime: '99.99%' },
]

const meta = {
  title: 'Components/Table',
  component: CyberpunkTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Data table built from column descriptors and row objects. Each column uses a key and optional label. The striped property toggles alternating row shading.',
      },
    },
  },
  argTypes: {
    columns: { control: 'object' },
    rows: { control: 'object' },
    striped: { control: 'boolean' },
  },
}

export default meta

export const Default = {
  args: { columns, rows, striped: false },
}

export const Striped = {
  args: { columns, rows, striped: true },
  parameters: {
    docs: {
      description: {
        story: 'Alternating row shading helps track across wider datasets.',
      },
    },
  },
}
