import { CyberpunkButton as ButtonElement } from '../components/button'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkButton = createCyberpunkComponent(ButtonElement, 'cyberpunk-button', {
  onClick: 'click',
})
