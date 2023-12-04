import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_BadgesRounded = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<span class="badge rounded-full">Badge</span>
<span class="badge rounded-full bg-primary border-primary">Primary</span>
<span class="badge rounded-full bg-secondary border-secondary">Secondary</span>
<span class="badgerounded-full  bg-alt-400 border-alt-400 text-alt-900">Alternative</span></div>`}
		</div>
	)

}