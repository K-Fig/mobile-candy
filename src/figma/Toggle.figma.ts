// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-94
// source=src/components/Extended/Extended.tsx
// component=Toggle
import figma from 'figma'
const state = figma.selectedInstance.getEnum('State', { Off: false, On: true })
export default { example: figma.code`<Toggle${state ? figma.code` checked` : ''} />`, imports: ['import { Toggle } from "@figmaposaurus/mobile-candy-ds"'], id: 'toggle' }