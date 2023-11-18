import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_CheckboxSizing = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Basic -->
<label class="input-checkbox">
  <input type="checkbox" />
  <span>Option 1</span>
</label>

<label class="input-checkbox">
  <input type="checkbox" />
  <span>Option 2</span>
</label>

<label class="input-checkbox">
  <input type="checkbox" checked />
  <span>Option 3</span>
</label>

<label class="input-checkbox">
  <input type="checkbox" disabled />
  <span>Disabled</span>
</label>



<!-- Large -->
<label class="input-checkbox input-lg">
  <input type="checkbox" />
  <span>Option 1</span>
</label>

<label class="input-checkbox input-lg">
  <input type="checkbox" />
  <span>Option 2</span>
</label>

<label class="input-checkbox input-lg">
  <input type="checkbox" checked />
  <span>Option 3</span>
</label>

<label class="input-checkbox input-lg">
  <input type="checkbox" disabled />
  <span>Disabled</span>
</label>`}
		</div>
	)
}