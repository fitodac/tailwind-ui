import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ButtonsToggler(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<label class="btn-toggler">
  <input type="checkbox" class="peer" />
  <span 
    class="btn peer-checked:bg-opacity-70 peer-checked:border-opacity-5">
    Default
  </span>
</label>

<label class="btn-toggler">
  <input type="checkbox" class="peer" />
  <span 
    class="btn peer-checked:bg-opacity-70 peer-checked:border-opacity-5 
               bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Primary
  </span>
</label>

<label class="btn-toggler">
  <input type="checkbox" class="peer" />
  <span 
    class="btn peer-checked:bg-opacity-70 peer-checked:border-opacity-5 
               bg-secondary border-secondary text-white 
               dark:bg-secondary dark:border-secondary dark:text-white">
    Secondary
  </span>
</label>

<label class="btn-toggler">
  <input type="checkbox" class="peer" />
  <span 
    class="btn peer-checked:bg-opacity-70 peer-checked:border-opacity-5 
              bg-alt border-alt text-white 
              dark:bg-alt dark:border-alt dark:text-white">
    Alternative
  </span>
</label>`}
		</div>
	)

}