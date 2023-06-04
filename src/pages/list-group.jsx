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
			{__html: `(522) 824-4178`}
		],
		[
			{__html: `<span class="font-semibold">Gregory Stamm</span>
								<br/>
								<span class="text-sm">Product Solutions Developer</span>`},
			{__html: `Factors`},
			{__html: `922-626-2911`}
		],
		[
			{__html: `<span class="font-semibold">Domingo Goyette</span>
								<br/>
								<span class="text-sm">Global Metrics Associate</span>`},
			{__html: `Markets`},
			{__html: `681.310.5198`}
		],
		[
			{__html: `<span class="font-semibold">Barbara Mitchell</span>
								<br/>
								<span class="text-sm">Regional Identity Director</span>`},
			{__html: `Markets`},
			{__html: `(613) 706-8525 x827`}
		],
		[
			{__html: `<span class="font-semibold">Wilma McGlynn</span>
								<br/>
								<span class="text-sm">Global Quality Representative</span>`},
			{__html: `Creative`},
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


				<DemoCard title={'Multi column'}>
					<div>
						<div className="list-group">
							{ data.list2.map((e,i) => (
								<div key={`list-basic-${i}`} className="list-group-row">
									<div className="list-group-cell" dangerouslySetInnerHTML={e[0]} />
									<div className="list-group-cell" dangerouslySetInnerHTML={e[1]} />
									<div className="list-group-cell" dangerouslySetInnerHTML={e[2]} />
								</div>
							)) }
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Striped'}>
					<div>
						<div className="list-group-striped">
							{ data.list2.map((e,i) => (
								<div key={`list-basic-${i}`} className="list-group-row">
									<div className="list-group-cell" dangerouslySetInnerHTML={e[0]} />
									<div className="list-group-cell" dangerouslySetInnerHTML={e[1]} />
									<div className="list-group-cell" dangerouslySetInnerHTML={e[2]} />
								</div>
							)) }
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Hoverable'}>
					<div>
						<div className="list-group hoverable">
							{ data.list2.map((e,i) => (
								<div key={`list-basic-${i}`} className="list-group-row">
									<div className="list-group-cell" dangerouslySetInnerHTML={e[0]} />
									<div className="list-group-cell" dangerouslySetInnerHTML={e[1]} />
									<div className="list-group-cell" dangerouslySetInnerHTML={e[2]} />
								</div>
							)) }
						</div>
					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}