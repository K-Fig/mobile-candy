// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-159
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Small Button')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Small Button'
export default { example: figma.code`<Typography variant="buttonSm">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-button-sm' }