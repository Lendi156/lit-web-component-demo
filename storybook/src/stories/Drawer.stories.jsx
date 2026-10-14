import { useState } from 'react'
import { CyberpunkButton, CyberpunkDrawer } from '@edts/cyberpunk-ui/react'

const positions = ['left', 'right', 'top', 'bottom']

const meta = {
  title: 'Components/Drawer',
  component: CyberpunkDrawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dismissible off-canvas panel. It closes with Escape by default and can close when the backdrop is clicked.',
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    position: { control: 'select', options: positions },
    width: { control: 'text', description: 'Panel width for left/right positions.' },
    closeOnBackdrop: { control: 'boolean' },
    title: { control: 'text' },
    children: { control: 'text', description: 'Content rendered inside the drawer.' },
  },
}

export default meta

export const Interactive = {
  render: function DrawerExample() {
    const [open, setOpen] = useState(false)
    return (
      <div className="story-stack">
        <p className="story-note">Open the panel to inspect its content. Close it with the close button, Escape, or the backdrop.</p>
        <CyberpunkButton onClick={() => setOpen(true)}>Open drawer</CyberpunkButton>
        <CyberpunkDrawer open={open} onClose={() => setOpen(false)} title="Navigation" position="right" width="360px">
          <p>Drawer children render in this content area.</p>
        </CyberpunkDrawer>
      </div>
    )
  },
}

export const PositionPlayground = {
  args: { open: false, position: 'right', width: '360px', closeOnBackdrop: true, title: 'Drawer' },
  render: (args) => (
    <div className="story-stack">
      <p className="story-note">Use the position control to choose left, right, top, or bottom. Open the drawer by setting `open` to true.</p>
      <CyberpunkDrawer {...args}>Panel content appears here.</CyberpunkDrawer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All four supported placements are available in the position control. Width applies to side drawers; top and bottom drawers span the viewport.',
      },
    },
  },
}
