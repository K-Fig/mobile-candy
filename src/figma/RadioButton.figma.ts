// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=22-2
// source=src/components/RadioButton/RadioButton.tsx
// component=RadioButton
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('label')
const checked = instance.getEnum('State', {
  'Unchecked': false,
  'Checked': true,
})

export default {
  example: figma.code`<RadioButton label="${label}"${checked ? figma.code` checked` : ''} />`,
  imports: ['import { RadioButton } from "@figmaposaurus/mobile-candy-ds"'],
  id: 'radio-button',
}
