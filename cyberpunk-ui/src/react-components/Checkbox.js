import { CyberpunkCheckbox as CheckboxElement } from '../components/checkbox'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkCheckbox = createCyberpunkComponent(
  CheckboxElement,
  'cyberpunk-checkbox',
  { onValueChanged: 'value-changed' },
)
