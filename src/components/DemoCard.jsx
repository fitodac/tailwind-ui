export default function DemoCard(props){
	return (
		<div 
			className="bg-white border border-slate-100 max-w-5xl mx-auto rounded-lg">
			<div className="text-slate-600 text-sm font-semibold px-6 pt-7">{ props.title }</div>
			<div className="px-6 pt-6 pb-8">
				{ props.children }
			</div>
		</div>
	)
}