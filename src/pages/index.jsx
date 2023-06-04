import Layout from '../layouts/Layout'
import Link from 'next/link'

const grid = [
	{
		title: 'Buttons',
		description: 'Get familiar with the UI button styles. Code examples included.',
		link: '/buttons'
	},
	{
		title: 'Colors',
		description: 'A range of beautiful colors added to the default TailwindCSS palette',
		link: '/colors'
	},
	{
		title: 'Inputs',
		description: 'The form components have been designed with a minimalist aesthetic that perfectly fits any project. Every detail has been taken care of to ensure that the components are highly customizable and seamlessly integrate into any design.',
		link: '/forms/inputs'
	},
	{
		title: 'Accordion',
		description: 'A range of beautiful colors added to the default TailwindCSS palette',
		link: '/accordion'
	}
]

export default function PageHome(){
	return (
		<Layout>
			<div className="text-center pt-32 pb-20">
				<h2 className="text-3xl font-bold">TailwindCSS UI</h2>
				<div className="text-slate-400 text-sm font-light">UI components built with the fabulous TailwindCSS</div>
			</div>

			<div className="max-w-2xl mx-auto">
				<div className="grid grid-cols-2 gap-8">
					{ grid.map(e => (
						<div key={`card-${Math.random().toString(16).substring(2)}`}>
							<Link 
								href={e.link} 
								className="bg-white border border-slate-100 h-full block rounded-md select-none transition-all hover:shadow-md">
								<div className="px-6 py-5">
									<div className="space-y-1">
										<div className="text-lg font-bold">{e.title}</div>
										<div className="text-slate-400 font-light text-sm">{e.description}</div>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}