import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ButtonsOutline(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<button 
  class="btn bg-opacity-20 hover:bg-opacity-100 
             dark:bg-opacity-20 dark:hover:bg-opacity-100">
  Default
</button>

<button 
  class="btn bg-primary border-primary text-primary bg-opacity-10 hover:bg-primary hover:text-white 
             dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 dark:hover:bg-primary dark:hover:text-white">
  Primary
</button>

<button 
  class="btn bg-secondary border-secondary text-secondary bg-opacity-10 hover:bg-secondary hover:text-white 
             dark:bg-secondary dark:border-secondary dark:text-secondary dark:bg-opacity-10 dark:hover:bg-secondary dark:hover:text-white">
  Secondary
</button>

<button 
  class="btn bg-alt border-alt text-alt bg-opacity-10 hover:bg-alt hover:text-white 
             dark:bg-alt dark:border-alt dark:text-alt dark:bg-opacity-10 dark:hover:bg-alt dark:hover:text-white">
  Alternative
</button>`}
		</div>
	)

}