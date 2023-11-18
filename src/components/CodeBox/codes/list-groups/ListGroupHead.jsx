import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/CodeBox'

export function Code_ListGroupHead(){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<div class="list-group hoverable">
  <div class="list-group-head">Primary list</div>
  <div class="list-group-item">Luke Skywalker</div>
  <div class="list-group-item">Leia Organa</div>
  <div class="list-group-head">Secondary list</div>
  <div class="list-group-item">Han Solo</div>
  <div class="list-group-item">Darth Vader</div>
  <div class="list-group-item">Yoda</div>
  <div class="list-group-item">Chewbacca</div>
</div>


<div class="list-group striped hoverable">
  <div class="list-group-head">Primary list</div>
  <div class="list-group-item">Luke Skywalker</div>
  <div class="list-group-item">Leia Organa</div>
  <div class="list-group-head">Secondary list</div>
  <div class="list-group-item">Han Solo</div>
  <div class="list-group-item">Darth Vader</div>
  <div class="list-group-item">Yoda</div>
  <div class="list-group-item">Chewbacca</div>
</div>`}
		</div>
	)

}
