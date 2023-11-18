import { useEffect, useRef } from 'react'
import { codeHighlight } from '../../helpers'

export const Code_ToastCloseable = () => {
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
<div class="toast">
  <div class="flex justify-between">
    <div class="font-semibold">User invited</div>
    <label htmlFor="toast2" class="btn btn-link">
      <i class="ri-close-line"></i>
    </label>
  </div>

  <div class="text-xs mt-2">You're invited John Doe to your team</div>
</div>

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