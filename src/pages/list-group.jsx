import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'

const data = {
	list1: ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Darth Vader', 'Yoda', 'Chewbacca'],
	
	list2: [
		[
			{__html: `<span class="font-semibold">Catherine Hansen</span>
								<br/>
								<span class="text-sm">Regional Integration Producer</span>`},
			{__html: `Officer`},
			{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
			{__html: `(522) 824-4178`}
		],
		[
			{__html: `<span class="font-semibold">Gregory Stamm</span>
								<br/>
								<span class="text-sm">Product Solutions Developer</span>`},
			{__html: `Factors`},
			{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
			{__html: `922-626-2911`}
		],
		[
			{__html: `<span class="font-semibold">Domingo Goyette</span>
								<br/>
								<span class="text-sm">Global Metrics Associate</span>`},
			{__html: `Markets`},
			{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
			{__html: `681.310.5198`}
		],
		[
			{__html: `<span class="font-semibold">Barbara Mitchell</span>
								<br/>
								<span class="text-sm">Regional Identity Director</span>`},
			{__html: `Markets`},
			{__html: `<span class="badge bg-red-600 text-red-600 rounded-full ghost">Inactive</span>`},
			{__html: `(613) 706-8525 x827`}
		],
		[
			{__html: `<span class="font-semibold">Wilma McGlynn</span>
								<br/>
								<span class="text-sm">Global Quality Representative</span>`},
			{__html: `Creative`},
			{__html: `<span class="badge bg-green-600 text-green-600 rounded-full ghost">Active</span>`},
			{__html: `377-928-9313`}
		],
	]
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
									<div key={`list-basic-${i}`} className="list-group-row">
										<div className="list-group-cell">{e}</div>
									</div>
								)) }
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Variations'}>
					<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<div className="text-slate-400 text-xs mb-4">Striped</div>
							<div className="list-group-striped">
								{ data.list1.map((e,i) => (
									<div key={`list-basic-${i}`} className="list-group-row">
										<div className="list-group-cell">{e}</div>
									</div>
								)) }
							</div>
						</div>

						<div>
							<div className="text-slate-400 text-xs mb-4">Hoverable</div>
							<div className="list-group-striped hoverable">
								{ data.list1.map((e,i) => (
									<div key={`list-basic-${i}`} className="list-group-row">
										<div className="list-group-cell">{e}</div>
									</div>
								)) }
							</div>
						</div>

						<div>
							<div className="text-slate-400 text-xs mb-4">List group head</div>
							<div className="list-group">
								{ data.list1.map((e,i) => (
									<>
										{ i === 0 ? <div className="list-group-head">Primary list</div> : null }
										{ i === 2 ? <div className="list-group-head">Secondary list</div> : null }
										<div key={`list-basic-${i}`} className="list-group-row">
											<div className="list-group-cell">{e}</div>
										</div>
									</>
								)) }
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Multi column'}>
					<div className="border rounded-lg">
						<div className="list-group">
							<div className="list-group-row bg-primary rounded-t-lg">
								<div className="list-group-cell text-white font-semibold">User</div>
								<div className="list-group-cell text-white font-semibold">Job area</div>
								<div className="list-group-cell text-white font-semibold">Status</div>
								<div className="list-group-cell text-white font-semibold">Phone</div>
							</div>

							{ data.list2.map((e,i) => (
								<>
									<div key={`list-basic-${i}`} className="list-group-row">
										<div className="list-group-cell" dangerouslySetInnerHTML={e[0]} />
										<div className="list-group-cell" dangerouslySetInnerHTML={e[1]} />
										<div className="list-group-cell" dangerouslySetInnerHTML={e[2]} />
										<div className="list-group-cell" dangerouslySetInnerHTML={e[3]} />
									</div>

									{ i === 2 ? (<div className="list-group-head">I'm a list header element</div>) : null }
								</>
							)) }
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Collapsible'}>
					<div>
						<div className="list-group hoverable">
							{ data.list2.map((e,i) => (
								<div className="list-group-collapse">
									<input type="checkbox" id={`listGroupCollapse${i}`} />
									<div key={`list-basic-${i}`} className="list-group-row">
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
												<strong>Tillman and Sons</strong>
											</div>
										</div>
										<div className="list-group-row">
											<div className="list-group-cell">Decentralized interactive process improvement</div>
											<div className="list-group-cell">Decentralized interactive process improvement</div>
											<div className="list-group-cell">Decentralized interactive process improvement</div>
										</div>
										<div className="h-7"></div>
									</div>
								</div>
							)) }
						</div>
					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}