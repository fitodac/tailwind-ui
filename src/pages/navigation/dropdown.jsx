import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'

export default function PageDropDown(){
	return (
		<Layout>
			<PageHeader 
				title="Dropdown"
				breadcrumbs={[
					{ text: 'Navigation', link: '/navigation' }
				]} />

			<div className="space-y-7">
				<DemoCard title={'Dropdown button'}>
					<div className="flex gap-x-20">
						
						<div className="">
							<div className="dropdown">
								<label className="btn-toggler">
									<input type="checkbox" className="dropdown-toggler" />
									<span className="btn btn-primary space-x-2">
										<span>More</span>
										<i class="ri-arrow-down-s-line"></i>
									</span>


									<div className="dropdown-nav w-40">
										<ul className="text-sm">
											<li>
												<a href="#">View</a>
											</li>
											<li>
												<a href="#">Details</a>
											</li>
											<li>
												<a href="#">Share</a>
											</li>
										</ul>

										<ul className="text-sm border-t">
											<li>
												<a href="#">Unpublish</a>
											</li>
											<li>
												<a href="#">Archive</a>
											</li>
											<li>
												<a href="#">Delete</a>
											</li>
										</ul>
									</div>
								</label>

							</div>
						</div>


						<div className="">
							<div className="dropdown">
								<label className="btn-toggler">
									<input type="checkbox" className="dropdown-toggler" />

									<span className="btn btn-icon rounded-full">
										<i class="ri-more-2-fill"></i>
									</span>

									<div className="dropdown-nav w-32 right-0">
										<ul className="text-sm">
											<li>
												<a href="#">View</a>
											</li>
											<li>
												<a href="#">Details</a>
											</li>
											<li>
												<a href="#">Share</a>
											</li>
										</ul>

										<ul className="text-sm border-t">
											<li>
												<a href="#">Unpublish</a>
											</li>
											<li>
												<a href="#">Archive</a>
											</li>
											<li>
												<a href="#">Delete</a>
											</li>
										</ul>
									</div>
								</label>
							</div>
						</div>

					</div>
				</DemoCard>


				<DemoCard title={'Button group dropdown'}>
					<div className="flex gap-x-20">

						<div className="">
							<div className="btn-group btn-group-primary">
								<button className="btn">One</button>
								<button className="btn">Two</button>

								<div className="dropdown">
									<label className="btn-toggler">
										<input type="checkbox" className="dropdown-toggler" />
										<span className="btn btn-primary space-x-2">
											<span>Article</span>
											<i class="ri-arrow-down-s-line"></i>
										</span>


										<div className="dropdown-nav w-48">
											<ul className="text-sm">
												<li>
													<a href="#">View</a>
												</li>
												<li>
													<a href="#">Details</a>
												</li>
												<li>
													<a href="#">Share</a>
												</li>
											</ul>

											<ul className="text-sm border-t">
												<li>
													<a href="#">Unpublish</a>
												</li>
												<li>
													<a href="#">Archive</a>
												</li>
												<li>
													<a href="#">Delete</a>
												</li>
											</ul>
										</div>
									</label>

								</div>
							</div>
						</div>


						<div className="">
							<div className="btn-group btn-group-primary">
								<button className="btn">One</button>
								<button className="btn">Two</button>

								<div className="dropdown">
									<label className="btn-toggler">
										<input type="checkbox" className="dropdown-toggler" name="dd-1" />
										<span className="btn btn-primary space-x-2">
											<span>Article</span>
											<i class="ri-arrow-down-s-line"></i>
										</span>


										<div className="dropdown-nav w-40 right-0">
											<ul className="text-sm">
												<li>
													<a href="#">View</a>
												</li>
												<li>
													<a href="#">Details</a>
												</li>
												<li>
													<a href="#">Share</a>
												</li>
											</ul>

											<ul className="text-sm border-t">
												<li>
													<a href="#">Unpublish</a>
												</li>
												<li>
													<a href="#">Archive</a>
												</li>
												<li>
													<a href="#">Delete</a>
												</li>
											</ul>
										</div>
									</label>

								</div>


								<div className="dropdown">
									<label className="btn-toggler">
										<input type="checkbox" className="dropdown-toggler" name="dd-1" />
										<span className="btn btn-primary space-x-2">
											<span>Options</span>
											<i class="ri-arrow-down-s-line"></i>
										</span>


										<div className="dropdown-nav w-40 right-0">
											<ul className="text-sm">
												<li>
													<a href="#">View</a>
												</li>
												<li>
													<a href="#">Details</a>
												</li>
												<li>
													<a href="#">Share</a>
												</li>
											</ul>

											<ul className="text-sm border-t">
												<li>
													<a href="#">Unpublish</a>
												</li>
												<li>
													<a href="#">Archive</a>
												</li>
												<li>
													<a href="#">Delete</a>
												</li>
											</ul>
										</div>
									</label>

								</div>
							</div>
							
						</div>

					</div>
				</DemoCard>
			</div>

		</Layout>
	)
}