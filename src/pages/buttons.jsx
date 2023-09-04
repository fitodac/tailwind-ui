import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'

const class_primary = 'bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white'
const class_secondary = 'bg-secondary border-secondary text-white dark:bg-secondary dark:border-secondary dark:text-white'
const class_alt = 'bg-alt border-alt text-white dark:bg-alt dark:border-alt dark:text-white'

const class_primary_outline = 'bg-primary border-primary text-primary bg-opacity-5 hover:bg-primary hover:text-white'
const class_secondary_outline = 'bg-secondary border-secondary text-secondary bg-opacity-5 hover:bg-secondary hover:text-white'
const class_alt_outline = 'bg-alt border-alt text-alt bg-opacity-5 hover:bg-alt hover:text-white'

const class_ghost_primary = 'bg-primary border-primary text-primary dark:bg-primary --dark:border-primary --dark:text-primary'
const class_ghost_secondary = 'bg-secondary border-secondary text-secondary dark:bg-secondary --dark:border-secondary --dark:text-secondary'
const class_ghost_alt = 'bg-alt border-alt text-alt-600 dark:bg-alt --dark:border-alt --dark:text-alt'


export default function PageButtons(){
	return (
		<Layout>
			<PageHeader title="Buttons" />

			<div className="space-y-7">
				<DemoCard title={'Buttons'}>
					<div className="space-x-4">
						<button className="btn">Default</button>
						<button className={`btn ${class_primary}`}>Primary</button>
						<button className={`btn ${class_secondary}`}>Secondary</button>
						<button className={`btn ${class_alt}`}>Alternative</button>
					</div>
				</DemoCard>
				
				<DemoCard title={'Button size'}>
					<div className="space-x-4">
						<span className="text-slate-400 text-xs">Small</span>
						<button className="btn btn-sm">Default</button>
						<button className={`btn btn-sm ${class_primary}`}>Primary</button>
						<button className={`btn btn-sm ${class_secondary}`}>Secondary</button>
						<button className={`btn btn-sm ${class_alt}`}>Alternative</button>
					</div>

					<div className="space-x-4 mt-8">
						<span className="text-slate-400 text-xs">Large</span>
						<button className="btn btn-lg">Default</button>
						<button className={`btn btn-lg ${class_primary}`}>Primary</button>
						<button className={`btn btn-lg ${class_secondary}`}>Secondary</button>
						<button className={`btn btn-lg ${class_alt}`}>Alternative</button>
					</div>
				</DemoCard>


				<DemoCard title={'Outline buttons'}>
					<div className="space-x-4">
						<button className={`btn btn-outline`}>Default</button>
						<button className={`btn btn-outline ${class_primary_outline}`}>Primary</button>
						<button className={`btn btn-outline ${class_secondary_outline}`}>Secondary</button>
						<button className={`btn btn-outline ${class_alt_outline}`}>Alternative</button>
					</div>
				</DemoCard>


				<DemoCard title={'Ghost buttons'}>
					<div className="space-x-4">
						<button className="btn ghost">Default</button>
						<button className={`btn ghost ${class_ghost_primary}`}>Primary</button>
						<button className={`btn ghost ${class_ghost_secondary}`}>Secondary</button>
						<button className={`btn ghost ${class_ghost_alt}`}>Alternative</button>
					</div>
				</DemoCard>


				<DemoCard title={'Buttons rounded'}>
					<div className="space-x-4">
						<button className="btn rounded-full">Default</button>
						<button className={`btn ${class_primary} rounded-full`}>Primary</button>
						<button className={`btn ${class_secondary} rounded-full`}>Secondary</button>
						<button className={`btn ${class_alt} rounded-full`}>Alternative</button>
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


				<DemoCard title={'Icon + text'}>
					<div className="space-x-4">
						<button className="btn btn-primary space-x-2">
							<i className="ri-message-2-line"></i>
							<span>Before</span>
						</button>

						<button className="btn btn-secondary space-x-2">
							<span>After</span>
							<i className="ri-sound-module-line"></i>
						</button>

						<button className="btn btn-alt space-x-2">
							<i className="ri-error-warning-line"></i>
							<span>Double</span>
							<i className="ri-arrow-right-line"></i>
						</button>

					</div>
				</DemoCard>


				<DemoCard title={'Button toggler'}>
					<div className="space-x-4">
						<label className="btn-toggler">
							<input type="checkbox" />
							<span className="btn">Default</span>
						</label>

						<label className="btn-toggler">
							<input type="checkbox" />
							<span className="btn btn-primary">Primary</span>
						</label>

						<label className="btn-toggler">
							<input type="checkbox" />
							<span className="btn btn-secondary">Secondary</span>
						</label>

						<label className="btn-toggler">
							<input type="checkbox" />
							<span className="btn btn-alt">Alternative</span>
						</label>
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