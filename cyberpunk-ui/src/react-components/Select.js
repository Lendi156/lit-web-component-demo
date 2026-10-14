import { CyberpunkSelect as SelectElement } from '../components/select'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkSelect = createCyberpunkComponent(SelectElement, 'cyberpunk-select', {
  onValueChanged: 'value-changed',
})
