import { useEffect, useRef } from 'react'
import { codeHighlight } from '@/components/helpers'

export default function Code(props){

	const codeBlock = useRef(null)
	useEffect(() => codeHighlight(codeBlock.current, 'html'), [])

	return (
		<div ref={codeBlock}>
{`<button 
  className="btn bg-icon border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  <svg>...</svg>
</button>

<button 
  className="btn btn-icon group bg-primary border-primary text-primary 
             bg-opacity-10 hover:bg-primary hover:text-white 
             dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 
             dark:hover:bg-primary dark:hover:text-white">
  <svg>...</svg>
</button>

<button 
  className="btn btn-icon ghost group bg-primary text-primary hover:text-white 
             dark:bg-primary dark:text-primary dark:hover:text-white">
  <svg>...</svg>
</button>

<button 
  className="btn btn-icon rounded-full bg-primary border-primary text-white 
             dark:bg-primary dark:border-primary dark:text-white">
  <svg>...</svg>
</button>`}
		</div>
	)

	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn btn-icon`}</code>
		<code className={class_list_secondary}>{` 
		bg-primary border-primary text-white 
		dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={`${mark} pl-3`}>{`<`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`>...</`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<br/>

		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn btn-icon group`}</code>
		<code className={class_list_secondary}>{` 
		bg-primary border-primary text-primary bg-opacity-10 
		hover:bg-primary hover:text-white 
		dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 
		dark:hover:bg-primary dark:hover:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={`${mark} pl-3`}>{`<`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`>...</`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<br/>

		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn btn-icon ghost group`}</code>
		<code className={class_list_secondary}>{` 
		bg-primary text-primary hover:text-white 
		dark:bg-primary dark:text-primary dark:hover:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={`${mark} pl-3`}>{`<`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`>...</`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<br/>

		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn btn-icon rounded-full`}</code>
		<code className={class_list_secondary}>{` 
		bg-primary border-primary text-white 
		dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={`${mark} pl-3`}>{`<`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`>...</`}</code>
		<code className={tag}>{`svg`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<br/>


	</>)
}