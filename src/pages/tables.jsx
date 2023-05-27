import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'


const data = {
	table1: {
		head: ['Package', 'Invoice date', 'Status', 'Action'],
		body: [
			[
				{__html: `<span class="font-semibold">Free package</span>
									<br>
									<span>$287</span>`},
				{__html: 'Jan. 13, 2023'},
				{__html: '<span>paid</span>'},
				{__html: '<button class="btn">Edit</button>'}
			],
			[
				{__html: `<span class="font-semibold">Standard package</span>
									<br>
									<span>$530</span>`},
				{__html: 'Mar. 4, 2023'},
				{__html: '<span>paid</span>'},
				{__html: '<button class="btn">Edit</button>'}
			],
			[
				{__html: `<span class="font-semibold">Business package</span>
									<br>
									<span>$122</span>`},
				{__html: 'Jun. 22, 2023'},
				{__html: '<span>unpaid</span>'},
				{__html: '<button class="btn">Edit</button>'}
			],
			[
				{__html: `<span class="font-semibold">Basic package</span>
									<br>
									<span>$890</span>`},
				{__html: 'Nov. 28, 2023'},
				{__html: '<span>pending</span>'},
				{__html: '<button class="btn">Edit</button>'}
			]
		]
	},

	table10: {
		head: [
			'Project', 'Progress', 'Tasks', 'Budget', 'Deadline', 'Members'
		]
	}
}

export default function PageTables(){
	return (
		<Layout>
			<PageHeader title="Tables" />

			<div className="space-y-7">
				<DemoCard title={'Basic table'}>
					<>
						<table className="table">
							<thead>
								<tr>
									{ data.table1.head.map((e,i) => (
										<th key={`table1-thead-${i}`}>{ e }</th>
									))}

								</tr>
							</thead>
							
							<tbody>
								{ data.table1.body.map(tr => (
									<tr>
										{ tr.map((e,i) => (
											<td dangerouslySetInnerHTML={e} key={`table1-tbody-${i}`} />
										)) }
									</tr>
								))}
							</tbody>

							<tfoot>

							</tfoot>
						</table>
					</>
				</DemoCard>


				<DemoCard title={'Striped table'}>
					<>
						<table className="table table-striped">
							<thead>
								<tr>
									{ data.table1.head.map((e,i) => (
										<th key={`table1-thead-${i}`}>{ e }</th>
									))}

								</tr>
							</thead>
							
							<tbody>
								{ data.table1.body.map(tr => (
									<tr>
										{ tr.map((e,i) => (
											<td dangerouslySetInnerHTML={e} key={`table1-tbody-${i}`} />
										)) }
									</tr>
								))}
							</tbody>

							<tfoot>

							</tfoot>
						</table>
					</>
				</DemoCard>


				<DemoCard title={'Hoverable table'}>
					<>
						<table className="table table-striped table-hoverable">
							<thead>
								<tr>
									{ data.table1.head.map((e,i) => (
										<th key={`table1-thead-${i}`}>{ e }</th>
									))}

								</tr>
							</thead>
							
							<tbody>
								{ data.table1.body.map(tr => (
									<tr>
										{ tr.map((e,i) => (
											<td dangerouslySetInnerHTML={e} key={`table1-tbody-${i}`} />
										)) }
									</tr>
								))}
							</tbody>

							<tfoot>

							</tfoot>
						</table>
					</>
				</DemoCard>


				<DemoCard title={'Basic table'}>
					<>
						<table className="table table-scrollable">
							<thead>
								<tr>
									{ data.table1.head.map((e,i) => (
										<th key={`table1-thead-${i}`}>{ e }</th>
									))}

								</tr>
							</thead>
							
							<tbody>
								{ data.table1.body.map(tr => (
									<tr>
										{ tr.map((e,i) => (
											<td dangerouslySetInnerHTML={e} key={`table1-tbody-${i}`} />
										)) }
									</tr>
								))}
							</tbody>

							<tfoot>

							</tfoot>
						</table>
					</>
				</DemoCard>
			</div>

		</Layout>
	)
}