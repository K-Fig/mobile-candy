// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-113
// source=src/components/Extended/Extended.tsx
// component=List
import figma from 'figma'
const items = figma.selectedInstance.getSlot('Items')
export default { example: figma.code`<List>${items}</List>`, imports: ['import { List } from "@figmaposaurus/mobile-candy-ds"'], id: 'list' }