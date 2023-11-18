import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_CheckboxVerticalMuchText = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="space-y-6">

  <div class="flex gap-6 items-start">
    <label class="input-checkbox">
      <input type="checkbox" />
      <span />
    </label>

    <div class="flex gap-6 items-start">
      In "Star Wars: The Force Awakens," the Millennium Falcon briefly...
    </div>
  </div>

  <div class="flex gap-6 items-start">
    <label class="input-checkbox">
      <input type="checkbox" />
      <span />
    </label>

    <div class="flex gap-6 items-start">
      In "Star Wars: The Last Jedi," the ancient Jedi texts seen...
    </div>
  </div>

  <div class="flex gap-6 items-start">
    <label class="input-checkbox">
      <input type="checkbox" />
      <span />
    </label>

    <div class="flex gap-6 items-start">
      In "Star Wars: Rogue One," the droid character, Chopper...
    </div>
  </div>

</div>`}
		</div>
	)
}