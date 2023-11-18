import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_Input = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Basic -->
<div class="space-y-1">
  <label>Basic</label>
  <input type="text" placeholder="Insert text here..." />
</div>


<!-- Disabled -->
<div class="space-y-1">
  <label>Disabled</label>
  <input type="text" placeholder="Insert text here..." disabled />
</div>


<!-- Read only -->
<div class="space-y-1">
  <label>Read only</label>
  <input type="text" placeholder="Insert text here..." readonly />
</div>`}
		</div>
	)

}