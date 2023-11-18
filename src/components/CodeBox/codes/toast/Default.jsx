import { useEffect, useRef } from 'react'
import { codeHighlight } from '../../helpers'

export const Code_ToastDefault = () => {
	const codeBlock = useRef(null)

	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
	<>
	<div id="myDiv" ref={codeBlock}>
{`<!-- Input controller -->
<input 
  type="checkbox" 
  id="toast" 
  class="hidden" 
  onChange={hideAllToasts} />

<!-- Toast component -->
<label 
  for="toast" 
  class="toast">
  <div class="font-semibold">Account updated</div>
  <div class="text-xs">Your email address has been changed</div>
</label>

<!-- Launcher button -->
<label 
  class="btn bg-primary border-primary text-white 
         dark:bg-primary dark:border-primary dark:text-white
         hover:bg-primary-700 hover:border-primary-700 hover:text-white 
         dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
  htmlFor="toast1">
  Open toast
</label>`}
	</div>
	</>)
}