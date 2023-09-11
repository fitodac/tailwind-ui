export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn bg-opacity-20 hover:bg-opacity-100 
			   dark:bg-opacity-20 dark:hover:bg-opacity-100"`}</code>
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
		<code className={class_list}>{`"btn bg-opacity-10 hover:bg-opacity-100 
		dark:bg-opacity-10 dark:hover:bg-opacity-100`}</code>
		<code className={class_list_secondary}>{` 
		bg-primary border-primary text-primary 
		dark:bg-primary dark:border-primary dark:text-primary 
		dark:hover:bg-primary dark:hover:text-white"`}</code>
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
		<code className={class_list}>{`"btn bg-opacity-10 hover:bg-opacity-100 
		dark:bg-opacity-10 dark:hover:bg-opacity-100`}</code>
		<code className={class_list_secondary}>{` 
		bg-secondary border-secondary text-secondary 
		hover:bg-secondary hover:text-white 
		dark:bg-secondary dark:border-secondary dark:text-secondary 
		dark:hover:bg-secondary dark:hover:text-white"`}</code>
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
		<code className={class_list}>{`"btn bg-opacity-10 hover:bg-opacity-100 
		dark:bg-opacity-10 dark:hover:bg-opacity-100`}</code>
		<code className={class_list_secondary}>{` 
		bg-alt border-alt text-alt hover:bg-alt hover:text-white 
		dark:bg-alt dark:border-alt dark:text-alt 
		dark:hover:bg-alt dark:hover:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Alternative`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

	</>)
}