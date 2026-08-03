// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=20-2
// source=src/components/Input/Input.tsx
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('label')
const value = instance.getString('value')
const type = instance.getEnum('Type', {
  'Text': 'Text',
  'Textarea': 'Textarea',
})
const state = instance.getEnum('State', {
  'Default': 'Default',
  'Focused': 'Focused',
  'Filled': 'Filled',
})

export default {
  example: figma.code`
    <Input
      type="${type}"
      state="${state}"
      label="${label}"
      value="${value}"
    />
  `,
  imports: ['import { Input } from "@figmaposaurus/mobile-candy-ds"'],
  id: 'input',
}
