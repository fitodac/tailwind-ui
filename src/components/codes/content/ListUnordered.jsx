export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	const li = [
		'The Dark Knight (2008)',
		'Inception (2010)',
		'The Social Network (2010)',
		'Parasite (2019)',
		'Mad Max: Fury Road (2015)',
	]

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
		<code className={tag}>{`ul`}</code>
		<code className={mark}>{`>`}</code>
		
		{ li.map((e, i) => (<div key={i}>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
			<code>{e}</code>
			<code className={mark}>{`</`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
		</div>)) }

		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`ul`}</code>
		<code className={mark}>{`>`}</code>


		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}