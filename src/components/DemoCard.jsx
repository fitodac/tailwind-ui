export default function DemoCard(props){
	return (
		<div 
			className="bg-white border border-slate-100 max-w-5xl mx-auto rounded-xl shadow
			dark:bg-slate-700 dark:border-slate-700">
			<div 
				className="text-slate-600 text-sm font-semibold px-6 pt-7
				dark:text-slate-300">
					{ props.title }
				</div>
			<div className="px-6 pt-6 pb-8">
				{ props.children }
			</div>
		</div>
	)
}