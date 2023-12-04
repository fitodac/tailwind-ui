import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_Select = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Basic -->
<select>
  <option selected>Select one city</option>
  <option value="new york">New York</option>
  <option value="london">London</option>
  <option value="paris">Paris</option>
  <option value="hong kong">Hong Kong</option>
  <option value="dubai">Dubai</option>
  <option value="tokyo">Tokyo</option>
</select>


<!-- Rouded -->
<select class="rounded-full">
  <option selected>Select one city</option>
  <option value="new york">New York</option>
  <option value="london">London</option>
  <option value="paris">Paris</option>
  <option value="hong kong">Hong Kong</option>
  <option value="dubai">Dubai</option>
  <option value="tokyo">Tokyo</option>
</select>


<!-- Disabled -->
<select disabled>
  <option selected>Select one city</option>
</select>`}
		</div>
	)

}