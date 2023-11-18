import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_RadioCheckboxStyle = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<label class="input-radio check">
  <input type="radio" name="option6" />
  <span>Option 1</span>
</label>

<label class="input-radio check">
  <input type="radio" name="option6" />
  <span>Option 2</span>
</label>

<label class="input-radio">
  <input type="radio" name="option6" disabled />
  <span>Option 3</span>
</label>`}
		</div>
	)
}