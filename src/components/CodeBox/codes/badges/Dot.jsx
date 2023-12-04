import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_BadgesDot = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div 
  class="bg-slate-100 border border-slate-300 w-14 h-14 rounded-md relative 
         dark:bg-slate-800 dark:border-slate-900">
  <span class="dot-badge -left-0.5"/>
</div>


<div 
  class="bg-slate-100 border border-slate-300 w-14 h-14 rounded-md relative 
         dark:bg-slate-800 dark:border-slate-900">
  <span class="dot-badge"/>
</div>`}
		</div>
	)

}