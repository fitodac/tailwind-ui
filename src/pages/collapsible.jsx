import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'


const faqs = [
	{
		q: "What is your app about?",
		a: [
			"Our app is designed to provide users with an easy-to-use platform for organizing their daily tasks and schedule. Whether it's managing deadlines, setting reminders, or keeping track of appointments, our app is designed to help users stay on top of their day-to-day activities. With a clean and intuitive interface, users can quickly add and manage tasks, set reminders, and receive notifications to stay on track."
		]
	},
	{
		q: "How does your app work?",
		a: [
			"Our app is designed to be intuitive and user-friendly, making it easy for anyone to use. When a user first launches the app, they will be presented with a simple and straightforward interface. From there, they can access all of the app's main features, such as [list of main features]. The app is designed to be responsive and fast, so users can quickly access the information they need without any delays.",
			"One of the key features of our app is its integration with other apps and services. For example, users can easily connect our app with [name of third-party service or app] to access additional features and functionality. This integration makes our app even more powerful and versatile, allowing users to do more with it than they could on their own.",
			"In terms of security, our app is built with the latest encryption and security protocols to ensure that user data is always safe and protected. We take the privacy and security of our users very seriously, and we are committed to providing a secure and reliable platform for all of our users."
		]
	},
	{
		q: "Is your app free to use?",
		a: [
			"Our app offers both a free and a paid version. The free version includes [a list of features available in the free version]. Users can upgrade to the paid version to access [additional features available in the paid version]. Our app is available for download on both the App Store and Google Play Store."
		]
	},
	{
		q: "What are the features of your app?",
		a: [
			"Our app is packed with a wide range of features that make it a powerful tool for users. Some of the main features of our app include [list of main features]. These features are designed to make it easy for users to [task or function the app is designed for]. In addition, our app also offers several customization options, allowing users to personalize the app to their specific needs and preferences.",
			"One of the key advantages of our app is its simplicity and ease of use. Even with all of its advanced features, the app is designed to be user-friendly and intuitive. This means that users can quickly learn how to use the app and start benefiting from its features right away.",
			"Another important feature of our app is its integration with other services and apps. This integration makes it possible for users to do even more with our app than they could on their own. For example, users can connect our app with [name of third-party service or app] to access additional features and functionality.",
			"Overall, our app is designed to be a comprehensive solution for [task or function the app is designed for]. With its powerful features and user-friendly design, our app is the perfect tool for anyone looking to [benefit or solve a problem]."
		]
	},
	{
		q: "How do I download and install your app?",
		a: [
			"To download and install our app, simply visit the App Store or Google Play Store on your mobile device and search for our app by name. Once you find our app, click on the download button to begin the download process. The app will automatically install on your device once the download is complete. You will then be prompted to create an account or sign in to an existing account to start using the app.",
			"It is important to ensure that you have a stable internet connection while downloading the app to avoid any interruptions. Also, make sure that you have enough storage space on your device to accommodate the app's size."
		]
	},
	{
		q: "What devices is your app compatible with?",
		a: [
			"Our app is compatible with a wide range of devices, including smartphones and tablets running on iOS and Android operating systems. For iOS devices, our app is compatible with devices running iOS 11.0 or later, while for Android devices, our app is compatible with devices running Android 5.0 or later.",
			"It is important to note that some features of our app may not be available on older devices or outdated operating systems. We highly recommend that you keep your device updated to the latest version of the operating system to ensure optimal performance and to have access to all the latest features of our app."
		]
	},
]



export default function PageAccordion(){

	return (
	<Layout>
		<PageHeader title="Collapsible" />

		<div className="space-y-7">
			<DemoCard title={'Accordion'}>
				<div className="grid gap-6 mt-6 md:grid-cols-2">

					<div className="grid content-start gap-4">
						{ faqs.map((e,i) => {
							const k = Math.random().toString(16).substring(2)
							return i < 3 ? (
								<div className="" key={k}>
									<div className="collapsible">
										<input className="" id={k} type="radio" name="collapseOnebyOne" />
										<label className="collapsible-head text-sm" htmlFor={k}>

											<span className="">{ e.q }</span>
										</label>
										<div className="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
											{ e.a.map(a => (<p className="p-5" key={Math.random().toString(16).substring(2)}>{a}</p>))}
										</div>
									</div>
								</div>
							) : null
						})}
					</div>


					<div className="grid content-start gap-4">
						{ faqs.map((e,i) => {
							const k = Math.random().toString(16).substring(2)
							return i >= 3 ? (
								<div className="" key={k}>
									<div className="collapsible">
										<input className="" id={k} type="radio" name="collapseOnebyOne" />
										<label className="collapsible-head text-sm" htmlFor={k}>

											<span className="">{ e.q }</span>
										</label>
										<div className="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
											{ e.a.map(a => (<p className="p-5" key={Math.random().toString(16).substring(2)}>{a}</p>))}
										</div>
									</div>
								</div>
							) : null
						})}
					</div>

				</div>
			</DemoCard>



			<DemoCard title={'Closable'}>
				<div className="grid gap-6 mt-6 md:grid-cols-2">

					<div className="grid content-start gap-4">
						{ faqs.map((e,i) => {
							const k = Math.random().toString(16).substring(2)
							return i < 3 ? (
								<div className="" key={k}>
									<div className="collapsible">
										<input className="" id={k} type="checkbox" />
										<label className="collapsible-head text-sm" htmlFor={k}>

											<span className="">{ e.q }</span>
										</label>
										<div className="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
											{ e.a.map(a => (<p className="p-5" key={Math.random().toString(16).substring(2)}>{a}</p>))}
											
										</div>
									</div>
								</div>
							) : null
						})}
					</div>


					<div className="grid content-start gap-4">
						{ faqs.map((e,i) => {
							const k = Math.random().toString(16).substring(2)
							return i >= 3 ? (
								<div className="" key={k}>
									<div className="collapsible">
										<input className="" id={k} type="checkbox" />
										<label className="collapsible-head text-sm" htmlFor={k}>

											<span className="">{ e.q }</span>
										</label>
										<div className="collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
											{ e.a.map(a => (<p className="p-5" key={Math.random().toString(16).substring(2)}>{a}</p>))}
											
										</div>
									</div>
								</div>
							) : null
						})}
					</div>

				</div>
			</DemoCard>
		</div>

	</Layout>)
}