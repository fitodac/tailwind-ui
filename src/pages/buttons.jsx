import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'

const class_primary = 'bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white'
const class_secondary = 'bg-secondary border-secondary text-white dark:bg-secondary dark:border-secondary dark:text-white'
const class_alt = 'bg-alt border-alt text-white dark:bg-alt dark:border-alt dark:text-white'


const class_primary_outline = `bg-primary border-primary text-primary bg-opacity-10 hover:bg-primary hover:text-white 
																dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 dark:hover:bg-primary dark:hover:text-white`
const class_secondary_outline = `bg-secondary border-secondary text-secondary bg-opacity-10 hover:bg-secondary hover:text-white 
																	dark:bg-secondary dark:border-secondary dark:text-secondary dark:bg-opacity-10 dark:hover:bg-secondary dark:hover:text-white`
const class_alt_outline = `bg-alt border-alt text-alt bg-opacity-10 hover:bg-alt hover:text-white 
														dark:bg-alt dark:border-alt dark:text-alt dark:bg-opacity-10 dark:hover:bg-alt dark:hover:text-white`


const class_ghost_primary = `bg-primary text-primary hover:text-white dark:bg-primary dark:text-primary dark:hover:text-white`
const class_ghost_secondary = `bg-secondary text-secondary hover:text-white dark:bg-secondary dark:text-secondary dark:hover:text-white`
const class_ghost_alt = `bg-alt text-alt-600 hover:text-white dark:bg-alt dark:bg-alt dark:text-alt-600 dark:hover:text-white`


const class_toggler = 'peer-checked:bg-opacity-70 peer-checked:border-opacity-5'



export default function PageButtons(){
	return (
		<Layout>
			<PageHeader title="Buttons" />

			<div className="space-y-7">

				<DemoCard title={'Buttons'} code="Code_Buttons">
					<div className="grid gap-4 md:flex">
						<div>
							<button className="btn">Default</button>
						</div>

						<div>
							<button className={`btn ${class_primary}`}>Primary</button>
						</div>

						<div>
							<button className={`btn ${class_secondary}`}>Secondary</button>
						</div>

						<div>
							<button className={`btn ${class_alt}`}>Alternative</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Button size'} code="Code_ButtonsSizes">
					<div className="grid gap-4 md:flex">
						<span className="text-slate-400 text-xs">Small</span>
						<div>
							<button className="btn btn-sm">Default</button>
						</div>
						<div>
							<button className={`btn btn-sm ${class_primary}`}>Primary</button>
						</div>
						<div>
							<button className={`btn btn-sm ${class_secondary}`}>Secondary</button>
						</div>
						<div>
							<button className={`btn btn-sm ${class_alt}`}>Alternative</button>
						</div>
					</div>

					<div className="grid gap-4 md:flex mt-8">
						<span className="text-slate-400 text-xs">Large</span>
						<div>
							<button className="btn btn-lg">Default</button>
						</div>
						<div>
							<button className={`btn btn-lg ${class_primary}`}>Primary</button>
						</div>
						<div>
							<button className={`btn btn-lg ${class_secondary}`}>Secondary</button>
						</div>
						<div>
							<button className={`btn btn-lg ${class_alt}`}>Alternative</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Outline buttons'} code="Code_ButtonsOutline">
					<div className="grid gap-4 md:flex">
						<div>
							<button className={`btn bg-opacity-20 hover:bg-opacity-100 dark:bg-opacity-20 dark:hover:bg-opacity-100`}>Default</button>
						</div>
						<div>
							<button className={`btn ${class_primary_outline}`}>Primary</button>
						</div>
						<div>
							<button className={`btn ${class_secondary_outline}`}>Secondary</button>
						</div>
						<div>
							<button className={`btn ${class_alt_outline}`}>Alternative</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Ghost buttons'} code="Code_ButtonsGhost">
					<div className="grid gap-4 md:flex">
						<div>
							<button className="btn ghost">Default</button>
						</div>
						<div>
							<button className={`btn ghost ${class_ghost_primary}`}>Primary</button>
						</div>
						<div>
							<button className={`btn ghost ${class_ghost_secondary}`}>Secondary</button>
						</div>
						<div>
							<button className={`btn ghost ${class_ghost_alt}`}>Alternative</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Buttons rounded'} code="Code_ButtonsRounded">
					<div className="grid gap-4 md:flex">
						<div>
							<button className="btn rounded-full">Default</button>
						</div>
						<div>
							<button className={`btn ${class_primary} rounded-full`}>Primary</button>
						</div>
						<div>
							<button className={`btn ${class_secondary} rounded-full`}>Secondary</button>
						</div>
						<div>
							<button className={`btn ${class_alt} rounded-full`}>Alternative</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Iconized buttons'} code="Code_ButtonsIconized">
					<div className="flex gap-16 sm:grid sm:gap-10 lg:flex xl:gap-20">
						<div className="grid gap-4 md:flex">
							<div>
								<button className={`btn btn-icon ${class_primary}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon group ${class_primary_outline}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-primary group-hover:fill-white">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon ghost group ${class_ghost_primary}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-primary group-hover:fill-white">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon ${class_primary} rounded-full`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>
						</div>


						<div className="grid gap-4 md:flex">
							<div>
								<button className={`btn btn-icon ${class_secondary}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon group ${class_secondary_outline}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-secondary group-hover:fill-white">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon ghost group ${class_ghost_secondary}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-secondary group-hover:fill-white">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon ${class_secondary} rounded-full`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>
						</div>


						<div className="grid gap-4 md:flex">
							<div>
								<button className={`btn btn-icon ${class_alt}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon group ${class_alt_outline}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-alt group-hover:fill-white">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon ghost group ${class_ghost_alt}`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-alt group-hover:fill-white">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>

							<div>
								<button className={`btn btn-icon ${class_alt} rounded-full`}>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Icon + text'} code="Code_ButtonsIconText">
					<div className="space-x-4">
						<button className={`btn space-x-2 ${class_primary}`}>
							<i className="ri-message-2-line"></i>
							<span>Before</span>
						</button>

						<button className={`btn space-x-2 ${class_secondary}`}>
							<span>After</span>
							<i className="ri-sound-module-line"></i>
						</button>

						<button className={`btn space-x-2 ${class_alt}`}>
							<i className="ri-error-warning-line"></i>
							<span>Double</span>
							<i className="ri-arrow-right-line"></i>
						</button>

					</div>
				</DemoCard>


				<DemoCard title={'Button toggler'} code="Code_ButtonsToggler">
					<div className="space-x-4">
						<label className="btn-toggler">
							<input type="checkbox" className="peer" />
							<span className={`btn ${class_toggler}`}>Default</span>
						</label>

						<label className="btn-toggler">
							<input type="checkbox" className="peer" />
							<span className={`btn ${class_primary} ${class_toggler}`}>Primary</span>
						</label>

						<label className="btn-toggler">
							<input type="checkbox" className="peer" />
							<span className={`btn ${class_secondary} ${class_toggler}`}>Secondary</span>
						</label>

						<label className="btn-toggler">
							<input type="checkbox" className="peer" />
							<span className={`btn ${class_alt} ${class_toggler}`}>Alternative</span>
						</label>
					</div>
				</DemoCard>


				<DemoCard title={'Button group'} code="Code_ButtonsGroup">
					<div className="flex gap-x-16">
						<div className="btn-group">
							<button className={`btn ${class_primary}`}>One</button>
							<button className={`btn ${class_primary}`}>Two</button>
							<button className={`btn ${class_primary}`}>Three</button>
						</div>
						
						<div className="btn-group">
							<button className={`btn ${class_secondary}`}>One</button>
							<button className={`btn ${class_secondary}`}>Two</button>
							<button className={`btn ${class_secondary}`}>Three</button>
						</div>

						<div className="btn-group">
							<button className={`btn ${class_alt}`}>One</button>
							<button className={`btn ${class_alt}`}>Two</button>
							<button className={`btn ${class_alt}`}>Three</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Button group size'} code="Code_ButtonsGroupSize">
					<div className="flex gap-x-16">
						<div className="space-x-4">
							<span className="text-slate-400 text-xs">Small</span>
							<div className="btn-group-sm">
								<button className={`btn ${class_primary}`}>One</button>
								<button className={`btn ${class_primary}`}>Two</button>
								<button className={`btn ${class_primary}`}>Three</button>
							</div>
						</div>
						
						<div className="btn-group-sm">
							<button className={`btn ${class_secondary}`}>One</button>
							<button className={`btn ${class_secondary}`}>Two</button>
							<button className={`btn ${class_secondary}`}>Three</button>
						</div>

						<div className="btn-group-sm">
							<button className={`btn ${class_alt}`}>One</button>
							<button className={`btn ${class_alt}`}>Two</button>
							<button className={`btn ${class_alt}`}>Three</button>
						</div>
					</div>


					<div className="flex gap-x-16 mt-8">
						<div className="space-x-4">
							<span className="text-slate-400 text-xs">Large</span>
							<div className="btn-group-lg">
								<button className={`btn ${class_primary}`}>One</button>
								<button className={`btn ${class_primary}`}>Two</button>
								<button className={`btn ${class_primary}`}>Three</button>
							</div>
						</div>
					</div>
				</DemoCard>

			</div>
		</Layout>
	)
}