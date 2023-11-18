import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_RadioToggler = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<label class="input-radio toggler">
  <input type="radio" name="option5"/>
  <span>Like</span>
</label>


<label class="input-radio toggler">
  <span>Yes</span>
  <input type="radio" name="option5"/>
  <span>No</span>
</label>


<label class="input-radio toggler">
  <input type="radio" name="option5" disabled />
  <span>Disabled</span>
</label>`}
		</div>
	)
}