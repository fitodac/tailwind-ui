import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_SelectCustomBasic = () => {

	const codeBlockHtml = useRef(null)
	const codeBlockJS = useRef(null)
	useEffect(() => {
		codeHighlight(codeBlockHtml.current, 'html')
		codeHighlight(codeBlockJS.current, 'js')
	}, [])

	return (
		<>
			<div ref={codeBlockHtml}>
{`<!-- Basic -->
<div class="space-y-1">
  <label>Basic</label>
  <input type="text" placeholder="Insert text here..." />
</div>

<!-- JavaScript -->`}
			</div>
			<div ref={codeBlockJS}>
{`import { useEffect } from 'react'

const input_datepicker = document.getElementById('datepicker')`}
			</div>
		</>
	)

}