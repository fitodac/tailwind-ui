const options = [
	{
		id: 'Option 1',
		text: `In "Star Wars: The Force Awakens," the Millennium Falcon briefly...`
	},
	{
		id: 'Option 2',
		text: `In "Star Wars: The Last Jedi," the ancient Jedi texts seen...`
	},
	{
		id: 'Option 3',
		text: `In "Star Wars: Rogue One," the droid character, Chopper...`
	}
]

export default function Code(props){
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list_secondary}>{`"space-y-6"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<br/>

		{ options.map(e => (<div key={e.id}>
			<code className={mark}>{`  <`}</code>
			<code className={tag}>{`div`}</code>
			<code className={class_name}> {`class`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list_secondary}>{`"flex gap-6 items-start"`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`label`}</code>
			<code className={class_name}> {`class`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>{`"input-checkbox"`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<code className={mark}>{`      <`}</code>
			<code className={tag}>{`input`}</code>
			<code className={class_name}> {`type`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>{`"checkbox"`}</code>
			<code className={mark}>{`${'Option 3' === e ? ' checked' : ''} />`}</code>
			<br/>
			<code className={mark}>{`      <`}</code>
			<code className={tag}>{`span`}</code>
			<code className={mark}>{` />`}</code>
			<br/>
			<code className={mark}>{`    </`}</code>
			<code className={tag}>{`label`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<br/>
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`div`}</code>
			<code className={class_name}> {`class`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list_secondary}>{`"flex gap-6 items-start"`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<code className="text-slate-300 dark:text-slate-500">      {e.text}</code>
			<br/>
			<code className={mark}>{`    </`}</code>
			<code className={tag}>{`div`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<code className={mark}>{`  </`}</code>
			<code className={tag}>{`div`}</code>
			<code className={mark}>{`>`}</code>
			<br/>
			<br/>
		</div>))}
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}