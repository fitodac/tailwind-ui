import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ListGroupLink(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="list-group hoverable">
  <a class="list-group-item" href="...">Luke Skywalker</a>
	<a class="list-group-item" href="...">Leia Organa</a>
	<a class="list-group-item" href="...">Han Solo</a>
	<a class="list-group-item" href="...">Darth Vader</a>
	<a class="list-group-item" href="...">Yoda</a>
	<a class="list-group-item" href="...">Chewbacca</a>
</div>


<div class="list-group striped hoverable">
  <a class="list-group-item" href="...">Luke Skywalker</a>
	<a class="list-group-item" href="...">Leia Organa</a>
	<a class="list-group-item" href="...">Han Solo</a>
	<a class="list-group-item" href="...">Darth Vader</a>
	<a class="list-group-item" href="...">Yoda</a>
	<a class="list-group-item" href="...">Chewbacca</a>
</div>`}
		</div>
	)

}
