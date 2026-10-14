import { CyberpunkTabs as TabsElement } from '../components/tabs'
import { createCyberpunkComponent } from './createCyberpunkComponent'

export const CyberpunkTabs = createCyberpunkComponent(TabsElement, 'cyberpunk-tabs', {
  onTabChanged: 'tab-changed',
})
