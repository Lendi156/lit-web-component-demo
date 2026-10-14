import { CyberpunkTextArea as TextAreaElement } from '../components/textArea'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkTextArea = createCyberpunkComponent(
  TextAreaElement,
  'cyberpunk-textarea',
  { onValueChanged: 'value-changed' },
)
