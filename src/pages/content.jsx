import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'


export default function PageContent(){
	return (
		<Layout>
			<PageHeader title="Content" />

			<div className="text-slate-400 text-sm font-light mb-16">
				By default, if you use elements such as unordered lists <code>ul</code> or headers <code>h1</code>, they won't generate any styling. To achieve that, they can be wrapped inside a <code>div</code> with the class <code>.content</code>.
			</div>

			<div className="space-y-7">
				<DemoCard title={'Heading'}>
					<div className="content flex gap-5 items-end">
						<h1>H1</h1>
						<h2>H2</h2>
						<h3>H3</h3>
						<h4>H4</h4>
						<h5>H5</h5>
					</div>

					<div className="content mt-6">
						<pre>
							<div>&lt;div class="content"&gt;</div>
							<div className="pl-4">&lt;h1&gt;H1&lt;/h1&gt;</div>
							<div>&lt;/div&gt;</div>
						</pre>
					</div>
				</DemoCard>



				<DemoCard title={'Paragraph'}>
					<div className="content">
						<p>Tailwind 3 is the latest version of the popular utility-first CSS framework, Tailwind CSS. It brings a host of new features and enhancements that make it even more powerful and flexible for building modern web applications. One of the standout features in Tailwind 3 is the introduction of Just-in-Time (JIT) mode, which allows developers to generate a highly optimized and minimal CSS bundle for their projects. This results in faster load times and improved performance, as only the necessary CSS classes are included in the final output.</p>
						<p>Another notable addition in Tailwind 3 is the introduction of the new "Dark Mode" feature. With this feature, developers can easily create dark mode variants for their components and styles. This is especially valuable as dark mode has gained significant popularity in recent years, providing users with a more comfortable viewing experience, reducing eye strain, and saving battery life on devices with OLED screens. Tailwind 3's Dark Mode feature makes it effortless to implement this design trend, allowing developers to cater to the preferences of their users with ease.</p>
						<p>Tailwind 3 also introduces improved customization options, giving developers more control over the framework's default styles. It offers a comprehensive configuration system that allows for fine-tuning various aspects of Tailwind CSS, such as colors, breakpoints, and spacing. This customization capability enables developers to create a unique visual identity for their projects while leveraging the productivity benefits of a utility-first CSS approach. Tailwind 3's enhanced customization options empower developers to tailor the framework to their specific needs and ensure that their designs are aligned with their brand or project requirements.</p>
					</div>
				</DemoCard>



				<DemoCard title={'Unordered list'}>
					<div className="content">
						<ul className="pl-4">
							<li type="-">The Dark Knight (2008)</li>
							<li>Inception (2010)</li>
							<li>The Social Network (2010)</li>
							<li>Parasite (2019)</li>
							<li>Mad Max: Fury Road (2015)</li>
						</ul>
					</div>
				</DemoCard>



				<DemoCard title={'Ordered lists'}>
					<div className="content text-slate-500 font-light">
						Ordered list bullets can be controlled with the type attribute. Available types are <code>type="1"</code>, <code>type="A"</code>, <code>type="a"</code>, <code>type="I"</code>, <code>type="i"</code>.
					</div>
					
					<div className="content flex justify-between mt-7">
						<div className="">
							<ol className="pl-4">
								<li>React</li>
								<li>Vue</li>
								<li>Angular</li>
							</ol>
						</div>

						<div className="">
							<ol className="pl-4">
								<li type="A">React</li>
								<li type="A">Vue</li>
								<li type="A">Angular</li>
							</ol>
						</div>

						<div className="">
							<ol className="pl-4">
								<li type="a">React</li>
								<li type="a">Vue</li>
								<li type="a">Angular</li>
							</ol>
						</div>

						<div className="">
							<ol className="pl-4">
								<li type="I">React</li>
								<li type="I">Vue</li>
								<li type="I">Angular</li>
							</ol>
						</div>

						<div className="">
							<ol className="pl-4">
								<li type="i">React</li>
								<li type="i">Vue</li>
								<li type="i">Angular</li>
							</ol>
						</div>

					</div>
				</DemoCard>



				<DemoCard title={'Code'}>
					<div className="content flex gap-x-6">
						<div>
							<code>code</code>
						</div>

						<div>
							<pre>
								&lt;div class="bg-slate-500 text-white rounded-lg"&gt;Sample content&lt;/div&gt;
							</pre>
						</div>
					</div>
				</DemoCard>



			</div>
		</Layout>
	)
}