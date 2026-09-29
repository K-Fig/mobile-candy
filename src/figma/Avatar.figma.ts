// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=171-11
// source=src/components/Extended/Extended.tsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance
const initials = instance.getString('initials')
const size = instance.getEnum('Size', { Small: 'Small', Medium: 'Medium', Large: 'Large' })
export default { example: figma.code`<Avatar initials="${initials}" size="${size}" />`, imports: ['import { Avatar } from "@figmaposaurus/mobile-candy-ds"'], id: 'avatar' }