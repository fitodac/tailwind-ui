import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


const data = {
	table1: {
		head: ['Package', 'Invoice date', 'Status', 'Actions'],
		body: [
			[
				{__html: `<span class="font-semibold">Free package</span>
									<br/>
									<span>$287</span>`},
				{__html: 'Jan. 13, 2023'},
				{__html: '<span>paid</span>'},
				{__html: `<div class="text-end">
										<button class="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Edit</button>
									</div>`}
			],
			[
				{__html: `<span class="font-semibold">Standard package</span>
									<br/>
									<span>$530</span>`},
				{__html: 'Mar. 4, 2023'},
				{__html: '<span>paid</span>'},
				{__html: `<div class="text-end">
										<button class="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Edit</button>
									</div>`}
			],
			[
				{__html: `<span class="font-semibold">Business package</span>
									<br/>
									<span>$122</span>`},
				{__html: 'Jun. 22, 2023'},
				{__html: '<span>unpaid</span>'},
				{__html: `<div class="text-end">
										<button class="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Edit</button>
									</div>`}
			],
			[
				{__html: `<span class="font-semibold">Basic package</span>
									<br/>
									<span>$890</span>`},
				{__html: 'Nov. 28, 2023'},
				{__html: '<span>pending</span>'},
				{__html: `<div class="text-end">
										<button class="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Edit</button>
									</div>`}
			]
		]
	},

	table2: {
		head: ['Package', 'Invoice date', 'Ammount', 'Status'],
		body: [
			[
				{__html: `<span class="font-semibold">Free package</span>`},
				{__html: '$287'},
				{__html: 'Jan. 13, 2023'},
				{__html: '<span>paid</span>'}
			],
			[
				{__html: `<span class="font-semibold">Standard package</span>`},
				{__html: '$530'},
				{__html: 'Mar. 4, 2023'},
				{__html: '<span>paid</span>'}
			],
			[
				{__html: `<span class="font-semibold">Business package</span>`},
				{__html: '$122'},
				{__html: 'Jun. 22, 2023'},
				{__html: '<span>unpaid</span>'}
			],
			[
				{__html: `<span class="font-semibold">Basic package</span>`},
				{__html: '$890'},
				{__html: 'Nov. 28, 2023'},
				{__html: '<span>pending</span>'}
			]
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
						<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
							scroll to see more...
							<i className="ri-arrow-right-double-fill"></i>
						</span>

						<div className="w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<table className="table">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t1-thead-${i}`}>
												<div className={i === data.table1.head.length -1 ? 'text-end' : ''}>{ e }</div>
											</th>
										))}
									</tr>
								</thead>
								
								<tbody>
									{ data.table1.body.map((tr,i) => (
										<tr key={`t1-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t1-tbody-td-${i}`} />
											)) }
										</tr>
									))}
								</tbody>

								<tfoot>

								</tfoot>
							</table>
						</div>
					</>
				</DemoCard>


				<DemoCard title={'Bordered table'}>
					<>
						<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
							scroll to see more...
							<i className="ri-arrow-right-double-fill"></i>
						</span>

						<div className="w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<table className="table table-bordered">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t2-thead-${i}`}>
												<div className={i === data.table1.head.length -1 ? 'text-end' : ''}>{ e }</div>
											</th>
										))}
									</tr>
								</thead>
								
								<tbody>
									{ data.table1.body.map((tr,i) => (
										<tr key={`t2-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t2-tbody-td-${i}`} />
											)) }
										</tr>
									))}
								</tbody>

								<tfoot>

								</tfoot>
							</table>
						</div>
					</>
				</DemoCard>


				<DemoCard title={'Striped table'}>
					<>
						<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
							scroll to see more...
							<i className="ri-arrow-right-double-fill"></i>
						</span>

						<div className="w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<table className="table table-striped">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t3-thead-${i}`}>
												<div className={i === data.table1.head.length -1 ? 'text-end' : ''}>{ e }</div>
											</th>
										))}
									</tr>
								</thead>
								
								<tbody>
									{ data.table1.body.map((tr,i) => (
										<tr key={`t3-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t3-tbody-td-${i}`} />
											)) }
										</tr>
									))}
								</tbody>

								<tfoot>

								</tfoot>
							</table>
						</div>
					</>
				</DemoCard>


				<DemoCard title={'Hoverable table'}>
					<>
						<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
							scroll to see more...
							<i className="ri-arrow-right-double-fill"></i>
						</span>

						<div className="w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<table className="table table-striped hoverable">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t4-thead-${i}`}>
												<div className={i === data.table1.head.length -1 ? 'text-end' : ''}>{ e }</div>
											</th>
										))}
									</tr>
								</thead>
								
								<tbody>
									{ data.table1.body.map((tr,i) => (
										<tr key={`t4-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t4-tbody-td-${i}`} />
											)) }
										</tr>
									))}
								</tbody>

								<tfoot>

								</tfoot>
							</table>
						</div>
					</>
				</DemoCard>


				<DemoCard title={'Compact table'}>
					<>
						<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
							scroll to see more...
							<i className="ri-arrow-right-double-fill"></i>
						</span>

						<div className="w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<table className="table table-bordered table-compact">
								<thead>
									<tr>
										{ data.table2.head.map((e,i) => (
											<th key={`t5-thead-${i}`}>{ e }</th>
										))}
									</tr>
								</thead>
								
								<tbody>
									{ data.table2.body.map((tr,i) => (
										<tr key={`t5-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t5-tbody-td-${i}`} />
											)) }
										</tr>
									))}
								</tbody>

								<tfoot>

								</tfoot>
							</table>
						</div>
					</>
				</DemoCard>



				<DemoCard title={'Scroll content'}>
					<>
						<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
							scroll to see more...
							<i className="ri-arrow-right-double-fill"></i>
						</span>

						<div className="w-full h-72 overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<table className="table">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t1-thead-${i}`}>
												<div className={i === data.table1.head.length -1 ? 'text-end' : ''}>{ e }</div>
											</th>
										))}
									</tr>
								</thead>
								
								<tbody>
									{ data.table1.body.map((tr,i) => (
										<tr key={`t1-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t1-tbody-td-${i}`} />
											)) }
										</tr>
									))}
									{ data.table1.body.map((tr,i) => (
										<tr key={`t1-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t1-tbody-td-${i}`} />
											)) }
										</tr>
									))}
									{ data.table1.body.map((tr,i) => (
										<tr key={`t1-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t1-tbody-td-${i}`} />
											)) }
										</tr>
									))}
								</tbody>

								<tfoot>

								</tfoot>
							</table>
						</div>
					</>
				</DemoCard>

			</div>

		</Layout>
	)
}