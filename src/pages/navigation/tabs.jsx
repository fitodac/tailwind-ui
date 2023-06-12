import { useState, useEffect } from 'react'
import Image from 'next/image'

import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageTabs(){

	const [ tabs1, setTabs1 ] = useState(null)

	useEffect(() => {
		setTabs1('tab1')
	}, [])

	return (
		<Layout>
			<PageHeader 
				title="Tabs"
				breadcrumbs={[
					{ text: 'Navigation', link: '/navigation' }
				]} />

			<div className="space-y-7">
				<DemoCard title="Default">
					<div className="grid gap-10 md:grid-cols-2">
						<div>
							<nav className="tabs">
								<input type="radio" name="tabs-default" id="tab1" checked={tabs1 === 'tab1'} onChange={() => setTabs1('tab1')} />
								<label htmlFor="tab1" className="tab-item">Profile</label>
								<div className="tab-content">
									<h4 className="text-xl font-medium">Profile</h4>
									<p className="pt-3">Est sed vel ratione neque quos laboriosam. Numquam incidunt natus asperiores laborum delectus error iste. Exercitationem suscipit repellat nam voluptates.</p>
									<p className="pt-6">Architecto nostrum at nisi doloremque magnam blanditiis doloremque. Eligendi repudiandae voluptate dignissimos minima ad aspernatur provident tempore rem. Nulla exercitationem hic dolorem incidunt soluta hic maxime.</p>
								</div>
								
								<input type="radio" name="tabs-default" id="tab2" checked={tabs1 === 'tab2'} onChange={() => setTabs1('tab2')} />
								<label htmlFor="tab2" className="tab-item">Account</label>
								<div className="tab-content">
									<h4 className="text-xl font-medium">Account</h4>
									<p className="pt-3">Eligendi deleniti blanditiis. Culpa et similique minima autem facilis voluptates molestiae corporis. Quia molestias provident quisquam rerum minima culpa at.</p>
									<p className="pt-6">Facere exercitationem eos eveniet. Quibusdam exercitationem quas aut saepe vel amet ipsam deleniti aspernatur. Veniam repellendus facilis voluptatum at vero sit delectus tempora.</p>
								</div>
								
								<input type="radio" name="tabs-default" id="tab3" checked={tabs1 === 'tab3'} onChange={() => setTabs1('tab3')} />
								<label htmlFor="tab3" className="tab-item">Notification</label>
								<div className="tab-content">
									<h4 className="text-xl font-medium">Notification</h4>
									<p className="pt-3">Cumque non eaque blanditiis repellat perferendis nihil dolorem. Quae beatae asperiores perferendis alias nam libero suscipit optio repellat. Natus labore alias tenetur illum iusto possimus nihil.</p>
									<p className="pt-6">Temporibus officia voluptates sint vitae consequatur doloremque nostrum earum cumque. Non hic alias amet nam quam voluptatum ipsam eius voluptatum. Cupiditate voluptas voluptatum temporibus tempore unde incidunt.</p>
								</div>
							</nav>
						</div>
					</div>
				</DemoCard>

			</div>
		</Layout>
	)
}