import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/helpers'

export default function Code(props){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Small -->
<div className="btn-group-sm">
  <button 
    className="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    One
  </button>
  <button 
    className="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Two
  </button>
  <button 
    className="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Three
  </button>
</div>


<!-- Large -->
<div className="btn-group-lg">
  <button 
    className="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    One
  </button>
  <button 
    className="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Two
  </button>
  <button 
    className="btn bg-primary border-primary text-white 
               dark:bg-primary dark:border-primary dark:text-white">
    Three
  </button>
</div>`}
		</div>
	)

}