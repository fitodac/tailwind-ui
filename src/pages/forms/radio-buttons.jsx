import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageRadioButtons(){
	return (
		<Layout>
			<PageHeader 
				title="Radio buttons" 
				breadcrumbs={[
					{ text: 'Forms', link: null }
				]} />

			
			<div className="space-y-7">
				<DemoCard title={'Sizing'} code="Code_RadioSizing">
					<div className="grid grid-cols-2 gap-10">

						<div className="">
							<label>Basic</label>

							<div className="flex gap-4 mt-5">
								<label className="input-radio">
									<input type="radio" name="option-1" />
									<span>Option 1</span>
								</label>
								<label className="input-radio">
									<input type="radio" name="option-1" />
									<span>Option 2</span>
								</label>
								<label className="input-radio">
									<input type="radio" name="option-1" defaultChecked />
									<span>Option 3</span>
								</label>
								<label className="input-radio">
									<input type="radio" name="option-1" disabled />
									<span>Disabled</span>
								</label>
							</div>
						</div>


						<div className="">
							<label>Large</label>

							<div className="flex gap-4 mt-5">
								<label className="input-radio input-lg">
									<input type="radio" name="option-2" />
									<span>Option 1</span>
								</label>
								<label className="input-radio input-lg">
									<input type="radio" name="option-2" />
									<span>Option 2</span>
								</label>
								<label className="input-radio input-lg">
									<input type="radio" name="option-2" defaultChecked />
									<span>Option 3</span>
								</label>
								<label className="input-radio input-lg">
									<input type="radio" name="option-2" disabled />
									<span>Disabled</span>
								</label>
							</div>
						</div>

					</div>

				</DemoCard>



				<DemoCard title={'Vertical'} code="Code_RadioVertical">
					<div className="space-y-4">
						<div>
							<label className="input-radio">
								<input type="radio" name="option-3" />
								<span>Option 1</span>
							</label>
						</div>

						<div>
							<label className="input-radio">
								<input type="radio" name="option-3" />
								<span>Option 2</span>
							</label>
						</div>
						
						<div>
							<label className="input-radio">
								<input type="radio" name="option-3" defaultChecked />
								<span>Option 3</span>
							</label>
						</div>
						
						<div>
							<label className="input-radio">
								<input type="radio" name="option-3" disabled />
								<span>Disabled</span>
							</label>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Vertical with much text'} code="Code_RadioVerticalMuchText">
					<div className="max-w-md grid gap-5">
						<div className="flex gap-6 items-start">
							<label className="input-radio">
								<input type="radio" name="option-4" />
								<span></span>
							</label>

							<div className="-top-1 relative">In "Star Wars: The Force Awakens," the Millennium Falcon briefly appears in the background of a junkyard scene, paying homage to its iconic status in the series.</div>
						</div>

						<div className="flex gap-6 items-start">
							<label className="input-radio">
								<input type="radio" name="option-4" />
								<span></span>
							</label>

							<div className="-top-1 relative">In "Star Wars: The Last Jedi," the ancient Jedi texts seen in the movie's final scenes are written in Aurebesh, the fictional writing system used in the Star Wars universe.</div>
						</div>

						<div className="flex gap-6 items-start">
							<label className="input-radio">
								<input type="radio" name="option-4" defaultChecked />
								<span></span>
							</label>

							<div className="-top-1 relative">In "Star Wars: Rogue One," the droid character, Chopper, from the animated series "Star Wars Rebels," can be spotted in the background during the Battle of Scarif sequence</div>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Toggler'} code="Code_RadioToggler">
					<div className="flex gap-20">
						<div>
							<label className="input-radio toggler">
								<input type="radio" name="option-5" />
								<span>Yes</span>
							</label>
						</div>

						<div>
							<label className="input-radio toggler">
								<input type="radio" name="option-5" />
								<span>No</span>
							</label>
						</div>

						<div>
							<label className="input-radio toggler">
								<input type="radio" name="option-5" disabled />
								<span>Disabled</span>
							</label>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Radio buttons with checkbox style'} code="Code_RadioCheckboxStyle">
					<div className="max-w-md grid gap-3">
						<div>
							<label className="input-radio check">
								<input type="radio" name="option-6" />
								<span>Option 1</span>
							</label>
						</div>

						<div>
							<label className="input-radio check">
								<input type="radio" name="option-6" />
								<span>Option 2</span>
							</label>
						</div>
						
						<div>
							<label className="input-radio check">
								<input type="radio" name="option-6" disabled/>
								<span>Option 3</span>
							</label>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Button group'}>
					<div className="grid grid-cols-3 gap-10">
						<div className="">
							<div className="btn-group btn-group-primary">
								<label className="">
									<input type="radio" name="option-7" />
									<span className="btn">One</span>
								</label>
								
								<label className="">
									<input type="radio" name="option-7" />
									<span className="btn">Two</span>
								</label>
								
								<label className="">
									<input type="radio" name="option-7" />
									<span className="btn">Three</span>
								</label>
							</div>
						</div>
					</div>
				</DemoCard>

			</div>
		</Layout>
	)
}