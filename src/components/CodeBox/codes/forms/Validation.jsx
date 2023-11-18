import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_Validation = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Success -->
<div class="space-y-1">
  <input type="text" class="input-valid" value="Success!!" />
  <div class="input-helper input-helper-valid">Your request was approved</div>
</div>

<!-- Error -->
<div class="space-y-1">
  <input type="text" class="input-error" value="Sad response :(" />
  <div class="input-helper input-helper-error">We're sorry, your request wasn't approved</div>
</div>`}
		</div>
	)

}