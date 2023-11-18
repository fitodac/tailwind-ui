import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_Paragraph(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="content">
  <p><!-- content --></p>
  <p><!-- content --></p>
  <p><!-- content --></p>
</div>`}
		</div>
	)

}