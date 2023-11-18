import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/helpers'

export default function Code(props){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<button 
  className="btn space-x-2 bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  <i className="ri-message-2-line"></i>
  <span>Before</span>
</button>

<button 
  className="btn space-x-2 bg-secondary border-secondary text-white 
             dark:bg-secondary dark:border-secondary dark:text-white">
  <span>After</span>
  <i className="ri-sound-module-line"></i>
</button>

<button 
  className="btn space-x-2 bg-alt border-alt text-white 
             dark:bg-alt dark:border-alt dark:text-white">
  <i className="ri-error-warning-line"></i>
  <span>Double</span>
  <i className="ri-arrow-right-line"></i>
</button>`}
		</div>
	)

}