const classNames = {
	rounded: 'w-10 h-10 select-none rounded-full transition-all hover:bg-primary hover:text-white',
	rounded_active: 'bg-slate-100 text-slate-500 font-medium w-10 h-10 select-none rounded-full transition-all cursor-default dark:bg-slate-600 dark:text-slate-400',
}

export const Code_PaginationRounded = (props) => {
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"border border-slate-200 p-1.5 inline-flex rounded-full"`}</code>
		<code className={mark}>{`>`}</code>
		
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"flex gap-x-1 overflow-x-hidden"`}</code>
		<code className={mark}>{`>`}</code>
		
		<br/>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"${classNames.rounded}"`}</code>
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
			{ e === 4 && (<>
				<code>    // Button active:</code>
				<br/>
			</>)}
			<code className={mark}>{`    <`}</code>
			<code className={tag}>{`button`}</code>
			<code className={class_name}> {`class`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>
				{e === 4 
					? `"${classNames.rounded_active}"` 
					: `"${classNames.rounded}"` }
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
		<code className={class_list}>{`"${classNames.rounded}"`}</code>
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