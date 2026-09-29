// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-151
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Main Header')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Main Header'
export default { example: figma.code`<Typography variant="mainHeader">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-main-header' }