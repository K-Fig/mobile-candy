// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-160
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Medium Button')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Medium Button'
export default { example: figma.code`<Typography variant="buttonMd">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-button-md' }