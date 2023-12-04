import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_SelectValidation = () => {

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<!-- Valid -->
<select className="input-valid">
  <option selected>Select one city</option>
  <option value="new york">New York</option>
  <option value="london">London</option>
  <option value="paris">Paris</option>
  <option value="hong kong">Hong Kong</option>
  <option value="dubai">Dubai</option>
  <option value="tokyo">Tokyo</option>
</select>


<!-- Error -->
<select className="input-error">
  <option selected>Select one city</option>
  <option value="new york">New York</option>
  <option value="london">London</option>
  <option value="paris">Paris</option>
  <option value="hong kong">Hong Kong</option>
  <option value="dubai">Dubai</option>
  <option value="tokyo">Tokyo</option>
</select>`}
		</div>
	)

}