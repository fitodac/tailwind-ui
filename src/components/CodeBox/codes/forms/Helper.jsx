import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_Helper = () => {
	
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="space-y-1">
  <input type="text" placeholder="Insert text here..." />
  <div class="input-helper">Please, write a cool username above</div>
</div>


<div class="space-y-1">
  <input type="text" placeholder="Insert text here..." />
  <div class="input-helper text-right">The helper text could be at right too</div>
</div>`}
		</div>
	)
}