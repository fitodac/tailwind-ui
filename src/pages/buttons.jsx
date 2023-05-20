import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'

export default function PageButtons(){
	return (
		<Layout>
			<PageHeader title="Buttons" />

			<div className="space-y-7">
				<DemoCard title={'Buttons'}>
					<div className="space-x-4">
						<button className="btn">Default</button>
						<button className="btn btn-primary">Primary</button>
						<button className="btn btn-secondary">Secondary</button>
						<button className="btn btn-alt">Alternative</button>
					</div>
				</DemoCard>
				
				<DemoCard title={'Button size'}>
					<div className="space-x-4">
						<span className="text-slate-400 text-xs">Small</span>
						<button className="btn btn-sm">Default</button>
						<button className="btn btn-primary btn-sm">Primary</button>
						<button className="btn btn-secondary btn-sm">Secondary</button>
						<button className="btn btn-alt btn-sm">Alternative</button>
					</div>

					<div className="space-x-4 mt-8">
						<span className="text-slate-400 text-xs">Large</span>
						<button className="btn btn-lg">Default</button>
						<button className="btn btn-primary btn-lg">Primary</button>
						<button className="btn btn-secondary btn-lg">Secondary</button>
						<button className="btn btn-alt btn-lg">Alternative</button>
					</div>
				</DemoCard>


				<DemoCard title={'Buttons outline'}>
					<div className="space-x-4">
						<button className="btn btn-outline">Default</button>
						<button className="btn btn-primary btn-outline">Primary</button>
						<button className="btn btn-secondary btn-outline">Secondary</button>
						<button className="btn btn-alt btn-outline">Alternative</button>
					</div>
				</DemoCard>


				<DemoCard title={'Buttons rounded'}>
					<div className="space-x-4">
						<button className="btn rounded-full">Default</button>
						<button className="btn btn-primary rounded-full">Primary</button>
						<button className="btn btn-secondary rounded-full">Secondary</button>
						<button className="btn btn-alt rounded-full">Alternative</button>
					</div>
				</DemoCard>


				<DemoCard title={'Iconized buttons'}>
					<div className="flex gap-x-16">
						<div className="space-x-4">
							<button className="btn btn-primary btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>

							<button className="btn btn-primary btn-icon btn-outline">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>

							<button className="btn btn-primary btn-icon rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>
						</div>

						<div className="space-x-4">
							<button className="btn btn-secondary btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>

							<button className="btn btn-secondary btn-icon btn-outline">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>

							<button className="btn btn-secondary btn-icon rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>
						</div>

						<div className="space-x-4">

							<button className="btn btn-alt btn-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>

							<button className="btn btn-alt btn-icon btn-outline">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>

							<button className="btn btn-alt btn-icon rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
									<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
								</svg>
							</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Button group'}>
					<div className="flex gap-x-16">
						<div className="btn-group btn-group-primary">
							<button className="btn">One</button>
							<button className="btn">Two</button>
							<button className="btn">Three</button>
						</div>
						
						<div className="btn-group btn-group-secondary">
							<button className="btn">One</button>
							<button className="btn">Two</button>
							<button className="btn">Three</button>
						</div>

						<div className="btn-group btn-group-alt">
							<button className="btn">One</button>
							<button className="btn">Two</button>
							<button className="btn">Three</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Button group size'}>
					<div className="flex gap-x-16">
						<div className="space-x-4">
							<span className="text-slate-400 text-xs">Small</span>
							<div className="btn-group-sm btn-group-primary">
								<button className="btn">One</button>
								<button className="btn">Two</button>
								<button className="btn">Three</button>
							</div>
						</div>
						
						<div className="btn-group-sm btn-group-secondary">
							<button className="btn">One</button>
							<button className="btn">Two</button>
							<button className="btn">Three</button>
						</div>

						<div className="btn-group-sm btn-group-alt">
							<button className="btn">One</button>
							<button className="btn">Two</button>
							<button className="btn">Three</button>
						</div>
					</div>


					<div className="flex gap-x-16 mt-8">
						<div className="space-x-4">
							<span className="text-slate-400 text-xs">Large</span>
							<div className="btn-group-lg btn-group-primary">
								<button className="btn">One</button>
								<button className="btn">Two</button>
								<button className="btn">Three</button>
							</div>
						</div>
					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}