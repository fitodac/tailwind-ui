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
	]
}


export default function PageList(){
	return(
		<Layout>
			<PageHeader title="List Group" />

			<div className="space-y-7">
				<DemoCard title={'Basic list'} code="Code_ListGroupBasic">
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


				<DemoCard title={'Striped'} code="Code_ListGroupStriped">
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


				<DemoCard title={'Hoverable'} code="Code_ListGroupHoverable">
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


				<DemoCard title={'List group head'} code="Code_ListGroupHead">
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


				<DemoCard title={'Link'} code="Code_ListGroupLink">
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
			</div>
		</Layout>
	)
}