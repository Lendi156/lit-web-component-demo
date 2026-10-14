import { CyberpunkProgress } from '@edts/cyberpunk-ui/react'

const meta = {
  title: 'Components/Progress',
  component: CyberpunkProgress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Progress indicator supporting determinate bars, indeterminate loading, and circular progress.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['bar', 'loading', 'circular'] },
    value: { control: { type: 'number', min: 0 } },
    max: { control: { type: 'number', min: 1 } },
    label: { control: 'text' },
  },
}

export default meta

export const AllVariants = {
  render: () => (
    <div className="story-stack">
      <div className="story-example">
        <strong>bar — determinate</strong>
        <CyberpunkProgress variant="bar" label="Network health" value={76} max={100} />
        <p className="story-note">Use a known value for measurable progress.</p>
      </div>
      <div className="story-example">
        <strong>loading — indeterminate</strong>
        <CyberpunkProgress variant="loading" label="Synchronizing" />
        <p className="story-note">Use when work is underway but its completion time is unknown.</p>
      </div>
      <div className="story-example">
        <strong>circular</strong>
        <CyberpunkProgress variant="circular" label="Quality score" value={64} max={100} />
        <p className="story-note">A compact radial display for a percentage or score.</p>
      </div>
    </div>
  ),
}

export const Playground = {
  args: { variant: 'bar', value: 64, max: 100, label: 'Upload progress' },
}
