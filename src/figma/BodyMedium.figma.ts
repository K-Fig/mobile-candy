// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-156
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Medium body text for emphasis.')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Medium body text for emphasis.'
export default { example: figma.code`<Typography variant="bodyMedium">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-body-medium' }