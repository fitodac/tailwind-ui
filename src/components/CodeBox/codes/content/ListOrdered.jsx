import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ListOrdered(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="content">

  <!-- Ordered list with numeric order -->
  <ol>
    <li>...</li>
    <li>...</li>
    <li>...</li>
  </ol>


  <!-- Ordered list with uppercase letters -->
  <ol>
    <li type="A">...</li>
    <li type="A">...</li>
    <li type="A">...</li>
  </ol>


  <!-- Ordered list with lowercase letters -->
  <ol>
    <li type="a">...</li>
    <li type="a">...</li>
    <li type="a">...</li>
  </ol>


  <!-- Ordered list with uppercase roman numbers -->
  <ol>
    <li type="I">...</li>
    <li type="I">...</li>
    <li type="I">...</li>
  </ol>


  <!-- Ordered list with lowercase roman numbers -->
  <ol>
    <li type="i">...</li>
    <li type="i">...</li>
    <li type="i">...</li>
  </ol>
</div>`}
		</div>
	)

}