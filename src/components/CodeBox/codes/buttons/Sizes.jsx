import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ButtonsSizes(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Small -->
<button 
  class="btn btn-sm">
  Default
</button>

<button 
  class="btn btn-sm bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  Primary
</button>

<button 
  class="btn btn-sm bg-secondary border-secondary text-white 
             dark:bg-secondary dark:border-secondary dark:text-white">
  Secondary
</button>

<button 
  class="btn btn-sm bg-alt border-alt text-white 
             dark:bg-alt dark:border-alt dark:text-white">
  Alternative
</button>


<!-- Large -->
<button 
  class="btn btn-lg">
  Default
</button>

<button 
  class="btn btn-lg bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  Primary
</button>

<button 
  class="btn btn-lg bg-secondary border-secondary text-white 
             dark:bg-secondary dark:border-secondary dark:text-white">
  Secondary
</button>

<button 
  class="btn btn-lg bg-alt border-alt text-white 
             dark:bg-alt dark:border-alt dark:text-white">
  Alternative
</button>`}
		</div>
	)

}