import Link from 'next/link'

export default function PageHeader(props){

	return (
	<div className="py-8">
		<h2 className="text-2xl font-medium select-none md:text-3xl">{props.title}</h2>

		{/* breadcrumbs */}
		<div className="text-slate-400 mt-2">
			<ul className="text-sm font-light flex items-center">
				<li>
					<Link href="/" className="hover:text-primary">
						<i className="ri-home-5-line text-lg"></i>
					</Link>
				</li>
				{ props.breadcrumbs ? 
					props.breadcrumbs.map((e,i) => (
						<li 
							key={`page-header-item-${i}`}
							className="select-none before:content-['/'] before:mx-3 before:text-slate-400">
							{ e.link ? 
								<Link href={e.link} className="hover:text-primary">{ e.text }</Link> : 
								e.text }
						</li>
					)) : null }
				<li className="select-none before:content-['/'] before:mx-3 before:text-slate-400">
					{props.title}
				</li>
			</ul>
		</div>
	</div>)
}