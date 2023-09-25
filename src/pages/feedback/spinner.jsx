import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'

export default function PageSpinner(){
	return(
		<Layout>
			<PageHeader 
				title="Spinner"
				breadcrumbs={[
					{ text: 'Feedback', link: null }
				]} />

			<div className="space-y-7">
				<DemoCard title={'Default'}>
					<div className="flex gap-10 items-end">
						<span className="spinner w-4"></span>
						<span className="spinner w-8"></span>
						<span className="spinner"></span>
						<span className="spinner w-14"></span>
						<span className="spinner w-24">loading...</span>
					</div>
				</DemoCard>


				<DemoCard title={'Custom colors'}>
					<div className="flex gap-10 items-end">
						<span className="spinner border-l-secondary dark:border-l-secondary"></span>
						<span className="spinner border-l-alt dark:border-l-alt"></span>
						<span className="spinner border-l-teal-400 dark:border-l-teal-400"></span>
						<span className="spinner border-l-pink-400 dark:border-l-pink-400"></span>
					</div>
				</DemoCard>


				<DemoCard title={'Classic'}>
					<div className="spinner2 w-14 h-14"></div>
				</DemoCard>

			</div>
		</Layout>
	)
}