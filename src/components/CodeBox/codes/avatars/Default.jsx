import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_AvatarDefault(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="avatar w-10">
  <img src="..." alt="..." />
</div>

<div class="avatar w-16">
  <img src="..." alt="..." />
</div>

<div class="avatar w-10 rounded-full">
  <img src="..." alt="..." />
</div>

<div class="avatar w-16 rounded-full">
  <img src="..." alt="..." />
</div>`}
		</div>
	)

}
