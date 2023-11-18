import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ButtonsGroup(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Primary -->
<div class="btn-group">
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


<!-- Secondary -->
<div class="btn-group">
  <button 
    class="btn bg-secondary border-secondary text-white 
               dark:bg-secondary dark:border-secondary dark:text-white">
    One
  </button>
  <button 
    class="btn bg-secondary border-secondary text-white 
               dark:bg-secondary dark:border-secondary dark:text-white">
    Two
  </button>
  <button 
    class="btn bg-secondary border-secondary text-white 
               dark:bg-secondary dark:border-secondary dark:text-white">
    Three
  </button>
</div>


<!-- Alternative -->
<div class="btn-group">
  <button 
    class="btn bg-alt border-alt text-white 
               dark:bg-alt dark:border-alt dark:text-white">
    One
  </button>
  <button 
    class="btn bg-alt border-alt text-white 
               dark:bg-alt dark:border-alt dark:text-white">
    Two
  </button>
  <button 
    class="btn bg-alt border-alt text-white 
               dark:bg-alt dark:border-alt dark:text-white">
    Three
  </button>
</div>`}
		</div>
	)

}