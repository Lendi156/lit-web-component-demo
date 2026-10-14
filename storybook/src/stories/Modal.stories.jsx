import { useState } from 'react'
import { CyberpunkButton, CyberpunkModal } from '@edts/cyberpunk-ui/react'

const meta = {
  title: 'Components/Modal',
  component: CyberpunkModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dialog surface that can be controlled with the open property. It supports Escape and optional backdrop dismissal.',
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    closeOnBackdrop: { control: 'boolean' },
    noPadding: { control: 'boolean' },
    children: { control: 'text', description: 'Dialog body content.' },
  },
}

export default meta

export const Interactive = {
  render: function ModalExample() {
    const [open, setOpen] = useState(false)
    return (
      <div className="story-stack">
        <p className="story-note">Open the dialog and close with its close button, Escape, or the backdrop.</p>
        <CyberpunkButton onClick={() => setOpen(true)}>Open modal</CyberpunkButton>
        <CyberpunkModal open={open} onClose={() => setOpen(false)} title="Confirm operation" closeOnBackdrop>
          <p>Review the operation before continuing.</p>
          <div className="story-actions">
            <CyberpunkButton variant="primary" onClick={() => setOpen(false)}>Confirm</CyberpunkButton>
            <CyberpunkButton variant="secondary" onClick={() => setOpen(false)}>Cancel</CyberpunkButton>
          </div>
        </CyberpunkModal>
      </div>
    )
  },
}

export const NoPadding = {
  render: () => (
    <div className="story-stack">
      <p className="story-note">The no-padding property removes the default body spacing, useful for edge-to-edge content.</p>
      <CyberpunkModal open title="Unpadded content" noPadding>
        <div className="story-box">Content uses its own padding.</div>
      </CyberpunkModal>
    </div>
  ),
}
