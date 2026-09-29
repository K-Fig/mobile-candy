// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=183-34
// source=src/components/Extended/Extended.tsx
// component=ListItem
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('title')
const subtitle = instance.getString('subtitle')
const showIcon = instance.getBoolean('showIcon')
const iconType = instance.getEnum('Icon Type', { Text: 'Text', Image: 'Image' })
export default { example: figma.code`<ListItem title="${title}" subtitle="${subtitle}" iconType="${iconType}"${iconType === 'Image' ? figma.code` imageSrc="..."` : ''}${showIcon ? '' : figma.code` showIcon={false}`} />`, imports: ['import { ListItem } from "@figmaposaurus/mobile-candy-ds"'], id: 'list-item' }