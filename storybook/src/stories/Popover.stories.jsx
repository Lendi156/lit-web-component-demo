import { CyberpunkPopover } from '@edts/cyberpunk-ui/react'

const placements = ['top', 'bottom', 'left', 'right']

const meta = {
  title: 'Components/Popover',
  component: CyberpunkPopover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Anchored content panel. The trigger can open on click or hover, and placement controls its position relative to the trigger.',
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    placement: { control: 'select', options: placements },
    trigger: { control: 'select', options: ['click', 'hover'] },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta

export const AllPlacements = {
  render: () => (
    <div className="story-grid" style={{ padding: '5rem 2rem' }}>
      {placements.map((placement) => (
        <div className="story-example" key={placement}>
          <strong>{placement}</strong>
          <CyberpunkPopover open placement={placement} trigger="click" content={`Popover placed ${placement}.`}>
            <span slot="trigger" className="story-box">Click anchor</span>
          </CyberpunkPopover>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The four supported placements are top, bottom, left, and right. Click an anchor to toggle its panel.',
      },
    },
  },
}

export const TriggerModes = {
  render: () => (
    <div className="story-row" style={{ padding: '3rem' }}>
      <CyberpunkPopover trigger="click" placement="bottom" content="Click the anchor to toggle this popover.">
        <span slot="trigger" className="story-box">Click trigger</span>
      </CyberpunkPopover>
      <CyberpunkPopover trigger="hover" placement="bottom" content="Hover over the anchor to show this popover.">
        <span slot="trigger" className="story-box">Hover trigger</span>
      </CyberpunkPopover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Click toggles the panel; hover opens it on pointer entry and closes it on exit.',
      },
    },
  },
}
