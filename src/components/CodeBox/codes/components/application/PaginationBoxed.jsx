const classNames = {
	boxed: 'border-l border-slate-200 w-10 h-10 select-none transition-all hover:bg-primary hover:text-white hover:border-primary',
	boxed_active: 'bg-slate-100 border-l border-slate-200 text-slate-500 font-medium w-10 h-10 select-none transition-all cursor-default dark:bg-slate-600 dark:text-slate-400',
}

export const Code_PaginationBoxed = (props) => {
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"border-y border-r border-slate-200 inline-flex rounded"`}</code>
		<code className={mark}>{`>`}</code>
		
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"flex overflow-x-hidden"`}</code>
		<code className={mark}>{`>`}</code>
		
		<br/>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"${classNames.boxed}"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`i`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"ri-arrow-left-s-line"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`    </`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

		{ [1,2,3,4,5].map(e => (<div key={`button-${e}`}>
			<br/>
			<br/>
			{ e === 2 && (<>
				<code>    // Button active:</code>
				<br/>
			</>)}
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`button`}</code>
			<code className={class_name}> {`class`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>
				{e === 2 
					? `"${classNames.boxed_active}"` 
					: `"${classNames.boxed}"` }
			</code>
			<code className={mark}>{`>${e}</`}</code>
			<code className={tag}>{`button`}</code>
			<code className={mark}>{`>`}</code>
		</div>))}
		

		<br/>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"${classNames.boxed}"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`      <`}</code>
		<code className={tag}>{`i`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"ri-arrow-right-s-line"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`    </`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

		<br/>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`</`}</code>
		<code className={tag}>{`div`}</code>
		<code className={mark}>{`>`}</code>
	</>)
}