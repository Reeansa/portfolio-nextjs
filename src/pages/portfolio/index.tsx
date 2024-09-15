/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import {useEffect, useState} from "react";
import {Portfolio} from "@/interfaces/portfolio";
import {fetchPortfolios} from "@/services/portfolioService";

const Portfolios = () => {
	const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadPortfolios = async () => {
			try {
				const data = await fetchPortfolios();
				setPortfolios(data);
			} catch (err) {
				setError(err.message);
			}
		};
		loadPortfolios();
	}, []);

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<article className="px-6">
				<header className="py-4">
					<h2 className="text-2xl font-bold text-wild-sand-50">Portfolio</h2>
				</header>
				<ul className="flex items-center gap-4 text-wild-sand-50 button-group">
					<li>
						<button
							data-filter="*"
							className="p-2">
							Show All
						</button>
					</li>
					<li>
						<button
							data-filter=".design"
							className="p-2">
							Design
						</button>
					</li>
					<li>
						<button
							data-filter=".web-design"
							className="p-2">
							Web Design
						</button>
					</li>
					<li>
						<button
							data-filter=".products"
							className="p-2">
							Products
						</button>
					</li>
				</ul>
			</article>
			<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
				{portfolios.map((portfolio) => (
					<article
					key={portfolio.id}
					className="shadow-xl justify-self-center card bg-base-100 element-item design">
					<a
						href="detail.html"
						className="relative">
						<figure>
							<img src={portfolio.images[0].image ? `${process.env.NEXT_PUBLIC_BASE_URL}/storage/${portfolio.images[0].image}`: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'} alt="Shoes"
							/>
						</figure>
						<h2 className="absolute bottom-0 right-0 px-4 py-2 underline">Lihat selengkapnya</h2>
					</a>
					<div className="card-body">
						<h2 className="card-title">{portfolio.title}</h2>
						<p>{portfolio.description}</p>
						<div className="justify-end card-actions">
							{portfolio.stacks.map((stack) => (
								<div key={stack.id} className="badge badge-outline">{stack.stack}</div>
							))}
						</div>
					</div>
				</article>
				))}
			</section>
		</>
	);
};

export default Portfolios;
