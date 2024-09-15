import Head from 'next/head'

export default function Home() {
	return (
		<>
		<Head><title>Curriculum Vitae</title></Head>
		
			<article className="pb-8">
				<header className="py-6">
					<h1 className="py-4 text-xl font-bold border-b lg:text-2xl text-wild-sand-50 border-wild-sand-500">Pengalaman Kerja</h1>
				</header>
				<div className="card bg-wild-sand-500/40 backdrop-blur-sm">
					<label
						htmlFor="#"
						className="self-end rounded-none rounded-tr-2xl badge badge-lg">
						2000 - 2003
					</label>
					<div className="card-body text-wild-sand-50">
						<h2 className="font-bold sm:text-xl lg:text-2xl">Staf IT</h2>
						<span className="text-sm lg:text-base">PT. Hernadhi Jaya Abadi</span>
						<p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi consectetur dolorem, explicabo vitae aut magni modi error inventore. Laudantium, soluta. Minima aliquid consequuntur iste ipsa quibusdam vitae corporis eius.</p>
						<div>
							<span className="badge">Wordpress</span>
							<span className="badge">Laravel</span>
						</div>
					</div>
				</div>
			</article>
			<article>
				<header className="py-6">
					<h1 className="py-4 text-xl font-bold border-b lg:text-2xl text-wild-sand-50 border-wild-sand-500">Pendidikan</h1>
				</header>
				<section className="grid gap-4 grid-col-1">
					<article className="card bg-wild-sand-500/40 backdrop-blur-sm">
						<label
							htmlFor="#"
							className="self-end rounded-none rounded-tr-2xl badge badge-lg">
							2000 - 2003
						</label>
						<div className="card-body text-wild-sand-50">
							<h2 className="font-bold sm:text-xl">Institut Teknologi Telkom Purwokerto</h2>
							<span>Rekayasa Perangkat lunak | IPK 3.92</span>
						</div>
					</article>
					<article className="card bg-wild-sand-500/40 backdrop-blur-sm">
						<label
							htmlFor="#"
							className="self-end badge badge-lg">
							2000 - 2003
						</label>
						<div className="card-body text-wild-sand-50">
							<h2 className="font-bold sm:text-xl">Institut Teknologi Telkom Purwokerto</h2>
							<span>Rekayasa Perangkat lunak | IPK 3.92</span>
						</div>
					</article>
				</section>
			</article>
			<article className="pb-8">
				<header className="py-6">
					<h1 className="py-4 text-xl font-bold border-b lg:text-2xl text-wild-sand-50 border-wild-sand-500">Pengalaman Pelatihan</h1>
				</header>
				<div className="card bg-wild-sand-500/40 backdrop-blur-sm">
					<label
						htmlFor="#"
						className="self-end rounded-none rounded-tr-2xl badge badge-lg">
						2000 - 2003
					</label>
					<div className="card-body text-wild-sand-50">
						<h2 className="font-bold sm:text-xl lg:text-2xl">Staf IT</h2>
						<span className="text-sm lg:text-base">PT. Hernadhi Jaya Abadi</span>
						<p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi consectetur dolorem, explicabo vitae aut magni modi error inventore. Laudantium, soluta. Minima aliquid consequuntur iste ipsa quibusdam vitae corporis eius.</p>
						<div>
							<span className="badge">Wordpress</span>
							<span className="badge">Laravel</span>
						</div>
					</div>
				</div>
			</article>
			<article className="pb-8">
				<header className="py-6">
					<h1 className="py-4 text-xl font-bold border-b lg:text-2xl text-wild-sand-50 border-wild-sand-500">Pengalaman Organisasi</h1>
				</header>
				<div className="card bg-wild-sand-500/40 backdrop-blur-sm">
					<label
						htmlFor="#"
						className="self-end rounded-none rounded-tr-2xl badge badge-lg">
						2000 - 2003
					</label>
					<div className="card-body text-wild-sand-50">
						<h2 className="font-bold sm:text-xl lg:text-2xl">Staf IT</h2>
						<span className="text-sm lg:text-base">PT. Hernadhi Jaya Abadi</span>
						<p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi consectetur dolorem, explicabo vitae aut magni modi error inventore. Laudantium, soluta. Minima aliquid consequuntur iste ipsa quibusdam vitae corporis eius.</p>
						<div>
							<span className="badge">Wordpress</span>
							<span className="badge">Laravel</span>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
