import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ContentPre(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="content">
  <pre>
    <div>...</div>
    <code>...</code>
  </pre>
</div>`}
		</div>
	)

}