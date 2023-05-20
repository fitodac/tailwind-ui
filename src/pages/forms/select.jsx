import Layout from '../../layouts/Layout'
import PageHeader from '../../components/PageHeader'
import DemoCard from '../../components/DemoCard'


export default function PageSelect(){
	return (
		<Layout>
			<PageHeader 
				title="Inputs" 
				breadcrumbs={[
					{ text: 'Forms', link: null }
				]} />

			<div className="space-y-7">
				<DemoCard title={'Select'}>
					<div className="grid grid-cols-4 gap-6">

						<div className="space-y-1">
							<label>Basic</label>
							<select>
								<option selected>Select one city</option>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
						</div>


						<div className="space-y-1">
							<label className="pl-3">Rounded</label>
							<select className="rounded-full">
								<option selected>Select one city</option>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
						</div>


						<div className="space-y-1">
							<label>Disabled</label>
							<select disabled>
								<option selected>Select one city</option>
							</select>
						</div>

					</div>
				</DemoCard>



				<DemoCard title={'Validation states'}>
					<div className="grid grid-cols-4 gap-6">

						<div className="space-y-1">
							<select className="input-valid">
								<option selected>Select one city</option>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
						</div>


						<div>
							<select className="input-error">
								<option selected>Select one city</option>
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



				<DemoCard title={'Input group'}>
					<div className="grid grid-cols-4 gap-6">

						<div className="space-y-1">
							<div className="input-group">
								<select className="">
									<option selected>Select one city</option>
									<option value="new york">New York</option>
									<option value="london">London</option>
									<option value="paris">Paris</option>
									<option value="hong kong">Hong Kong</option>
									<option value="dubai">Dubai</option>
									<option value="tokyo">Tokyo</option>
								</select>
								<button className="btn btn-primary">Submit</button>
							</div>
							
						</div>


						<div className="space-y-1">
							<div className="input-group">
								<span>
									<svg 
										className="w-6 fill-primary"
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 24 24">
										<path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
										<path fill="none" d="M0 0h24v24H0z"/>
									</svg>
								</span>
								<select className="">
									<option selected>Select one city</option>
									<option value="new york">New York</option>
									<option value="london">London</option>
									<option value="paris">Paris</option>
									<option value="hong kong">Hong Kong</option>
									<option value="dubai">Dubai</option>
									<option value="tokyo">Tokyo</option>
								</select>
								<button className="btn btn-primary">Go!</button>
							</div>
						</div>

					</div>
				</DemoCard>
			</div>
		</Layout>
	)
}