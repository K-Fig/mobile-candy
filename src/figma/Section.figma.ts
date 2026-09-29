// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-74
// source=src/components/Extended/Extended.tsx
// component=Section
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('title')
const action = instance.getString('action')
const showAction = instance.getBoolean('showAction')
export default { example: figma.code`<Section title="${title}" action="${action}"${showAction ? '' : figma.code` showAction={false}`} />`, imports: ['import { Section } from "@figmaposaurus/mobile-candy-ds"'], id: 'section' }