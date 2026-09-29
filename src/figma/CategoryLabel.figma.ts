// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-158
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Sizes · Category Label')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Sizes · Category Label'
export default { example: figma.code`<Typography variant="categoryLabel">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-category-label' }