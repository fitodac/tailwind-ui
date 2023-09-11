export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	const li = [1,2,3]

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"content"`}</code>
		<code className={mark}>{`>`}</code>


		<br/>
		<br/>
		<code>{`  // Ordered list with numeric order`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		
		{ li.map((e, i) => (<>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
			<code>{`...`}</code>
			<code className={mark}>{`</`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
		</>)) }

		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>



		<code>{`  // Ordered list with uppercase letters`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		
		{ li.map((e, i) => (<>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`li`}</code>
			<code className={class_name}> {`type`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>{`"A"`}</code>
			<code className={mark}>{`>`}</code>
			<code>{`...`}</code>
			<code className={mark}>{`</`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
		</>)) }

		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code>{`  // Ordered list with lowercase letters`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		
		{ li.map((e, i) => (<>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`li`}</code>
			<code className={class_name}> {`type`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>{`"a"`}</code>
			<code className={mark}>{`>`}</code>
			<code>{`...`}</code>
			<code className={mark}>{`</`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
		</>)) }

		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code>{`  // Ordered list with uppercase roman numbers`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		
		{ li.map((e, i) => (<>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`li`}</code>
			<code className={class_name}> {`type`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>{`"I"`}</code>
			<code className={mark}>{`>`}</code>
			<code>{`...`}</code>
			<code className={mark}>{`</`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
		</>)) }

		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code>{`  // Ordered list with lowercase roman numbers`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>
		
		{ li.map((e, i) => (<>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`li`}</code>
			<code className={class_name}> {`type`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>{`"i"`}</code>
			<code className={mark}>{`>`}</code>
			<code>{`...`}</code>
			<code className={mark}>{`</`}</code>
			<code className={tag}>{`li`}</code>
			<code className={mark}>{`>`}</code>
		</>)) }

		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`ol`}</code>
		<code className={mark}>{`>`}</code>


		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}