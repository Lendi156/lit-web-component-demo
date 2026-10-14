import { CyberpunkInput as InputElement } from '../components/input'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkInput = createCyberpunkComponent(InputElement, 'cyberpunk-input', {
  onValueChanged: 'value-changed',
})
