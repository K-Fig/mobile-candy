// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-154
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('⚡ Attention — perfect for highlights!')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : '⚡ Attention — perfect for highlights!'
export default { example: figma.code`<Typography variant="attention">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-attention' }