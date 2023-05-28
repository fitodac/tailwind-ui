import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'


const data = {
	table1: {
		head: ['Package', 'Invoice date', 'Status', 'Action'],
		body: [
			[
				{__html: `<span class="font-semibold">Free package</span>
									<br/>
									<span>$287</span>`},
				{__html: 'Jan. 13, 2023'},
				{__html: '<span>paid</span>'},
				{__html: '<button class="btn">Edit</button>'}
			],
			[
				{__html: `<span class="font-semibold">Standard package</span>
									<br/>
									<span>$530</span>`},
				{__html: 'Mar. 4, 2023'},
				{__html: '<span>paid</span>'},
				{__html: '<button class="btn">Edit</button>'}
			],
			[
				{__html: `<span class="font-semibold">Business package</span>
									<br/>
									<span>$122</span>`},
				{__html: 'Jun. 22, 2023'},
				{__html: '<span>unpaid</span>'},
				{__html: '<button class="btn">Edit</button>'}
			],
			[
				{__html: `<span class="font-semibold">Basic package</span>
									<br/>
									<span>$890</span>`},
				{__html: 'Nov. 28, 2023'},
				{__html: '<span>pending</span>'},
				{__html: '<button class="btn">Edit</button>'}
			]
		]
	},

	table2: {
		head: ['Package', 'Invoice date', 'Ammount', 'Status', 'Action'],
		body: [
			[
				{__html: `<span class="font-semibold">Free package</span>`},
				{__html: '$287'},
				{__html: 'Jan. 13, 2023'},
				{__html: '<span>paid</span>'},
				{__html: '<i class="ri-more-fill"></i>'}
			],
			[
				{__html: `<span class="font-semibold">Standard package</span>`},
				{__html: '$530'},
				{__html: 'Mar. 4, 2023'},
				{__html: '<span>paid</span>'},
				{__html: '<i class="ri-more-fill"></i>'}
			],
			[
				{__html: `<span class="font-semibold">Business package</span>`},
				{__html: '$122'},
				{__html: 'Jun. 22, 2023'},
				{__html: '<span>unpaid</span>'},
				{__html: '<i class="ri-more-fill"></i>'}
			],
			[
				{__html: `<span class="font-semibold">Basic package</span>`},
				{__html: '$890'},
				{__html: 'Nov. 28, 2023'},
				{__html: '<span>pending</span>'},
				{__html: '<i class="ri-more-fill"></i>'}
			]
		]
	},

	table3: {
		head: ['Package', 'Invoice date', 'more'],
		body: [
			[
				{__html: `<span class="font-semibold">Free package</span>
									<br/>
									<span>$287</span>`},
				{__html: 'Jan. 13, 2023'},
				{__html: `<label for="collapse-0" class="cursor-pointer hover:text-primary">
										<i class="ri-more-fill"></i>
									</label>`},
			],
			[
				{__html: `<span class="font-semibold">Standard package</span>
									<br/>
									<span>$530</span>`},
				{__html: 'Mar. 4, 2023'},
				{__html: `<label for="collapse-1" class="cursor-pointer hover:text-primary">
										<i class="ri-more-fill"></i>
									</label>`},
			],
			[
				{__html: `<span class="font-semibold">Business package</span>
									<br/>
									<span>$122</span>`},
				{__html: 'Jun. 22, 2023'},
				{__html: `<label for="collapse-2" class="cursor-pointer hover:text-primary">
										<i class="ri-more-fill"></i>
									</label>`},
			],
			[
				{__html: `<span class="font-semibold">Basic package</span>
									<br/>
									<span>$890</span>`},
				{__html: 'Nov. 28, 2023'},
				{__html: `<label for="collapse-3" class="cursor-pointer hover:text-primary">
										<i class="ri-more-fill"></i>
									</label>`},
			]
		],
		collapsed: [
			[
				{__html: `<span class="font-bold">What's included</span>`},
				{__html: 'Unlimited requests'},
				{__html: 'Unlimited team members'}
			],
			[
				{__html: ''},
				{__html: 'Unlimited revisions'},
				{__html: 'Logo design'}
			],
			[
				{__html: ''},
				{__html: 'Free stock photos'},
				{__html: 'Presentation deck design'}
			],
			[
				{__html: ''},
				{__html: 'Native source files included'},
				{__html: ''}
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

						<div className="w-full overflow-x-auto">
							<table className="table">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t1-thead-${i}`}>{ e }</th>
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

						<div className="w-full overflow-x-auto">
							<table className="table table-bordered">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t2-thead-${i}`}>{ e }</th>
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

						<div className="w-full overflow-x-auto">
							<table className="table table-striped">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t3-thead-${i}`}>{ e }</th>
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

						<div className="w-full overflow-x-auto">
							<table className="table table-striped table-hoverable">
								<thead>
									<tr>
										{ data.table1.head.map((e,i) => (
											<th key={`t4-thead-${i}`}>{ e }</th>
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

						<div className="w-full overflow-x-auto">
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


				<DemoCard title={'Collapsible table'}>
					<>
						<table className="table table-collapsible table-bordered">
							<thead>
								<tr>
									{ data.table3.head.map((e,i) => (
										<th key={`t6-thead-${i}`}>{ e }</th>
									))}
								</tr>
							</thead>
							
							<tbody>
								{ data.table3.body.map((tr,i) => (
									<>
										<tr key={`t6-tbody-tr-${i}`}>
											{ tr.map((e,i) => (
												<td dangerouslySetInnerHTML={e} key={`t6-tbody-td-${i}`} />
											)) }
										</tr>
										
										<tr>
											<td colSpan="3" className="!border-0 !p-0">
												<input type="checkbox" id={`collapse-${i}`} className="peer hidden" name="tableCollapsible" />
												<div className="collapsible-content peer-checked:max-h-fit">
													<table className="table table-compact text-sm mx-3 mb-8">
														<tbody>
															{ data.table3.collapsed.map((tr,i) => (
																<tr key={`t6-collapsed-tr-${i}`}>
																	{ tr.map((e,i) => (
																		<td dangerouslySetInnerHTML={e} key={`t6-collapsed-td-${i}`} />
																	)) }
																</tr>
															))}
														</tbody>
													</table>
												</div>
											</td>
										</tr>
									</>
								))}

								<tr>
									<td>
										<span className="font-semibold">Free package</span>
										<br/>
										<span>$287</span>
									</td>
									<td>Jan. 13, 2023</td>
									<td>
										<label htmlFor="collapse-1" className="cursor-pointer hover:text-primary">
											<i className="ri-more-fill"></i>
										</label>
									</td>
								</tr>

								


								<tr>
									<td>
										<span className="font-semibold">Free package</span>
										<br/>
										<span>$287</span>
									</td>
									<td>Jan. 13, 2023</td>
									<td>
										<label htmlFor="collapse-2" className="cursor-pointer hover:text-primary">
											<i className="ri-more-fill"></i>
										</label>
									</td>
								</tr>

								<tr>
									<td colSpan="3" className="!border-0 !p-0">
										<input type="checkbox" id="collapse-2" className="peer hidden" name="tableCollapsible" />
										<div className="collapsible-content peer-checked:max-h-fit">
											<table className="table table-compact text-sm mx-3 mb-4">
												<tbody>
													<tr>
														<td><span className="font-bold">What's included</span></td>
														<td>Unlimited requests</td>
														<td>Unlimited team members</td>
													</tr>
													<tr>
														<td></td>
														<td>Unlimited revisions</td>
														<td>Logo design</td>
													</tr>
													<tr>
														<td></td>
														<td>Free stock photos</td>
														<td>Presentation deck design</td>
													</tr>
													<tr>
														<td></td>
														<td>Native source files included</td>
														<td></td>
													</tr>
												</tbody>
											</table>
										</div>
									</td>
								</tr>

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