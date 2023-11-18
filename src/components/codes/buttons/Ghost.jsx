import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/helpers'

export default function Code(props){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<button 
  className="btn ghost">
  Default
</button>

<button 
  className="btn ghost bg-primary text-primary hover:text-white 
             dark:bg-primary dark:text-primary dark:hover:text-white">
  Primary
</button>

<button 
  className="btn ghost bg-secondary text-secondary hover:text-white 
             dark:bg-secondary dark:text-secondary dark:hover:text-white">
  Secondary
</button>

<button 
  className="btn ghost bg-alt text-alt-600 hover:text-white 
             dark:bg-alt dark:bg-alt dark:text-alt-600 dark:hover:text-white">
  Alternative
</button>`}
		</div>
	)

}