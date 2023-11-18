import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_AvatarSquircle(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="avatar avatar-squircle w-8">
  <img src="..." alt="..." />
</div>

<div class="avatar avatar-squircle w-12">
  <img src="..." alt="..." />
</div>

<div class="avatar avatar-squircle w-16">
  <img src="..." alt="..." />
</div>

<div class="avatar avatar-squircle w-20">
  <img src="..." alt="..." />
</div>`}
		</div>
	)

}
