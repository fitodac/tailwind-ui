export default function DemoCard(props){
	return (
		<div 
			className="bg-white border border-slate-100 max-w-5xl mx-auto rounded-xl shadow
			dark:bg-slate-700 dark:border-slate-700 dark:bg-opacity-60">
			
			<div className="flex justify-between items-center px-6 pt-5">
				<div className="text-slate-600 text-sm font-semibold dark:text-slate-300">{ props.title }</div>

				<nav>
					<button className="btn btn-icon btn-outline hover:bg-slate-200 hover:border-slate-200">
						<i className="ri-code-s-slash-line text-slate-400"></i>
					</button>
				</nav>
			</div>


			<div className="px-6 pt-6 pb-8">
				{ props.children }
			</div>

			<div className="bg-slate-700 pr-16 mx-6 mb-8 relative rounded-lg">
				<button className="btn btn-icon btn-outline right-2 top-2 absolute hover:bg-slate-200 hover:border-slate-200">
					<i className="ri-clipboard-line text-slate-400"></i>
				</button>
				
				<pre className="text-slate-500 text-sm leading-tight p-6 overflow-x-auto">
					<code className="text-white">{`<`}</code>
					<code className="text-red-400">{`div`}</code>
					<code className="text-orange-400"> {`class`}</code>
					<code className="text-blue-400">{`=`}</code>
					<code className="text-green-500">{`"bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500 bg-red-500"`}</code>
					<code className="text-white">{`/>`}</code>
				</pre>
			</div>

		</div>
	)
}