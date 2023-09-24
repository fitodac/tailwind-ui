import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageCheckbox(){
	return (
		<Layout>
			<PageHeader 
				title="Checkboxes" 
				breadcrumbs={[
					{ text: 'Forms', link: null }
				]} />


			<div className="space-y-7">
				<DemoCard title={'Sizing'} code="Code_CheckboxSizing">
					<div className="grid grid-cols-2 gap-10">

						<div className="">
							<label>Basic</label>

							<div className="flex gap-4 mt-5">
								<label className="input-checkbox">
									<input type="checkbox" />
									<span>Option 1</span>
								</label>
								<label className="input-checkbox">
									<input type="checkbox" />
									<span>Option 2</span>
								</label>
								<label className="input-checkbox">
									<input type="checkbox" defaultChecked />
									<span>Option 3</span>
								</label>
								<label className="input-checkbox">
									<input type="checkbox" disabled />
									<span>Disabled</span>
								</label>
							</div>
						</div>


						<div className="">
							<label>Large</label>

							<div className="flex gap-4 mt-5">
								<label className="input-checkbox input-lg">
									<input type="checkbox" />
									<span>Option 1</span>
								</label>
								<label className="input-checkbox input-lg">
									<input type="checkbox" />
									<span>Option 2</span>
								</label>
								<label className="input-checkbox input-lg">
									<input type="checkbox" defaultChecked />
									<span>Option 3</span>
								</label>
								<label className="input-checkbox input-lg">
									<input type="checkbox" disabled />
									<span>Disabled</span>
								</label>
							</div>
						</div>

					</div>
				</DemoCard>



				<DemoCard title={'Vertical'} code="Code_CheckboxVertical">
					<div className="space-y-4">
						<div>
							<label className="input-checkbox">
								<input type="checkbox" />
								<span>Option 1</span>
							</label>
						</div>

						<div>
							<label className="input-checkbox">
								<input type="checkbox" />
								<span>Option 2</span>
							</label>
						</div>
						
						<div>
							<label className="input-checkbox">
								<input type="checkbox" defaultChecked />
								<span>Option 3</span>
							</label>
						</div>
						
						<div>
							<label className="input-checkbox">
								<input type="checkbox" disabled />
								<span>Disabled</span>
							</label>
						</div>
					</div>
				</DemoCard>



				<DemoCard title={'Checkbox with much text'} code="Code_CheckboxVerticalMuchText">
					<div className="max-w-md space-y-6">
						<div className="flex gap-6 items-start">
							<label className="input-checkbox">
								<input type="checkbox" />
								<span></span>
							</label>

							<div className="-top-1 relative">In "Star Wars: The Force Awakens," the Millennium Falcon briefly appears in the background of a junkyard scene, paying homage to its iconic status in the series.</div>
						</div>

						<div className="flex gap-6 items-start">
							<label className="input-checkbox">
								<input type="checkbox" />
								<span></span>
							</label>

							<div className="-top-1 relative">In "Star Wars: The Last Jedi," the ancient Jedi texts seen in the movie's final scenes are written in Aurebesh, the fictional writing system used in the Star Wars universe.</div>
						</div>

						<div className="flex gap-6 items-start">
							<label className="input-checkbox">
								<input type="checkbox" defaultChecked />
								<span></span>
							</label>

							<div className="-top-1 relative">In "Star Wars: Rogue One," the droid character, Chopper, from the animated series "Star Wars Rebels," can be spotted in the background during the Battle of Scarif sequence.</div>
						</div>
					</div>
				</DemoCard>



				<DemoCard title={'Toggler'} code="Code_CheckboxToggler">
					<div className="flex gap-20">
						<div>
							<label className="input-checkbox toggler">
								<input type="checkbox" />
								<span>Like</span>
							</label>
						</div>

						<div>
							<label className="input-checkbox toggler">
								<span>Yes</span>
								<input type="checkbox" />
								<span>No</span>
							</label>
						</div>

						<div>
							<label className="input-checkbox toggler">
								<input type="checkbox" disabled />
								<span>Disabled</span>
							</label>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Button group'} code="Code_CheckboxInputGroup">
					<div className="btn-group btn-group-primary">
						<label>
							<input type="checkbox" />
							<span className="btn">One</span>
						</label>
						
						<label>
							<input type="checkbox" />
							<span className="btn">Two</span>
						</label>
						
						<label>
							<input type="checkbox" />
							<span className="btn">Three</span>
						</label>
					</div>
				</DemoCard>

			</div>
		</Layout>
	)
}