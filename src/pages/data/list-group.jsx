import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'
import Link from 'next/link'

const data = {
	list1: ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Darth Vader', 'Yoda', 'Chewbacca'],
	links: [
		'https://starwars.fandom.com/wiki/Luke_Skywalker',
		'https://starwars.fandom.com/wiki/Leia_Organa_Solo',
		'https://starwars.fandom.com/wiki/Han_Solo',
		'https://starwars.fandom.com/wiki/Anakin_Skywalker',
		'https://starwars.fandom.com/wiki/Yoda',
		'https://starwars.fandom.com/wiki/Chewbacca'
	],
	
	// list2: [
	// 	[
	// 		{__html: `<span class="font-semibold">Catherine Hansen</span>
	// 							<br/>
	// 							<span class="text-sm">Regional Integration Producer</span>`},
	// 		{__html: `Officer`},
	// 		{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
	// 		{__html: `(522) 824-4178`},
	// 		'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/547.jpg'
	// 	],
	// 	[
	// 		{__html: `<span class="font-semibold">Gregory Stamm</span>
	// 							<br/>
	// 							<span class="text-sm">Product Solutions Developer</span>`},
	// 		{__html: `Factors`},
	// 		{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
	// 		{__html: `922-626-2911`},
	// 		'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/548.jpg'
	// 	],
	// 	[
	// 		{__html: `<span class="font-semibold">Domingo Goyette</span>
	// 							<br/>
	// 							<span class="text-sm">Global Metrics Associate</span>`},
	// 		{__html: `Markets`},
	// 		{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
	// 		{__html: `681.310.5198`},
	// 		'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/549.jpg'
	// 	],
	// 	[
	// 		{__html: `<span class="font-semibold">Barbara Mitchell</span>
	// 							<br/>
	// 							<span class="text-sm">Regional Identity Director</span>`},
	// 		{__html: `Markets`},
	// 		{__html: `<span class="badge bg-red-600 text-red-600 rounded-full ghost">Inactive</span>`},
	// 		{__html: `(613) 706-8525 x827`},
	// 		'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/550.jpg'
	// 	],
	// 	[
	// 		{__html: `<span class="font-semibold">Wilma McGlynn</span>
	// 							<br/>
	// 							<span class="text-sm">Global Quality Representative</span>`},
	// 		{__html: `Creative`},
	// 		{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
	// 		{__html: `377-928-9313`},
	// 		'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/551.jpg'
	// 	],
	// ]
}


export default function PageList(){
	return(
		<Layout>
			<PageHeader title="List Group" />

			<div className="space-y-7">
				<DemoCard title={'Basic list'}>
					<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<div className="list-group">
								{ data.list1.map((e,i) => (
									<div key={`list-basic-${i}`} className="list-group-item">{e}</div>
								)) }
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Striped'}>
					<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<div className="list-group striped">
								{ data.list1.map((e,i) => (
									<div key={`list-basic-${i}`} className="list-group-item">{e}</div>
								)) }
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Hoverable'}>
					<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<div className="list-group hoverable">
								{ data.list1.map((e,i) => (
									<div key={`list-basic-${i}`} className="list-group-item">{e}</div>
								)) }
							</div>
						</div>

						<div>
							<div className="list-group striped hoverable">
								{ data.list1.map((e,i) => (
									<div key={`list-basic-${i}`} className="list-group-item">{e}</div>
								)) }
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'List group head'}>
					<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<div className="list-group hoverable">
								{ data.list1.map((e,i) => (
									<>
										{ i === 0 ? <div className="list-group-head">Primary list</div> : null }
										{ i === 2 ? <div className="list-group-head">Secondary list</div> : null }
										<div key={`list-basic-${i}`} className="list-group-item">{e}</div>
									</>
								)) }
							</div>
						</div>

						<div>
							<div className="list-group striped hoverable">
								{ data.list1.map((e,i) => (
									<>
										{ i === 0 ? <div className="list-group-head">Primary list</div> : null }
										{ i === 2 ? <div className="list-group-head">Secondary list</div> : null }
										<div key={`list-basic-${i}`} className="list-group-item">{e}</div>
									</>
								)) }
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Link'}>
					<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<div className="list-group hoverable">
								{ data.list1.map((e,i) => (
									<Link 
										key={`list-basic-${i}`} 
										href={data.links[i]} 
										target="_blank" 
										className="list-group-item">
										{e}
									</Link>
								)) }
							</div>
						</div>

						<div>
							<div className="list-group striped hoverable">
								{ data.list1.map((e,i) => (
									<Link 
										key={`list-basic-${i}`} 
										href={data.links[i]} 
										target="_blank" 
										className="list-group-item">
										{e}
									</Link>
								)) }
							</div>
						</div>
					</div>
				</DemoCard>


				{/* <DemoCard title={'Multi column'}>
					<div className="md:border rounded-lg">
						<div className="list-group gap-y-6 md:gap-y-0">
							<div className="list-group-row bg-primary rounded-t-lg">
								<div className="list-group-cell text-white font-semibold">User</div>
								<div className="list-group-cell text-white font-semibold">Job area</div>
								<div className="list-group-cell text-white font-semibold">Status</div>
								<div className="list-group-cell text-white font-semibold">Phone</div>
							</div>

							{ data.list2.map((e,i) => (
								<>
									<div key={`list-basic-${i}`} className="list-group-row border rounded-lg md:border-none md:rounded-none">
										<div className="list-group-cell" data-title="User" dangerouslySetInnerHTML={e[0]} />
										<div className="list-group-cell" data-title="Job area" dangerouslySetInnerHTML={e[1]} />
										<div className="list-group-cell" data-title="Status" dangerouslySetInnerHTML={e[2]} />
										<div className="list-group-cell" data-title="Phone" dangerouslySetInnerHTML={e[3]} />
									</div>

									{ i === 2 ? (<div className="list-group-head">I'm a list header element</div>) : null }
								</>
							)) }
						</div>
					</div>
				</DemoCard> */}


				{/* <DemoCard title={'Collapsible'}>
					<div>
						<div className="list-group hoverable">
							{ data.list2.map((e,i) => (
								<div className="list-group-collapse">
									<input type="checkbox" id={`listGroupCollapse${i}`} />
									<div key={`list-basic-${i}`} className="list-group-row">
										<div className="list-group-cell">
											<div className="avatar avatar-squircle w-12">
												<Image src={e[4]} alt='avatar' width={48} height={48} />
											</div>
										</div>
										<div className="list-group-cell" dangerouslySetInnerHTML={e[0]} />
										<div className="list-group-cell" dangerouslySetInnerHTML={e[1]} />
										<div className="list-group-cell" dangerouslySetInnerHTML={e[2]} />
										<div className="list-group-cell flex items-center justify-end">
											<label htmlFor={`listGroupCollapse${i}`} className="btn btn-icon rounded-full">
												<i className="ri-more-2-fill"></i>
											</label>
										</div>
									</div>

									<div className="list-group-collapse-content bg-slate-50">
										<div className="list-group-row">
											<div className="list-group-cell">
												<span className="font-bold text-sm">Tillman and Sons</span><br/>
												<span className="text-sm">Lacey</span>
											</div>
										</div>
										<div className="list-group-row text-sm">
											<div className="list-group-cell">218 Thiel Fields, Vermont</div>
											<div className="list-group-cell">1-519-774-7296</div>
											<div className="list-group-cell">orchestrate vertical convergence</div>
										</div>
										<div className="h-7"></div>
									</div>
								</div>
							)) }
						</div>
					</div>
				</DemoCard> */}

			</div>
		</Layout>
	)
}