import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageModal(){
	return(
		<Layout>
			<PageHeader 
				title="Modal"
				breadcrumbs={[
					{ text: 'Feedback', link: null }
				]} />

			<div className="space-y-7">
				<DemoCard title={'Default'}>
					<label 
						className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
											hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
						htmlFor="modal1">
						Open modal
					</label>

					<input type="checkbox" id="modal1" className="hidden" />

					<div className="overlay">
						<div className="modal max-w-md space-y-3 p-5">
							<div className="font-semibold flex justify-between">
								<div className="text-primary text-lg">The modal box</div>
								<label htmlFor="modal1" className="btn btn-link">
									<i class="ri-close-line"></i>
								</label>
							</div>

							<div className="space-y-3">
								<div className="font-medium">Create a simple modal box using html and css only.</div>
								<div className="text-slate-400 text-sm dark:text-slate-500">You don't need extra javascript functions to launch a basic modal box when you can do it only using the power of html and css.</div>
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Cancel button'}>
					<label 
						className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
											hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
						htmlFor="modal2">
						Open modal
					</label>

					<input type="checkbox" id="modal2" className="hidden" />

					<div className="overlay">
						<div className="modal w-full space-y-3 p-5 md:w-96">
							<div className="font-semibold flex justify-between">
								<div className="text-primary text-lg">Subscribe now</div>
								<label htmlFor="modal2" className="btn btn-link">
									<i class="ri-close-line"></i>
								</label>
							</div>

							<div className="space-y-3">
								<div className="text-sm font-medium">Enter your email to subscribe our newsletter</div>
								<input type="text" placeholder="email here!" defaultValue="" />
								<div className="text-slate-400 text-sm dark:text-slate-500">...or click CANCEL to close this modal box</div>
							</div>

							<div className="mt-5 flex flex-col gap-3 md:flex-row">
								<div className="flex-1 md:order-2">
									<button className="btn bg-primary border-primary text-white w-full dark:bg-primary dark:border-primary dark:text-white
															hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white">Submit</button>
								</div>

								<div className="flex-1">
									<label className="btn w-full" htmlFor="modal2">Cancel</label>
								</div>
								
							</div>
						</div>
					</div>
				</DemoCard>
			</div>
		</Layout>)
}