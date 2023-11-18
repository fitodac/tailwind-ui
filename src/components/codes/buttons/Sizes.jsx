import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/helpers'

export default function Code(props){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Small -->
<button 
  className="btn btn-sm">
  Default
</button>

<button 
  className="btn btn-sm bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  Primary
</button>

<button 
  className="btn btn-sm bg-secondary border-secondary text-white 
             dark:bg-secondary dark:border-secondary dark:text-white">
  Secondary
</button>

<button 
  className="btn btn-sm bg-alt border-alt text-white 
             dark:bg-alt dark:border-alt dark:text-white">
  Alternative
</button>


<!-- Large -->
<button 
  className="btn btn-lg">
  Default
</button>

<button 
  className="btn btn-lg bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  Primary
</button>

<button 
  className="btn btn-lg bg-secondary border-secondary text-white 
             dark:bg-secondary dark:border-secondary dark:text-white">
  Secondary
</button>

<button 
  className="btn btn-lg bg-alt border-alt text-white 
             dark:bg-alt dark:border-alt dark:text-white">
  Alternative
</button>`}
		</div>
	)

}