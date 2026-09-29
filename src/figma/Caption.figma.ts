// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-157
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Caption text · small details')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Caption text · small details'
export default { example: figma.code`<Typography variant="caption">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-caption' }