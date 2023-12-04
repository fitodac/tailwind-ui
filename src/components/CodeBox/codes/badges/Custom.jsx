
import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_BadgesCustom = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<span class="badge bg-green-600 border-green-600">Badge</span>
<span class="badge bg-yellow-600 border-yellow-600">Warning</span>
<span class="badge bg-red-700 border-red-700">Danger</span>
<span class="badge bg-sky-500 border-sky-500">Info</span></div>`}
		</div>
	)

}