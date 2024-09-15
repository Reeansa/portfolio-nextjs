import Navbar from "@/components/layouts/Navbar";
import Aside from "@/components/layouts/Aside";
import Footer from "@/components/layouts/Footer";

export default function AppShell({children}: {children: React.ReactNode}) {
	return (
		<>
			<Navbar />
			<main className="container mx-auto sm:flex sm:gap-8 xl:px-52">
				<Aside />
				<section>{children}</section>
			</main>
			<Footer />
		</>
	);
}
