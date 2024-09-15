import {Icon} from "@iconify/react";
import Link from "next/link";

export default function Header() {
	return (
		<aside className="h-full sm:sticky sm:top-24">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-center w-full avatar">
					<figure className="w-52 mask mask-squircle bg-wild-sand-500">
						<img
							src="/assets/images/profile/pictures.png"
							alt="Raihan Febriyansah"
						/>
					</figure>
				</div>
				<div className="flex flex-col items-center w-full gap-2 pb-8 text-center sm:pb-0 text-wild-sand-50">
					<h1 className="text-3xl font-bold sm:text-4xl">Raihan Febriyansah</h1>
					<h2 className="text-xl sm:text-2xl">Web Developer</h2>
					<div className="mt-5 text-center">
						<Link
							href={"https://drive.google.com/file/d/1GXLUFrQdGfIfoib3cBTzvIw3OlQKVwAP/view?usp=sharing"}
							className="px-4 py-2 rounded-lg shadow bg-wild-sand-500/40 backdrop-blur-sm text-wild-sand-50 shadow-wild-sand-50">
							Download CV
						</Link>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-8">
				<ul className="flex items-center gap-4 px-8 py-4 rounded-full shadow w-fit bg-wild-sand-500/40 backdrop-blur-sm shadow-wild-sand-50">
					<li>
						<Link href={"https://www.linkedin.com/in/raihanfebriyansah/"}>
							<Icon
								icon="ri:linkedin-fill"
								className="w-10 h-10 text-wild-sand-50 hover:text-wild-sand-500"
							/>
						</Link>
					</li>
					<li>
						<Link href={"https://www.instagram.com/hallorai_/"}>
							<Icon
								icon="ri:instagram-fill"
								className="w-10 h-10 text-wild-sand-50 hover:text-wild-sand-500"
							/>
						</Link>
					</li>
					<li>
						<Link href={"https://www.facebook.com/raihanfebriyansahh"}>
							<Icon
								icon="ri:facebook-fill"
								className="w-10 h-10 text-wild-sand-50 hover:text-wild-sand-500"
							/>
						</Link>
					</li>
					<li>
						<Link href={"https://github.com/Reeansa"}>
							<Icon
								icon="ri:github-fill"
								className="w-10 h-10 text-wild-sand-50 hover:text-wild-sand-500"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}
