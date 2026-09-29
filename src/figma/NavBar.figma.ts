// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-53
// source=src/components/Extended/Extended.tsx
// component=NavBar
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('title')
const showBack = instance.getBoolean('showBack')
const showAction = instance.getBoolean('showAction')
export default { example: figma.code`<NavBar title="${title}"${showBack ? '' : figma.code` showBack={false}`} ${showAction ? '' : figma.code`showAction={false}`} />`, imports: ['import { NavBar } from "@figmaposaurus/mobile-candy-ds"'], id: 'nav-bar' }