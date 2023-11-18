import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'


export const Code_InputAddons = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Icon / input / button -->
<div class="input-group">
  <span>
    <svg
      class="w-7 fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 24 24">
      <path fill="none" d="..." />
      <path d="..." />
    </svg>
  </span>
  <input type="text" placeholder="Instagram account" />
  <button
    class="btn bg-primary border-primary text-white 
		   dark:bg-primary dark:border-primary dark:text-white">
    Search
  </button>
</div>


<!-- Input / icon -->
<div class="input-group">
  <input type="text" placeholder="email address" />
  <span>
    <svg
      class="w-7 fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 24 24"
      <path fill="none" d="..." />
      <path d="..." />
    </svg>
  </span>
</div>


<!-- Input / icon / input -->
<div class="input-group">
  <input type="text" placeholder="email address" />
  <span>
    <svg
      class="w-7 fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 24 24">
      <path fill="none" d="..." />
      <path d="..." />
    </svg>
  </span>
  <input type="text" placeholder="company name" />
  <span>.com</span>
</div>


<!-- Group inset with icon -->
<div class="input-group-inset">
  <input type="text" placeholder="Search for happiness" />
  <span>
    <svg
      class="w-7 fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 24 24">
      <path fill="none" d="..." />
      <path d="..." />
    </svg>
  </span>
  <input type="text" placeholder="company name" />
  <span>.com</span>
</div>


<!-- Group inset, icon and button -->
<div class="input-group-inset">
  <span>
    <svg
      class="w-7 fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 24 24">
      <path fill="none" d="..." />
      <path d="..." />
    </svg>
  </span>
  <input type="text" placeholder="BTC to USD" />
  <button
    class="btn bg-primary border-primary text-white 
		   dark:bg-primary dark:border-primary dark:text-white">
    Calculate
  </button>
</div>`}
		</div>
	)

}