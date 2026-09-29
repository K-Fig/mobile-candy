// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-25
// source=src/components/Extended/Extended.tsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('label')
const color = instance.getEnum('Color', { Lavender: 'Lavender', Mint: 'Mint', Peach: 'Peach', Pink: 'Pink', Sky: 'Sky', Yellow: 'Yellow' })
export default { example: figma.code`<Badge label="${label}" color="${color}" />`, imports: ['import { Badge } from "@figmaposaurus/mobile-candy-ds"'], id: 'badge' }