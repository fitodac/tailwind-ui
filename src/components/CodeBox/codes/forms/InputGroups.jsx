import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_InputGroups = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="input-group">
  <input type="text" placeholder="Find your product..." />
  <button
    class="btn bg-primary border-primary text-white 
           dark:bg-primary dark:border-primary dark:text-white">
    Search
  </button>
</div>


<div class="input-group-inset">
  <input type="text" placeholder="somebody@gmail.com" />
  <button
    class="btn bg-primary border-primary text-white 
           dark:bg-primary dark:border-primary dark:text-white">
    Ok
  </button>
  <button
    class="btn bg-primary border-primary text-white 
           dark:bg-primary dark:border-primary dark:text-white">
    Cancel
  </button>
</div>`}
		</div>
	)

}