import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ButtonsIconText(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<button 
  class="btn space-x-2 bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  <i class="ri-message-2-line"></i>
  <span>Before</span>
</button>

<button 
  class="btn space-x-2 bg-secondary border-secondary text-white 
             dark:bg-secondary dark:border-secondary dark:text-white">
  <span>After</span>
  <i class="ri-sound-module-line"></i>
</button>

<button 
  class="btn space-x-2 bg-alt border-alt text-white 
             dark:bg-alt dark:border-alt dark:text-white">
  <i class="ri-error-warning-line"></i>
  <span>Double</span>
  <i class="ri-arrow-right-line"></i>
</button>`}
		</div>
	)

}