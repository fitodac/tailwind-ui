export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-group"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"Find your product..."`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`   class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-primary border-primary text-white 
		   dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>Search</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>
		<br/>
		
		
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"input-group-inset"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`input`}</code>
		<code className={class_name}> {`type`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"text"`}</code>
		<code className={class_name}>{` placeholder`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"somebody@gmail.com"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`button`}</code>
		<br/>
		<code className={class_name}> {`   class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-primary border-primary text-white 
		   dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>Ok</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={class_name}> {`   class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"btn`}</code>
		<code className={class_list_secondary}>{` bg-primary border-primary text-white 
		   dark:bg-primary dark:border-primary dark:text-white"`}</code>
		<code className={mark}>{`>Cancel</`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}