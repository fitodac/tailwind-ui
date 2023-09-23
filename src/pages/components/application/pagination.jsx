import Layout from '../../../layouts/Layout'
import PageHeader from '../../../components/PageHeader'
import DemoCard from '../../../components/DemoCard'


const pagerClassName = {
	basic: 'w-10 h-10 select-none rounded transition-all hover:bg-primary hover:text-white',
	basicArrow: {
		btn: 'w-10 h-10 select-none rounded transition-all group hover:text-primary',
		prev: 'relative transition-all group-hover:-ml-2',
		next: 'relative transition-all group-hover:ml-2',
	},
	basic_active: 'bg-slate-100 w-10 h-10 select-none rounded transition-all cursor-default',
	rounded: 'w-10 h-10 select-none rounded-full transition-all hover:bg-primary hover:text-white',
	rounded_active: 'bg-slate-100 w-10 h-10 select-none rounded-full transition-all cursor-default',
	boxed: 'border-l border-slate-200 w-10 h-10 select-none transition-all hover:bg-primary hover:text-white hover:border-primary',
	boxed_active: 'bg-slate-100 border-l border-slate-200 w-10 h-10 select-none transition-all cursor-default',
	minimal: 'w-10 h-10 select-none transition-all hover:text-primary',
	minimal_active: 'text-slate-300 w-10 h-10 select-none transition-all cursor-default'
}


export default function Page(){
	return (
		<Layout>
			<PageHeader title="Pagination" />

			<div className="space-y-7">
				<DemoCard title={'Basic'}>
					<div className="flex gap-x-1 overflow-x-hidden">
						<button className={pagerClassName.basicArrow.btn}>
							<i className={`ri-arrow-left-s-line ${pagerClassName.basicArrow.prev}`}></i>
						</button>
						<button className={pagerClassName.basic}>1</button>
						<button className={pagerClassName.basic_active}>2</button>
						<button className={pagerClassName.basic}>3</button>
						<button className={pagerClassName.basic}>4</button>
						<button className={pagerClassName.basic}>5</button>
						<button className={pagerClassName.basic}>6</button>
						<button className={pagerClassName.basicArrow.btn}>
							<i className={`ri-arrow-right-s-line ${pagerClassName.basicArrow.next}`}></i>
						</button>
					</div>
				</DemoCard>


				<DemoCard title={'Rounded'}>
					<div className="border border-slate-200 p-1.5 inline-flex rounded-full">
						<div className="flex gap-x-1 overflow-x-hidden">
							<button className={pagerClassName.rounded}>
								<i className="ri-arrow-left-s-line"></i>
							</button>
							<button className={pagerClassName.rounded}>1</button>
							<button className={pagerClassName.rounded}>2</button>
							<button className={pagerClassName.rounded}>3</button>
							<button className={pagerClassName.rounded_active}>4</button>
							<button className={pagerClassName.rounded}>5</button>
							<button className={pagerClassName.rounded}>6</button>
							<button className={pagerClassName.rounded}>
								<i className="ri-arrow-right-s-line"></i>
							</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Boxed'}>
					<div className="border-y border-r border-slate-200 inline-flex rounded">
						<div className="flex overflow-x-hidden">
							<button className={pagerClassName.boxed}>
								<i className="ri-arrow-left-s-line"></i>
							</button>
							<button className={pagerClassName.boxed}>1</button>
							<button className={pagerClassName.boxed_active}>2</button>
							<button className={pagerClassName.boxed}>3</button>
							<button className={pagerClassName.boxed}>4</button>
							<button className={pagerClassName.boxed}>5</button>
							<button className={pagerClassName.boxed}>6</button>
							<button className={pagerClassName.boxed}>
								<i className="ri-arrow-right-s-line"></i>
							</button>
						</div>
					</div>
				</DemoCard>


				<DemoCard title={'Minimalist'}>
					<div className="flex overflow-x-hidden">
						<button className={pagerClassName.minimal}>
							<i className="ri-arrow-left-s-line"></i>
						</button>
						<button className={pagerClassName.minimal}>1</button>
						<button className={pagerClassName.minimal}>2</button>
						<button className={pagerClassName.minimal}>3</button>
						<button className={pagerClassName.minimal}>4</button>
						<button className={pagerClassName.minimal_active}>5</button>
						<button className={pagerClassName.minimal}>6</button>
						<button className={pagerClassName.minimal}>
							<i className="ri-arrow-right-s-line"></i>
						</button>
					</div>
				</DemoCard>
			</div>
		</Layout>)
}