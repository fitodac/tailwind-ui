export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn ghost"`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Default`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>

		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn ghost`}</code>
		<code className={class_list_secondary}>{` bg-primary text-primary hover:text-white 
		dark:bg-primary dark:text-primary dark:hover:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Primary`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>

		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn ghost`}</code>
		<code className={class_list_secondary}>{` bg-secondary text-secondary hover:text-white 
		dark:bg-secondary dark:text-secondary dark:hover:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Secondary`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>

		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn ghost`}</code>
		<code className={class_list_secondary}>{` bg-alt text-alt-600 hover:text-white 
		dark:bg-alt dark:bg-alt dark:text-alt-600 dark:hover:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Alternative`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

	</>)
}