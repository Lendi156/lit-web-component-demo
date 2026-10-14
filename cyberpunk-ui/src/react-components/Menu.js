import { CyberpunkMenu as MenuElement } from '../components/menu'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkMenu = createCyberpunkComponent(MenuElement, 'cyberpunk-menu', {
  onMenuItemClick: 'menu-item-click',
})
