import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ButtonsGroupSize(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Small -->
<div class="btn-group-sm">
  <button 
    class="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    One
  </button>
  <button 
    class="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Two
  </button>
  <button 
    class="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Three
  </button>
</div>


<!-- Large -->
<div class="btn-group-lg">
  <button 
    class="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    One
  </button>
  <button 
    class="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Two
  </button>
  <button 
    class="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Three
  </button>
</div>`}
		</div>
	)

}