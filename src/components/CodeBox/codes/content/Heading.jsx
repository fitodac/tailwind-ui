import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_Heading(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="contact">
  <h1>...</h1>
  <h2>...</h2>
  <h3>...</h3>
  <h4>...</h4>
  <h5>...</h5>
</div>`}
		</div>
	)

}