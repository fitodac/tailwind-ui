const options = ['One', 'Two', 'Three']

export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn-group btn-group-primary"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>

		{ options.map(e => (<div key={e}>
			<code className={mark}>{`  <`}</code>
			<code className={tag}>{`label`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`input`}</code>
			<code className={class_name}> {`type`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>{`"checkbox"`}</code>
			<code className={mark}>{`${'Option 3' === e ? ' checked' : ''} />`}</code>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`span`}</code>
			<code className={mark}>{`>${e}</`}</code>
			<code className={tag}>{`span`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<code className={mark}>{`  </`}</code>
			<code className={tag}>{`label`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<br/>
		</div>))}

		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}