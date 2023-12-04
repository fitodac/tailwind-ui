import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_BadgesBasic = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<span class="badge">Badge</span>
<span class="badge bg-primary border-primary">Primary</span>
<span class="badge bg-secondary border-secondary">Secondary</span>
<span class="badge bg-alt-400 border-alt-400 text-alt-900">Alternative</span></div>`}
		</div>
	)

}