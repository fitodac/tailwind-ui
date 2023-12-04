import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_BadgesOutline = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<span class="badge bg-transparent bg-opacity-60 text-slate-400 rounded-full">Badge</span>
<span class="badge bg-transparent border-primary text-primary">Primary</span>
<span class="badge bg-transparent border-secondary text-secondary">Secondary</span>
<span class="badge bg-transparent border-alt text-alt">Alternative</span></div>`}
		</div>
	)

}