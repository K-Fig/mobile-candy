// url=https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy?node-id=18-20
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('label')
const showIcon = instance.getBoolean('showIcon')
const size = instance.getEnum('Size', {
  'Small': 'Small',
  'Medium': 'Medium',
  'Large': 'Large',
})
const color = instance.getEnum('Color', {
  'Lavender': 'Lavender',
  'Mint': 'Mint',
  'Peach': 'Peach',
})

export default {
  example: figma.code`
    <Button
      size="${size}"
      color="${color}"
      ${showIcon ? 'showIcon' : ''}
    >
      ${label}
    </Button>
  `,
  imports: ['import { Button } from "@figmaposaurus/mobile-candy-ds"'],
  id: 'button',
}
