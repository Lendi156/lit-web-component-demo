import { CyberpunkModal as ModalElement } from '../components/modal'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkModal = createCyberpunkComponent(ModalElement, 'cyberpunk-modal', {
  onClose: 'close',
})
