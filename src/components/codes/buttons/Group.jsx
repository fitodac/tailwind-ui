import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/helpers'

export default function Code(props){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Primary -->
<div className="btn-group">
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


<!-- Secondary -->
<div className="btn-group">
  <button 
    className="btn bg-secondary border-secondary text-white 
               dark:bg-secondary dark:border-secondary dark:text-white">
    One
  </button>
  <button 
    className="btn bg-secondary border-secondary text-white 
               dark:bg-secondary dark:border-secondary dark:text-white">
    Two
  </button>
  <button 
    className="btn bg-secondary border-secondary text-white 
               dark:bg-secondary dark:border-secondary dark:text-white">
    Three
  </button>
</div>


<!-- Alternative -->
<div className="btn-group">
  <button 
    className="btn bg-alt border-alt text-white 
               dark:bg-alt dark:border-alt dark:text-white">
    One
  </button>
  <button 
    className="btn bg-alt border-alt text-white 
               dark:bg-alt dark:border-alt dark:text-white">
    Two
  </button>
  <button 
    className="btn bg-alt border-alt text-white 
               dark:bg-alt dark:border-alt dark:text-white">
    Three
  </button>
</div>`}
		</div>
	)

}