// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-81
// source=src/components/Extended/Extended.tsx
// component=Footer
import figma from 'figma'
const copyright = figma.selectedInstance.getString('copyright')
export default { example: figma.code`<Footer copyright="${copyright}" />`, imports: ['import { Footer } from "@figmaposaurus/mobile-candy-ds"'], id: 'footer' }