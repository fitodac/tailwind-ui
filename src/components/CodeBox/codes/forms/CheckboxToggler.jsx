import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_CheckboxToggler = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<label class="input-checkbox toggler">
  <input type="checkbox"/>
  <span>Like</span>
</label>


<label class="input-checkbox toggler">
  <span>Yes</span>
  <input type="checkbox"/>
  <span>No</span>
</label>


<label class="input-checkbox toggler">
  <input type="checkbox" disabled />
  <span>Disabled</span>
</label>`}
		</div>
	)
}