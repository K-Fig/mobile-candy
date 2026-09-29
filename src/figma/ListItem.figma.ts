// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-45
// source=src/components/Extended/Extended.tsx
// component=ListItem
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('title')
const subtitle = instance.getString('subtitle')
const showIcon = instance.getBoolean('showIcon')
export default { example: figma.code`<ListItem title="${title}" subtitle="${subtitle}"${showIcon ? '' : figma.code` showIcon={false}`} />`, imports: ['import { ListItem } from "@figmaposaurus/mobile-candy-ds"'], id: 'list-item' }