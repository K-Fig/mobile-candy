// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=24-2
// source=src/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('label')
const checked = instance.getEnum('State', {
  'Unchecked': false,
  'Checked': true,
})

export default {
  example: figma.code`<Checkbox label="${label}"${checked ? figma.code` checked` : ''} />`,
  imports: ['import { Checkbox } from "@figmaposaurus/mobile-candy-ds"'],
  id: 'checkbox',
}
