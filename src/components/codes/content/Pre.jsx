export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"content"`}</code>
		<code className={mark}>{`>`}</code>
		
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`pre`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code>{`    <div>...</div>`}</code>
		<br/>
		<code>{`    <code>...</code>`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`pre`}</code>
		<code className={mark}>{`>`}</code>

		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}