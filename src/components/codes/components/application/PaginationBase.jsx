const classNames = {
	basic: 'w-10 h-10 select-none rounded transition-all hover:bg-primary hover:text-white',
	basicArrow: {
		btn: 'w-10 h-10 select-none rounded transition-all group hover:text-primary',
		prev: 'relative transition-all group-hover:-ml-2',
		next: 'relative transition-all group-hover:ml-2',
	},
	basic_active: `bg-slate-100 text-slate-500 font-medium w-10 h-10 select-none rounded 
				 transition-all cursor-default dark:bg-slate-600 dark:text-slate-400`,
}

export const Code_PaginationBase = (props) => {
	const {mark, tag, class_name, equal, class_list, class_list_secondary} = props.classes

	return (
	<>
		<code className={mark}>{`<`}</code>
		<code className={tag}>{`div`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"flex gap-x-1 overflow-x-hidden"`}</code>
		<code className={mark}>{`>`}</code>
		
		<br/>
		<br/>
		<code className={mark}>{`  <`}</code>
		<code className={tag}>{`button`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"${classNames.basicArrow.btn}"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`i`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"ri-arrow-left-s-line ${classNames.basicArrow.prev}"`}</code>
		<code className={mark}>{` />`}</code>
		<br/>
		<code className={mark}>{`  </`}</code>
		<code className={tag}>{`button`}</code>
		<code className={mark}>{`>`}</code>

		{ [1,2,3,4,5].map(e => (<div key={`button-${e}`}>
			<br/>
			<br/>
			{ e === 2 && (<>
				<code>  // Button active:</code>
				<br/>
			</>)}
			<code className={mark}>{`  <`}</code>
			<code className={tag}>{`button`}</code>
			<code className={class_name}> {`class`}</code>
			<code className={equal}>{`=`}</code>
			<code className={class_list}>
				{e === 2 
					? `"${classNames.basic_active}"` 
					: `"${classNames.basic}"` }
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
		<code className={class_list}>{`"${classNames.basicArrow.btn}"`}</code>
		<code className={mark}>{`>`}</code>
		<br/>
		<code className={mark}>{`    <`}</code>
		<code className={tag}>{`i`}</code>
		<code className={class_name}> {`class`}</code>
		<code className={equal}>{`=`}</code>
		<code className={class_list}>{`"ri-arrow-right-s-line ${classNames.basicArrow.next}"`}</code>
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