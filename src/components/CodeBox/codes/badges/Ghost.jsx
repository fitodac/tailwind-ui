import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_BadgesGhost = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<span class="badge ghost text-slate-500">Badge</span>
<span class="badge ghost bg-primary border-primary text-primary">Primary</span>
<span class="badge ghost bg-secondary border-secondary text-secondary">Secondary</span>
<span class="badge ghost bg-alt border-alt text-alt-800">Alternative</span></div>`}
		</div>
	)

}