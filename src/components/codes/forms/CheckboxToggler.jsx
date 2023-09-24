const options = ['Option 1', 'Option 2', 'Option 3']

export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`label`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-checkbox toggler"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"checkbox"`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>Like</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code className={mark}>{`<`}</code>
		<code className={tag}>{`label`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-checkbox toggler"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>Yes</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"checkbox"`}</code>
		<code className={mark}>{`/>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>No</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>


		<code className={mark}>{`<`}</code>
		<code className={tag}>{`label`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-checkbox toggler"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"checkbox"`}</code>
		<code className={mark}>{` disabled />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>Disabled</`}</code>
		<code className={tag}>{`span`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}