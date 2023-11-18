import { useEffect } from 'react'
import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'



export default function PageCustomSelect(){

	useEffect(() => {
		import('choices.js').then(Choices => {
			new Choices.default(document.getElementById('choicesBasic'), {
				searchEnabled: false,
				placeholder: true,
				itemSelectText: ''
			})

			new Choices.default(document.getElementById('choicesMultiple'), {
				searchEnabled: false,
				removeItemButton: true,
				itemSelectText: ''
			})

			new Choices.default(document.getElementById('choicesSearch'), {
			})

			new Choices.default(document.getElementById('choicesDisabled'), {
				searchEnabled: false,
				itemSelectText: ''
			})
		})
	}, [])

	return (
		<Layout>

			{/* <Choices /> */}

			<PageHeader 
				title="Inputs" 
				breadcrumbs={[
					{ text: 'Forms', link: null }
				]} />

			<div className="text-slate-400 text-sm font-light mb-10">
				<p>Teh custom select component depends of the <a href="https://choices-js.github.io/Choices/" target="_blank" className="text-primary">Choices.js</a> library.</p>

				<div className="content mt-3">
					<pre className="inline-flex">npm i --save-dev choices.js</pre>
				</div>
			</div>

			<div className="space-y-7">
				<DemoCard title={'Basic'} code="Code_SelectCustomBasic">
					<div className="grid grid-cols-4 gap-6">

						<div>
							<select id="choicesBasic">
								<option>Select one city</option>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
						</div>


						<div>
							<select id="choicesDisabled" disabled>
								<option>Select one city</option>
							</select>
						</div>

					</div>
				</DemoCard>


				<DemoCard title={'Multiple'}>
					<div className="grid grid-cols-2 gap-6">

						<div>
							<select id="choicesMultiple" multiple>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
						</div>


					</div>
				</DemoCard>


				<DemoCard title={'Search'}>
					<div className="grid grid-cols-4 gap-6">

						<div>
							<select id="choicesSearch">
								<option>Select one city</option>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
						</div>

					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}