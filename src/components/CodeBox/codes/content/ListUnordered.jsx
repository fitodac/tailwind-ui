import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ListUnordered(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="content">
  <ul>
    <li>The Dark Knight (2008)</li>
    <li>Inception (2010)</li>
    <li>The Social Network (2010)</li>
    <li>Parasite (2019)</li>
    <li>Mad Max: Fury Road (2015)</li>
  </ul>
</div>`}
		</div>
	)

}