// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-104
// source=src/components/Extended/Extended.tsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('title')
const description = instance.getString('description')
const showImage = instance.getBoolean('showImage')
const showButton = instance.getEnum('Show Button', { False: false, True: true })
export default { example: figma.code`<Card title="${title}" description="${description}"${showImage ? figma.code` showImage` : figma.code` showImage={false}`}${showButton ? figma.code` showButton` : ''} />`, imports: ['import { Card } from "@figmaposaurus/mobile-candy-ds"'], id: 'card' }