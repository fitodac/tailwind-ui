import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_SelectInputGroup = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div className="input-group">
  <select className="">
    <option selected>Select one city</option>
    <option value="new york">New York</option>
    <option value="london">London</option>
    <option value="paris">Paris</option>
    <option value="hong kong">Hong Kong</option>
    <option value="dubai">Dubai</option>
    <option value="tokyo">Tokyo</option>
  </select>
  <button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Submit</button>
</div>


<div className="input-group">
  <span>
    <svg class="w-6 fill-primary">
      ...
    </svg>
  </span>
  <select>
    <option selected>Select one city</option>
    <option value="new york">New York</option>
    <option value="london">London</option>
    <option value="paris">Paris</option>
    <option value="hong kong">Hong Kong</option>
    <option value="dubai">Dubai</option>
    <option value="tokyo">Tokyo</option>
  </select>
  <button 
    class="btn bg-primary border-primary text-white 
    dark:bg-primary dark:border-primary dark:text-white">
    Go!
  </button>
</div>`}
		</div>
	)

}