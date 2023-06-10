import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'

export default function PageAvatar(){
	return(
		<Layout>
			<PageHeader title="Avatar" />

			<div className="space-y-7">
				<DemoCard title={'Default'}>
					<div className="flex gap-10">

						<div>
							<div className="avatar w-10">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

						<div>
							<div className="avatar w-16">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

						<div>
							<div className="avatar w-10 rounded-full">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

						<div>
							<div className="avatar w-16 rounded-full">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

					</div>
				</DemoCard>


				<DemoCard title={'Squircle'}>
					<div className="flex items-end gap-10">

						<div>
							<div className="avatar avatar-squircle w-8">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

						<div>
							<div className="avatar avatar-squircle w-12">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

						<div>
							<div className="avatar avatar-squircle w-16">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

						<div>
							<div className="avatar avatar-squircle w-20">
								<img src="/img/users/user-8.png" alt="user" />
							</div>
						</div>

					</div>
				</DemoCard>


				<DemoCard title={'Avatar group'}>
					<div className="grid gap-10 grid-cols-3">
						<div className="-space-x-4">
							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-7.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-6.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-5.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-4.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-3.png" alt="user" />
							</span>
						</div>


						<div className="-space-x-4">
							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-7.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-6.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-5.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-4.png" alt="user" />
							</span>

							<span className="avatar w-10 rounded-full">
								<img src="/img/users/user-3.png" alt="user" />
							</span>

							<span className="bg-slate-500 avatar w-10 rounded-full">
								<span className="text-white">+99</span>
							</span>
						</div>


						<div className="-space-x-3">
							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-7.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-6.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-5.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-4.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-3.png" alt="user" />
							</span>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Avatar group actions'}>
					<div className="grid gap-10 grid-cols-3">
						<div>
							<div className="-space-x-4 hover:space-x-1">
								<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-7.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-6.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-5.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-4.png" alt="user" />
							</span>

							<span className="avatar ring-4 ring-white w-10 rounded-full dark:ring-slate-700">
								<img src="/img/users/user-3.png" alt="user" />
							</span>
							</div>
						</div>

						<div>
							<span className="avatar w-14 ring-4 ring-transparent rounded-full cursor-pointer hover:ring-primary">
								<img src="/img/users/user-8.png" alt="user" />
							</span>
						</div>
					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}