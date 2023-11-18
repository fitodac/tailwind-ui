import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_Buttons(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<button 
  class="btn">
  Default
</button>

<button 
  class="btn bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  Primary
</button>

<button 
  class="btn bg-secondary border-secondary text-white 
             dark:bg-secondary dark:border-secondary dark:text-white">
  Secondary
</button>

<button 
  class="btn bg-alt border-alt text-white 
             dark:bg-alt dark:border-alt dark:text-white">
  Alternative
</button>`}
		</div>
	)

}
