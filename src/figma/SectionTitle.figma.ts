// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=27-153
// source=src/components/Extended/Extended.tsx
// component=Typography
import figma from 'figma'
const textLayer = figma.selectedInstance.findText('Section Title')
const text = textLayer.type === 'TEXT' ? textLayer.textContent : 'Section Title'
export default { example: figma.code`<Typography variant="sectionTitle">${text}</Typography>`, imports: ['import { Typography } from "@figmaposaurus/mobile-candy-ds"'], id: 'typography-section-title' }