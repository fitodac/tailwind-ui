import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_RadioSizing = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Basic -->
<label class="input-radio">
  <input type="radio" name="option1" />
  <span>Option 1</span>
</label>

<label class="input-radio">
  <input type="radio" name="option1" />
  <span>Option 2</span>
</label>

<label class="input-radio">
  <input type="radio" name="option1" checked />
  <span>Option 3</span>
</label>

<label class="input-radio">
  <input type="radio" name="option1" disabled />
  <span>Disabled</span>
</label>



<!-- Large -->
<label class="input-radio input-lg">
  <input type="radio" name="option2" />
  <span>Option 1</span>
</label>

<label class="input-radio input-lg">
  <input type="radio" name="option2" />
  <span>Option 2</span>
</label>

<label class="input-radio input-lg">
  <input type="radio" name="option2" checked />
  <span>Option 3</span>
</label>

<label class="input-radio input-lg">
  <input type="radio" name="option2" disabled />
  <span>Disabled</span>
</label>`}
		</div>
	)
}