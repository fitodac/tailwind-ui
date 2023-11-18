import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ButtonsIconized(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<button 
  class="btn bg-icon border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  <svg>...</svg>
</button>

<button 
  class="btn btn-icon group bg-primary border-primary text-primary 
             bg-opacity-10 hover:bg-primary hover:text-white 
             dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 
             dark:hover:bg-primary dark:hover:text-white">
  <svg>...</svg>
</button>

<button 
  class="btn btn-icon ghost group bg-primary text-primary hover:text-white 
             dark:bg-primary dark:text-primary dark:hover:text-white">
  <svg>...</svg>
</button>

<button 
  class="btn btn-icon rounded-full bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  <svg>...</svg>
</button>`}
		</div>
	)
}