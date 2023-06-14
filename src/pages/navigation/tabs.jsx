import { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'

import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'

const content = [
	{
		id: 'tab1',
		tab: 'Profile',
		content: {
			title: 'Profile',
			p1: `Est sed vel ratione neque quos laboriosam. Numquam incidunt natus asperiores laborum delectus error iste. Exercitationem suscipit repellat nam voluptates.`,
			p2: `Architecto nostrum at nisi doloremque magnam blanditiis doloremque. Eligendi repudiandae voluptate dignissimos minima ad aspernatur provident tempore rem. Nulla exercitationem hic dolorem incidunt soluta hic maxime.`
		},
		icon: 'ri-user-3-line'
	},
	{
		id: 'tab2',
		tab: 'Account',
		content: {
			title: 'Account',
			p1: `Eligendi deleniti blanditiis. Culpa et similique minima autem facilis voluptates molestiae corporis. Quia molestias provident quisquam rerum minima culpa at.`,
			p2: `Facere exercitationem eos eveniet. Quibusdam exercitationem quas aut saepe vel amet ipsam deleniti aspernatur. Veniam repellendus facilis voluptatum at vero sit delectus tempora.`
		},
		icon: 'ri-chat-smile-2-line'
	},
	{
		id: 'tab3',
		tab: 'Notification',
		content: {
			title: 'Notification',
			p1: `Cumque non eaque blanditiis repellat perferendis nihil dolorem. Quae beatae asperiores perferendis alias nam libero suscipit optio repellat. Natus labore alias tenetur illum iusto possimus nihil.`,
			p2: `Temporibus officia voluptates sint vitae consequatur doloremque nostrum earum cumque. Non hic alias amet nam quam voluptatum ipsam eius voluptatum. Cupiditate voluptas voluptatum temporibus tempore unde incidunt.`
		},
		icon: 'ri-notification-2-line'
	},
	{
		id: 'tab4',
		tab: 'Settings',
		content: {
			title: 'Settings',
			p1: `Facilis hic magni est architecto. Facilis id quibusdam quidem saepe dolores. Atque rerum ipsum nulla accusamus totam vero velit quis.`,
			p2: `Voluptatem omnis quasi eius earum voluptatum mollitia sapiente corrupti. Sapiente facilis exercitationem. Reprehenderit sunt eos omnis.`
		},
		icon: 'ri-settings-line'
	},
	{
		id: 'tab5',
		tab: 'Cart',
		content: {
			title: 'Cart',
			p1: `Porro unde quos fugit vel quo voluptates vero molestias ipsa. Tenetur amet laboriosam. Magni alias consequuntur.`,
			p2: `Eum est officia consequatur magni placeat sint ipsa iure. Praesentium eius aperiam quaerat incidunt tenetur impedit. Explicabo magni eligendi deleniti inventore tempore molestias deleniti voluptates sequi.`
		},
		icon: 'ri-shopping-cart-2-line'
	},
	{
		id: 'tab6',
		tab: 'Messages',
		content: {
			title: 'Messages',
			p1: `Numquam nobis dolor accusamus accusantium blanditiis adipisci nihil architecto quaerat. Ratione consequatur modi. Debitis recusandae tenetur odio suscipit praesentium.`,
			p2: `Asperiores iste mollitia ducimus delectus necessitatibus incidunt dignissimos voluptas. Accusamus eveniet iusto itaque omnis aliquid quam. Architecto cupiditate itaque facilis aperiam facere vitae unde quo vel.`
		},
		icon: 'ri-message-2-line'
	}
]

const keys1 = ['tab1_1', 'tab1_2', 'tab1_3']
const keys2 = ['tab2_1', 'tab2_2', 'tab2_3', 'tab2_4', 'tab2_5', 'tab2_6']
const keys3 = ['tab3_1', 'tab3_2', 'tab3_3']
const keys4 = ['tab4_1', 'tab4_2', 'tab4_3']
const keys5 = ['tab5_1', 'tab5_2', 'tab5_3', 'tab5_4', 'tab5_5']

export default function PageTabs(){

	const [ tabs1, setTabs1 ] = useState(null)
	const [ tabs2, setTabs2 ] = useState(null)
	const [ tabs3, setTabs3 ] = useState(null)
	const [ tabs4, setTabs4 ] = useState(null)
	const [ tabs5, setTabs5 ] = useState(null)

	useEffect(() => {
		setTabs1('tab1_1')
		setTabs2('tab2_1')
		setTabs3('tab3_1')
		setTabs4('tab4_1')
		setTabs5('tab5_1')
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
							<div className="tabs">
								{keys1.map((e,i) => (
									<input 
										key={Math.random().toString(16).substring(2)}
										type="radio" 
										name="tabs-default" 
										id={e} 
										checked={tabs1 === e}
										onChange={() => setTabs1(e)} />
								))}

								<nav className={`tabs-nav`}>
									{keys1.map((e,i) => (
										<Fragment key={Math.random().toString(16).substring(2)}>
											<label htmlFor={e} className="tab-item" data-tab={e}>{ content[i].tab }</label>
										</Fragment>
									))}
								</nav>

								<div className="tabs-content">
									{keys1.map((e,i) => (
										<Fragment key={Math.random().toString(16).substring(2)}>
											<div className="tab-body">
												<h4 className="text-xl font-medium">{ content[i].content.title }</h4>
												<p className="pt-3">{ content[i].content.p1 }</p>
												<p className="pt-6">{ content[i].content.p2 }</p>
											</div>
										</Fragment>)
									)}
								</div>
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title="Many tabs">
					<div className="max-w-xl">
						<div className="tabs">
							{keys2.map((e,i) => (
								<input 
									key={Math.random().toString(16).substring(2)}
									type="radio" 
									name="tabs-manyTabs" 
									id={e} 
									checked={tabs2 === e}
									onChange={() => setTabs2(e)} />
							))}

							<nav className={`tabs-nav`}>
								{keys2.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<label htmlFor={e} className="tab-item" data-tab={e}>{ content[i].tab }</label>
									</Fragment>
								))}
							</nav>

							<div className="tabs-content">
								{keys2.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<div className="tab-body">
											<h4 className="text-xl font-medium">{ content[i].content.title }</h4>
											<p className="pt-3">{ content[i].content.p1 }</p>
											<p className="pt-6">{ content[i].content.p2 }</p>
										</div>
									</Fragment>)
								)}
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title="Left tabs">
					<div className="max-w-xl">
						<div className="tabs tabs-vertical">
							{keys3.map((e,i) => (
								<input 
									key={Math.random().toString(16).substring(2)}
									type="radio" 
									name="tabs-left" 
									id={e} 
									checked={tabs3 === e}
									onChange={() => setTabs3(e)} />
							))}

							<nav className={`tabs-nav`}>
								{keys3.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<label htmlFor={e} className="tab-item" data-tab={e}>{ content[i].tab }</label>
									</Fragment>
								))}
							</nav>

							<div className="tabs-content">
								{keys3.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<div className="tab-body">
											<h4 className="text-xl font-medium">{ content[i].content.title }</h4>
											<p className="pt-3">{ content[i].content.p1 }</p>
											<p className="pt-6">{ content[i].content.p2 }</p>
										</div>
									</Fragment>)
								)}
							</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title="Right tabs">
					<div className="max-w-xl">
						<div className="tabs tabs-vertical">
							{keys4.map((e,i) => (
								<input 
									key={Math.random().toString(16).substring(2)}
									type="radio" 
									name="tabs-right" 
									id={e} 
									checked={tabs4 === e}
									onChange={() => setTabs4(e)} />
							))}

							<div className="tabs-content">
								{keys4.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<div className="tab-body">
											<h4 className="text-xl font-medium">{ content[i].content.title }</h4>
											<p className="pt-3">{ content[i].content.p1 }</p>
											<p className="pt-6">{ content[i].content.p2 }</p>
										</div>
									</Fragment>)
								)}
							</div>

							<nav className={`tabs-nav`}>
								{keys4.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<label htmlFor={e} className="tab-item" data-tab={e}>{ content[i].tab }</label>
									</Fragment>
								))}
							</nav>
						</div>
					</div>
				</DemoCard>


				<DemoCard title="Tabs with icons">
					<div className="max-w-xl">
						<div className="tabs">
							{keys5.map((e,i) => (
								<input 
									key={Math.random().toString(16).substring(2)}
									type="radio" 
									name="tabs-iconized" 
									id={e} 
									checked={tabs5 === e}
									onChange={() => setTabs5(e)} />
							))}

							<nav className={`tabs-nav`}>
								{keys5.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<label htmlFor={e} className="tab-item" data-tab={e}>
											<i className={`${content[i].icon} text-lg md:text-base`}></i>
											<span className="hidden md:inline">{ content[i].tab }</span>
										</label>
									</Fragment>
								))}
							</nav>

							<div className="tabs-content">
								{keys5.map((e,i) => (
									<Fragment key={Math.random().toString(16).substring(2)}>
										<div className="tab-body">
											<h4 className="text-xl font-medium">{ content[i].content.title }</h4>
											<p className="pt-3">{ content[i].content.p1 }</p>
											<p className="pt-6">{ content[i].content.p2 }</p>
										</div>
									</Fragment>)
								)}
							</div>
						</div>
					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}