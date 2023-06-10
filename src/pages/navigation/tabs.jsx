import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageTabs(){
	return (
		<Layout>
			<PageHeader 
				title="Tabs"
				breadcrumbs={[
					{ text: 'Navigation', link: '/navigation' }
				]} />

			<div className="space-y-7">
				<DemoCard title="Default"></DemoCard>

			</div>
		</Layout>
	)
}