import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'

export default function PageInput(){

	return(
		<Layout>
			<PageHeader 
				title="Inputs" 
				breadcrumbs={[
					{ text: 'Forms', link: null }
				]} />

			<div className="text-slate-400 text-sm font-light mb-10">
				The form components have been designed with a minimalist aesthetic that perfectly fits any project. Every detail has been taken care of to ensure that the components are highly customizable and seamlessly integrate into any design.
			</div>

			<div className="space-y-7">
				<DemoCard title={'Basic'} code="Code_Input">
					<div className="grid grid-cols-3 gap-6">
						<div className="space-y-1">
							<label>Basic</label>
							<input type="text" placeholder="Insert text here..." defaultValue="" />
						</div>

						<div className="space-y-1">
							<label>Disabled</label>
							<input type="text" placeholder="This is not allowed" defaultValue="" disabled />
						</div>

						<div className="space-y-1">
							<label>Read only</label>
							<input type="text" defaultValue="This is only FYI" readOnly />
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Helper text'} code="Code_Helper">
					<div className="grid grid-cols-3 gap-6">
						<div className="space-y-1">
							<label>Basic helper text</label>
							<input type="text" placeholder="..." defaultValue="" />
							<div className="input-helper">Please, write a cool username above</div>
						</div>

						<div className="space-y-1">
							<label>Helper text at right</label>
							<input type="text" placeholder="..." defaultValue="" />
							<div className="input-helper text-right">The helper text could be at right too</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Validation states'} code="Code_Validation">
					<div className="grid grid-cols-3 gap-6">
						<div className="space-y-1">
							<input type="text" defaultValue="Success!!" className="input-valid" />
							<div className="input-helper input-helper-valid">
								<i className="ri-thumb-up-line"></i> Your request was approved
							</div>
						</div>

						<div className="space-y-1">
							<input type="text" defaultValue="Sad response :(" className="input-error" />
							<div className="input-helper input-helper-error">
								<i className="ri-alert-line"></i> We're sorry, your request wasn't approved
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Input groups'} code="Code_InputGroups">
					<div className="grid grid-cols-2 gap-10">
						<div className="space-y-1">
							<label>Basic</label>
							<div className="input-group">
								<input type="text" placeholder="Find your product..." defaultValue="" />
								<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Search</button>
							</div>
						</div>

						<div className="space-y-1">
							<label>Inset</label>
							<div className="input-group-inset">
								<input type="text" placeholder="somebody@gmail.com" defaultValue="" />
								<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Ok</button>
								<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Cancel</button>
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Input addons'} code="Code_InputAddons">
					<div className="content text-slate-500 text-sm font-light">
						Different input group combinations with icons.
					</div>

					<div className="w-1/2 grid gap-6 mt-5">
						<div className="space-y-1">
							<div className="input-group">
								<span>
									<svg 
										className="w-7 fill-primary"
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 24 24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
									</svg>
								</span>
								<input type="text" placeholder="Instagram account" defaultValue="" />
								<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Follow</button>
							</div>

							<div className="input-helper">Icon / input / button</div>
						</div>

						<div className="space-y-1">
							<div className="input-group">
								<input type="text" placeholder="Change your password" defaultValue="" />
								<span>
									<svg 
										className="w-7 fill-primary"
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 24 24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527z"/>
									</svg>
								</span>
							</div>

							<div className="input-helper">Input / icon</div>
						</div>

						<div className="space-y-1">
							<div className="input-group">
								<input type="text" placeholder="email address" />
								<span>
									<svg 
										className="w-6 fill-slate-400"
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 24 24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8H17v5.5a1.5 1.5 0 0 0 3 0V12zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
									</svg>
								</span>
								<input type="text" placeholder="company name" defaultValue="" />
								<span>.com</span>
							</div>

							<div className="input-helper">Input / icon / input</div>
						</div>

						<div className="space-y-1">
							<div className="input-group-inset">
								<input type="text" placeholder="Search for happiness" defaultValue="" />

								<div>
									<svg 
										className="h-6 fill-primary"
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 24 24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
									</svg>
								</div>
							</div>

							<div className="input-helper">Group inset with icon</div>
						</div>

						<div className="space-y-1">
							<div className="input-group-inset">
								<span>
									<svg 
										className="h-6 fill-slate-400"
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 24 24">
										<path fill="none" d="M0 0h24v24H0z"/>
										<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-4H8V8h3V6h2v2h1a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-2 4h-1v2h-2v-2zm-1-3v1h4a.5.5 0 1 0 0-1h-4zm0-3v1h4a.5.5 0 1 0 0-1h-4z"/>
									</svg>
								</span>
								<input type="text" placeholder="BTC to USD" defaultValue="" />
								<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">Calculate</button>
							</div>

							<div className="input-helper">Group inset, icon and button</div>
						</div>
					</div>
				</DemoCard>
			</div>

		</Layout>
	)
}