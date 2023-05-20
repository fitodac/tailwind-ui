import { useState } from 'react'
import Layout from '../layouts/Layout'
import PageHeader from '../components/PageHeader'
import DemoCard from '../components/DemoCard'

const colors = color => ([
	{ text: color, class: `bg-${color}` },
	{ text: '50', class: `bg-${color}-50` },
	{ text: '100', class: `bg-${color}-100` },
	{ text: '200', class: `bg-${color}-200` },
	{ text: '300', class: `bg-${color}-300` },
	{ text: '400', class: `bg-${color}-400` },
	{ text: '600', class: `bg-${color}-600` },
	{ text: '700', class: `bg-${color}-700` },
	{ text: '800', class: `bg-${color}-800` },
	{ text: '900', class: `bg-${color}-900` }
])

function colorShade(hex, type){
	const colorHEX = hex.replace('#','').match(/.{1,2}/g)
	const tint = ({
		100: 14,
		200: 13,
		300: 12,
		400: 11,
		600: 9,
		700: 8,
		800: 7,
		900: 6,
	})[type]

  var colorRGB = [
		parseInt(colorHEX[0], 16),
		parseInt(colorHEX[1], 16),
		parseInt(colorHEX[2], 16)
  ]

	return `rgb(${tint*colorRGB[0]/10}, ${tint*colorRGB[1]/10}, ${tint*colorRGB[2]/10})`
}


export default function PageColors()
{

	const [shades, setShades] = useState({
		100: '',
		200: '',
		300: '',
		400: '',
		DEFAULT: null,
		600: '',
		700: '',
		800: '',
		900: '',
	})

	const generateTint = e => {
		const colors = {...shades}
		colors['DEFAULT'] = e.target.value

		for( let i = 100; i <= 900; i += 100 ){
			if( i !== 500 ) colors[i] = colorShade(e.target.value, i)
		}

		setShades(colors)
	}


	return (
		<Layout>
			<PageHeader title="Colors" />

			<div className="space-y-7">
				<DemoCard title={'Primary'}>
					<div className="space-y-3 md:space-y-0 md:grid md:grid-cols-10 md:gap-3">
						{ colors('primary').map((e,i) => (
							<div 
								key={`color-primary-${i}`} 
								className="space-y-1">
								<div 
									className={`${e.class} w-12 h-12 mx-auto rounded-full`}>
								</div>
								<span className="text-center block">{e.text}</span>
							</div>
						))}
					</div>
				</DemoCard>

				
				
				<DemoCard title={'Secondary'}>
					<div className="space-y-3 md:space-y-0 md:grid md:grid-cols-10 md:gap-3">
						{ colors('secondary').map((e,i) => (
							<div 
								key={`color-primary-${i}`} 
								className="space-y-1">
								<div 
									className={`${e.class} w-12 h-12 mx-auto rounded-full`}>
								</div>
								<span className="text-center block">{e.text}</span>
							</div>
						))}
					</div>
				</DemoCard>



				<DemoCard title={'Alternative'}>
					<div className="space-y-3 md:space-y-0 md:grid md:grid-cols-10 md:gap-3">
						{ colors('alt').map((e,i) => (
							<div 
								key={`color-primary-${i}`} 
								className="space-y-1">
								<div 
									className={`${e.class} w-12 h-12 mx-auto rounded-full`}>
								</div>
								<span className="text-center block">{e.text}</span>
							</div>
						))}
					</div>
				</DemoCard>
				
				
				<DemoCard title={'Tint generator'}>
					<div className="space-y-3 md:space-y-0 md:grid md:grid-cols-10 md:gap-3">
						{ Object.keys(shades).map(e => (
							<div 
								key={`shade-${e}`} 
								className="space-y-1">
								<div 
									className={`w-12 h-12 mx-auto rounded-full`}
									style={{background: `${shades[e]}`}}>
								</div>
								<span className="text-center block">{e}</span>
							</div>
						))
						}
					</div>

					<div className="grid grid-cols-4 gap-5 mt-12">
						<div className="">
							<input type="color" onChange={generateTint} />
						</div>

						<div className="col-span-3">
							<div className="bg-slate-600 text-slate-300 p-5 rounded-xl">
								{ shades.DEFAULT ? (
									<>
										<pre>{`'color': {`}</pre>
										<pre>{`	100: '${shades[100]}',`}</pre>
										<pre>{`	200: '${shades[200]}',`}</pre>
										<pre>{`	300: '${shades[300]}',`}</pre>
										<pre>{`	400: '${shades[400]}',`}</pre>
										<pre>{`	DEFAULT: '${shades.DEFAULT}',`}</pre>
										<pre>{`	600: '${shades[600]}',`}</pre>
										<pre>{`	700: '${shades[700]}',`}</pre>
										<pre>{`	800: '${shades[800]}',`}</pre>
										<pre>{`	900: '${shades[900]}'`}</pre>
										<pre>{`}`}</pre>
									</>
								): (
									<div>
										Select a color for generate shades
									</div>
								)}
							</div>
						</div>
					</div>
				</DemoCard>
			</div>


		</Layout>
	)
}
