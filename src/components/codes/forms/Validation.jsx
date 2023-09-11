export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code>{`// Success`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"space-y-1"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-valid"`}</code>
		<code className={class_name}>{` value`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"Success!!"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-helper input-helper-valid"`}</code>
		<code className={mark}>{`>`}</code>
		<code>{`Your request was approved`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>
		
		
		<code>{`// Error`}</code>
		<br/>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"space-y-1"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-error"`}</code>
		<code className={class_name}>{` value`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"Sad response :("`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-helper input-helper-error"`}</code>
		<code className={mark}>{`>`}</code>
		<code>{`We're sorry, your request wasn't approved`}</code>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}