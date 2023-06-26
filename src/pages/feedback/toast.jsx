import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageModal(){

	const hideAllToasts = e => {
		const cur = e.target.id
		document.querySelectorAll('[id^=toast][type=checkbox]').forEach(e => {
			if( e.id !== cur ) e.checked = false
		})
	}

	return(
		<Layout>
			<PageHeader 
				title="Toaster"
				breadcrumbs={[
					{ text: 'Feedback', link: null }
				]} />

			<div className="space-y-7">
				<DemoCard title={'Default'}>
					<div className="space-y-2">
						<label 
							className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
												hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
							htmlFor="toast1">
							Open toast
						</label>

						<div className="text-sm">Click the toast to close it.</div>
					</div>

					<input type="checkbox" id="toast1" className="hidden" onChange={hideAllToasts} />

					<label htmlFor="toast1" className="toast">
						<div className="font-semibold">Account updated</div>
						<div className="text-xs">Your email address has been changed</div>
					</label>
				</DemoCard>


				<DemoCard title={'Closable'}>
					<label 
						className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
											hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
						htmlFor="toast2">
						Open toast
					</label>

					<input type="checkbox" id="toast2" className="hidden" onChange={hideAllToasts} />

					<div className="toast">
						<div className="flex justify-between">
							<div className="font-semibold">User invited</div>
							<label htmlFor="toast2" className="btn btn-link">
								<i className="ri-close-line"></i>
							</label>
						</div>
						
						<div className="text-xs mt-2">You're invited John Doe to your team</div>
					</div>
				</DemoCard>


				<DemoCard title={'Status'}>
					<div className="space-x-3">
						<label 
							className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
												hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
							htmlFor="toast3">
							Iconized toast
						</label>

						<label 
							className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
												hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
							htmlFor="toast4">
							Status color
						</label>
					</div>


					<input type="checkbox" id="toast3" className="hidden" onChange={hideAllToasts} />

					<label htmlFor="toast3" className="toast">
						<div className="flex gap-x-3 items-center">
							<div className="">
								<i className="ri-mail-check-fill text-green-500 text-4xl"></i>
							</div>

							<div className="">
								<div className="font-semibold">Congratulations</div>
								<div className="text-sm">Your message was sent successfully</div>
							</div>
						</div>
					</label>


					<input type="checkbox" id="toast4" className="hidden" onChange={hideAllToasts} />

					<label htmlFor="toast4" className="toast bg-red-300 text-red-700">
						<div className="flex gap-x-3 items-center">
							<div className="">
								<i className="ri-error-warning-fill text-red-700 text-4xl"></i>
							</div>

							<div className="">
								<div className="font-semibold">Uh oh, something went wrong</div>
								<div className="text-xs">Sorry, there was a problem with your request</div>
							</div>
						</div>
					</label>
				</DemoCard>


				<DemoCard title={'Position'}>
					<div className="space-x-2">
						<label 
							className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
												hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
							htmlFor="toast5">
							Top left
						</label>

						<label 
							className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
												hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
							htmlFor="toast6">
							Top right
						</label>

						<label 
							className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
												hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
							htmlFor="toast7">
							Bottom left
						</label>

						<label 
							className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white
												hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
							htmlFor="toast8">
							Bottom center
						</label>
					</div>


					<input type="checkbox" id="toast5" className="hidden" onChange={hideAllToasts} />
					
					<label htmlFor="toast5" className="toast top-2 left-2">
						<div className="flex gap-x-2 items-center">
							<div className="">
								<i class="ri-arrow-left-up-line text-4xl opacity-30"></i>
							</div>
							<div className="">
								<div className="font-semibold">Top left toast</div>
								<div className="text-xs text-slate-300 dark:text-slate-400">Flexible position available</div>
							</div>
						</div>
					</label>

					<input type="checkbox" id="toast6" className="hidden" onChange={hideAllToasts} />

					<label htmlFor="toast6" className="toast top-2 right-2">
						<div className="flex gap-x-2 items-center">
							<div className="">
								<div className="font-semibold">Top right toast</div>
								<div className="text-xs text-slate-300 dark:text-slate-400">Flexible position available</div>
							</div>
							<div className="">
								<i class="ri-arrow-right-up-line text-4xl opacity-30"></i>
							</div>
						</div>
					</label>

					<input type="checkbox" id="toast7" className="hidden" onChange={hideAllToasts} />

					<label htmlFor="toast7" className="toast bottom-2 left-2">
						<div className="flex gap-x-2 items-center">
							<div className="">
								<i class="ri-arrow-left-down-line text-4xl opacity-30"></i>
							</div>
							<div className="">
								<div className="font-semibold">Bottom left toast</div>
								<div className="text-xs text-slate-300 dark:text-slate-400">Flexible position available</div>
							</div>
						</div>
					</label>

					<input type="checkbox" id="toast8" className="hidden" onChange={hideAllToasts} />

					<label htmlFor="toast8" className="toast bottom-2 right-2">
						<div className="flex gap-x-2 items-center">
							<div className="">
								<div className="font-semibold">Bottom right toast</div>
								<div className="text-xs text-slate-300 dark:text-slate-400">Flexible position available</div>
							</div>
							<div className="">
								<i class="ri-arrow-right-down-line text-4xl opacity-30"></i>
							</div>
						</div>
					</label>

				</DemoCard>
			</div>
		</Layout>)
}