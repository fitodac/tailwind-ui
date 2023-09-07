export default function Code_ButtonsIconText(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn"`}</code>
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
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-primary border-primary text-white 
		dark:bg-primary dark:border-primary dark:text-white"`}</code>
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
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-secondary border-secondary text-white 
		dark:bg-secondary dark:border-secondary dark:text-white"`}</code>
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
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-alt border-alt text-white 
		dark:bg-alt dark:border-alt dark:text-white"`}</code>
		<code className={mark}>{`>`}</code>
		<code className={mark}>{`Alternative`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

	</>)
}