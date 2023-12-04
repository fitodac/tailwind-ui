import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageTags(){
	return(
		<Layout>
			<PageHeader title="Badges" />

			<div className="space-y-7">
				<DemoCard title={'Basic badge'} code="Code_BadgesBasic">
					<div className="space-x-4">
						<span className="badge">Badge</span>
						<span className="badge bg-primary border-primary">Primary</span>
						<span className="badge bg-secondary border-secondary">Secondary</span>
						<span className="badge bg-alt-400 border-alt-400 text-alt-900">Alternative</span>
					</div>
				</DemoCard>


				<DemoCard title={'Rounded badge'} code="Code_BadgesRounded">
					<div className="space-x-4">
						<span className="badge rounded-full">Badge</span>
						<span className="badge bg-primary border-primary rounded-full">Primary</span>
						<span className="badge bg-secondary border-secondary rounded-full">Secondary</span>
						<span className="badge bg-alt-400 border-alt-400 text-alt-900 rounded-full">Alternative</span>
					</div>
				</DemoCard>


				<DemoCard title={'Outline badge'} code="Code_BadgesOutline">
					<div className="space-x-4">
						<span className="badge bg-transparent bg-opacity-60 text-slate-400">Badge</span>
						<span className="badge bg-transparent border-primary text-primary">Primary</span>
						<span className="badge bg-transparent border-secondary text-secondary">Secondary</span>
						<span className="badge bg-transparent border-alt text-alt">Alternative</span>
					</div>
				</DemoCard>


				<DemoCard title={'Ghost badge'} code="Code_BadgesGhost">
					<div className="space-x-4">
						<span className="badge ghost text-slate-500">Badge</span>
						<span className="badge ghost bg-primary border-primary text-primary">Primary</span>
						<span className="badge ghost bg-secondary border-secondary text-secondary">Secondary</span>
						<span className="badge ghost bg-alt border-alt text-alt-800">Alternative</span>
					</div>
				</DemoCard>


				<DemoCard title={'Custom badge'} code="Code_BadgesCustom">
					<div className="space-x-4">
						<span className="badge bg-green-600 border-green-600">Success</span>
						<span className="badge bg-yellow-600 border-yellow-600">Warning</span>
						<span className="badge bg-red-700 border-red-700">Danger</span>
						<span className="badge bg-sky-500 border-sky-500">Info</span>
					</div>
				</DemoCard>


				<DemoCard title={'Badge uses'}>
					<div className="grid grid-cols-2 gap-10">
						
						<div className="">
							<p>
								Take five, punch the tree, and come back in here with a clear 
								<span className="badge bg-secondary border-secondary mx-1">head</span> 
								lose client to 10:00 meeting. Hit the ground running open door policy 
								teams were able to drive adoption and awareness out of scope, and 
								keep it lean, or we need a paradigm shift. 
								<span className="badge bg-green-600 border-green-600 ml-2">Wohoo!!</span>
							</p>
						</div>

						<div className="space-x-4">
							<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Button <span className="badge ghost bg-white border-white text-white rounded-full ml-3">8K</span>
							</button>

							<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Button <span className="badge bg-white border-white text-primary rounded-full ml-3">+99</span>
							</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Dot badges'} code="Code_BadgesDot">
					<div className="flex gap-16">
						<div className="bg-slate-100 border border-slate-300 w-14 h-14 rounded-md relative dark:bg-slate-800 dark:border-slate-900">
							<div className="dot-badge -left-0.5"></div>
						</div>

						<div className="bg-slate-100 border border-slate-300 w-14 h-14 rounded-md relative dark:bg-slate-800 dark:border-slate-900">
							<div className="dot-badge"></div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Notification'} code="Code_BadgesNotification">
					<div className="grid grid-cols-3">
						
						<div className="">
							<div className="inline-block relative">
								<button className="btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
									Action required
								</button>
								<div className="dot-badge animate-pulse"></div>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<span className="text-red-600">You have many messages</span>
							<span className="badge bg-red-600 border-red-600 rounded-full animate-pulse">+99</span>
						</div>

					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}