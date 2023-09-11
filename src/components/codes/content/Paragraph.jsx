export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	const p = [1,2,3]

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"content"`}</code>
		<code className={mark}>{`>`}</code>
		
		{ p.map((e, i) => (<div key={i}>
			<code className={mark}>{`  <`}</code>
			<code className={tag}>{`p`}</code>
			<code className={mark}>{`>`}</code>
			<code>{`...paragraph content...`}</code>
			<code className={mark}>{`</`}</code>
			<code className={tag}>{`p`}</code>
			<code className={mark}>{`>`}</code>
		</div>)) }

		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}