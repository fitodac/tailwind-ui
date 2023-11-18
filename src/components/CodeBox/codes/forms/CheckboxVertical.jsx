import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_CheckboxVertical = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="space-y-4">

  <div>
    <label class="input-checkbox">
      <input type="checkbox" />
      <span>Option 1</span>
    </label>
  </div>

  <div>
    <label class="input-checkbox">
      <input type="checkbox" />
      <span>Option 2</span>
    </label>
  </div>

  <div>
    <label class="input-checkbox">
      <input type="checkbox" checked />
      <span>Option 3</span>
    </label>
  </div>

  <div>
    <label class="input-checkbox">
      <input type="checkbox" disabled />
      <span>Disabled</span>
    </label>
  </div>

</div>`}
		</div>
	)
}