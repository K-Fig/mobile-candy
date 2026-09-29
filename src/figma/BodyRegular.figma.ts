// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-155
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Body text for comfortable reading on mobile screens.')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Body text for comfortable reading on mobile screens.'
export default { example: figma.code`<Typography variant="bodyRegular">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-body-regular' }