export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code>{`// Basic`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"space-y-1"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>Basic</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"Insert text here..."`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>
		
		
		<code>{`// Disabled`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"space-y-1"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>Disabled</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"Insert text here..."`}</code>
		<code className={class_name}>{` disabled`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>

		
		<code>{`// Read only`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"space-y-1"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>Read only</`}</code>
		<code className={tag}>{`label`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"Insert text here..."`}</code>
		<code className={class_name}>{` readonly`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}