import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_BadgesNotification = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="relative">
  <button
    class="btn bg-primary border-primary text-white 
          dark:bg-primary dark:border-primary dark:text-white"> 
    Action required
  </button>
  <div class="dot-badge animate-pulse"></div>
</div>


<div class="flex items-center gap-2">
  <span class="text-red-600">You have many messages</span>
  <span class="badge bg-red-600 border-red-600 rounded-full animate-pulse">+99</span>
</div>`}
		</div>
	)

}