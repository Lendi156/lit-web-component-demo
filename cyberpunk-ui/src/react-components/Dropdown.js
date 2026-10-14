import { CyberpunkDropdown as DropdownElement } from '../components/dropdown'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkDropdown = createCyberpunkComponent(
  DropdownElement,
  'cyberpunk-dropdown',
  { onDropdownItemClick: 'dropdown-item-click' },
)
