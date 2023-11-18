import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_AvatarGroup(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="-space-x-4">
  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>

  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>

  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>

  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>
</div>


<div class="-space-x-4">
  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>

  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>

  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>

  <span class="avatar w-10 rounded-full">
    <img src="..." alt="..." />
  </span>

  <span class="bg-slate-500 avatar w-10 rounded-full">
    <span class="text-white">+99</span>
  </span>
</div>


<div class="-space-x-3">
  <span class="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>

  <span class="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>

  <span class="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>

  <span class="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>

  <span class="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
    <img src="..." alt="..." />
  </span>
</div>`}
		</div>
	)

}
