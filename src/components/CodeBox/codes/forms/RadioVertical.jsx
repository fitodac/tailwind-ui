import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export const Code_RadioVertical = () => {
	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="space-y-4">

  <div>
    <label class="input-radio">
      <input type="radio" name="option3" />
      <span>Option 1</span>
    </label>
  </div>

  <div>
    <label class="input-radio">
      <input type="radio" name="option3" />
      <span>Option 2</span>
    </label>
  </div>

  <div>
    <label class="input-radio">
      <input type="radio" name="option3" checked />
      <span>Option 3</span>
    </label>
  </div>

  <div>
    <label class="input-radio">
      <input type="radio" name="option3" disabled />
      <span>Disabled</span>
    </label>
  </div>

</div>`}
		</div>
	)
}