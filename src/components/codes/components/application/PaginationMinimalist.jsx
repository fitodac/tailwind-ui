const classNames = {
	minimal: 'w-10 h-10 select-none transition-all hover:text-primary',
	minimal_active: 'text-slate-300 font-medium w-10 h-10 select-none transition-all cursor-default dark:text-slate-500'
}

export const Code_PaginationMinimalist = (props) => {
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"flex overflow-x-hidden"`}</code>
		<code className={mark}>{`>`}</code>
		
		<br/>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"${classNames.minimal}"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`i`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"ri-arrow-left-s-line"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

		{ [1,2,3,4,5].map(e => (<div key={`button-${e}`}>
			<br/>
			<br/>
			{ e === 5 && (<>
				<code>    // Button active:</code>
				<br/>
			</>)}
			<code className={mark}>{`  <`}</code>
			<code className={tag}>{`button`}</code>
			<code className={class_name}> {`class`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>
				{e === 5 
					? `"${classNames.minimal_active}"` 
					: `"${classNames.minimal}"` }
			</code>
			<code className={mark}>{`>${e}</`}</code>
			<code className={tag}>{`button`}</code>
			<code className={mark}>{`>`}</code>
		</div>))}
		

		<br/>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"${classNames.minimal}"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`i`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"ri-arrow-right-s-line"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

		<br/>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}