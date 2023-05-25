import Link from 'next/link'

export default function Sidebar(){
	return(
		<div
			className="bg-white border-r border-slte-200 w-60 left-0 top-0 fixed z-30 
		dark:bg-gray-800 dark:border-gray-700">
			<div className="h-screen grid gap-6">

				<div className="px-4 pt-5">
					<h1 className="font-bold">TailwindCSS UI</h1>
				</div>

				<div className="scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
					<ul className="text-slate-600 text-sm leading-tight grid select-none pb-16">
						<li className="">
							<Link href="/" className="px-4 py-2 flex">Home</Link>
						</li>

						<li className="pt-3 pb-1">
							<div className="text-xs font-semibold px-4 pb-1">ESSENTIALS</div>
							<ul className="pl-2">

								<li className="">
									<Link href="/colors" className="px-4 py-2 flex">Colors</Link>
								</li>

								<li className="">
									<Link href="/content" className="px-4 py-2 flex">Content</Link>
								</li>

							</ul>
						</li>

						<li className="pt-3 pb-1">
							<div className="text-xs font-semibold px-4 pb-1">BASIC</div>
							<ul className="pl-2">

								<li className="">
									<Link href="/buttons" className="px-4 py-2 flex">Buttons</Link>
								</li>

							</ul>
						</li>
						

						<li className="pt-3 pb-1">
							<div className="text-xs font-semibold px-4 pb-1">FORMS</div>
							<ul className="pl-2">
								<li className="">
									<Link href="/forms/inputs" className="px-4 py-2 flex">Inputs</Link>
								</li>
								<li className="">
									<Link href="/forms/select" className="px-4 py-2 flex">Select</Link>
								</li>
								<li className="">
									<Link href="/forms/custom-select" className="px-4 py-2 flex">Custom select</Link>
								</li>
								<li className="">
									<Link href="/forms/checkboxes" className="px-4 py-2 flex">Checkboxes</Link>
								</li>
								<li className="">
									<Link href="/forms/radio-buttons" className="px-4 py-2 flex">Radio buttons</Link>
								</li>
							</ul>
						</li>


						<li className="pt-3 pb-1">
							<div className="text-xs font-semibold px-4 pb-1">ACTIONS</div>
							<ul className="pl-2">
								
								<li className="">
									<Link href="/dropdown" className="px-4 py-2 flex">Dropdown</Link>
								</li>
								
								<li className="">
									<Link href="/collapsible" className="px-4 py-2 flex">Collapsible</Link>
								</li>

							</ul>
						</li>


						<li className="pt-3 pb-1">
							<div className="text-xs font-semibold px-4 pb-1">DISPLAY</div>
							<ul className="pl-2">
								
								<li className="">
									<Link href="/scroll-bar" className="px-4 py-2 flex">Scroll bar</Link>
								</li>

							</ul>
						</li>


						<li className="">
							<Link href="/extra" className="px-4 py-2 flex">Extra</Link>
						</li>
					</ul>
				</div>

			</div>
		</div>
	)
}