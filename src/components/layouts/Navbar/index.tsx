import Link from "next/link";
import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

export default function Navbar() {
	useEffect(() => {
		// Gunakan jQuery untuk menambahkan event listener
		$('#menu-toggle').on('change', function () {
		$('#menu').toggleClass('hidden', !(this as HTMLInputElement).checked);
		});
	
		// Cleanup event listener saat komponen di-unmount
		return () => {
		  $('#menu-toggle').off('change');
		};
	  }, []);
	return (
		<>
			<nav className="container z-10 justify-between mx-auto sm:sticky sm:top-0 navbar">
				<a className="text-xl shadow-sm btn btn-ghost text-wild-sand-50 bg-wild-sand-500/5 backdrop-blur-sm shadow-wild-sand-50">Reean</a>
				<ul className="items-center hidden gap-8 p-8 capitalize shadow rounded-b-2xl bg-wild-sand-600/50 backdrop-blur-sm md:flex shadow-wild-sand-50">
					<li className="text-wild-sand-50">
						<Link href={"/"}>Curriculum Vitae</Link>
					</li>
					<li className="text-wild-sand-50">
						<Link href={"/portfolio"}>Portfolio</Link>
					</li>
					<li className="text-wild-sand-50">
						<Link href={"/sertifikat"}>Sertifikat</Link>
					</li>
					<li className="text-wild-sand-50">
						<Link href={"/kontak"}>Kontak</Link>
					</li>
				</ul>
			</nav>
			<div className="fixed bottom-3 right-3 md:hidden z-10">
				<div
					className="absolute hidden rounded-lg bottom-14 right-5 bg-wild-sand-800"
					id="menu">
					<ul className="flex flex-col gap-3 p-3 capitalize">
						<li className="text-wild-sand-50">
							<Link href={"/"}>Curriculum Vitae</Link>
						</li>
						<li className="text-wild-sand-50">
							<Link href={"/portfolio"}>Portfolio</Link>
						</li>
						<li className="text-wild-sand-50">
							<Link href={"/sertifikat"}>Sertifikat</Link>
						</li>
						<li className="text-wild-sand-50">
							<Link href={"/kontak"}>Kontak</Link>
						</li>
					</ul>
				</div>
				<label className="btn btn-circle swap swap-rotate">
					<input
						type="checkbox"
						id="menu-toggle"
					/>
					<svg
						className="fill-current swap-off"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512">
						<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>
					<svg
						className="fill-current swap-on"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512">
						<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
					</svg>
				</label>
			</div>
		</>
	);
}
