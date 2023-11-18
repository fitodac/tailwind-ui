import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_AvatarGroupActions(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div className="-space-x-4 hover:space-x-1">
  <span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>

  <span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>

  <span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>

  <span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>
</div>


<span className="avatar w-14 ring-4 ring-transparent rounded-full cursor-pointer hover:ring-primary">
  <img src="..." alt="..." />
</span>`}
		</div>
	)

}
