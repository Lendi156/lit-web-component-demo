import { CyberpunkDrawer as DrawerElement } from '../components/drawer'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkDrawer = createCyberpunkComponent(DrawerElement, 'cyberpunk-drawer', {
  onClose: 'close',
})
