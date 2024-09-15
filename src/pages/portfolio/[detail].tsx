export default function detail() {
    return (
        <article>
            <div className="max-w-4xl py-8 mx-auto">
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <img src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=1"
                                    className="object-cover w-full cursor-pointer" alt="Slide 1"
                                    onclick="openModal('https://via.placeholder.com/800x400/FF0000/FFFFFF?text=1')">
                            </li>
                            <li className="glide__slide">
                                <img src="https://via.placeholder.com/800x400/00FF00/FFFFFF?text=2"
                                    className="object-cover w-full cursor-pointer" alt="Slide 2"
                                    onclick="openModal('https://via.placeholder.com/800x400/00FF00/FFFFFF?text=2')">
                            </li>
                            <li className="glide__slide">
                                <img src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=3"
                                    className="object-cover w-full cursor-pointer" alt="Slide 3"
                                    onclick="openModal('https://via.placeholder.com/800x400/0000FF/FFFFFF?text=3')">
                            </li>
                        </ul>
                    </div>
                    
                    <div className="flex items-center mt-4">
                        <button id="prevButton" className="hidden p-2 mr-2 rounded-lg bg-wild-sand-500"
                            onclick="scrollThumbnails(-1)">⟨</button>
                        <div className="w-full overflow-hidden">
                            <div id="thumbnailContainer"
                                className="flex space-x-4 transition-transform duration-500 glide__bullets"
                                data-glide-el="controls[nav]">
                                <button className="glide__bullet" data-glide-dir="=0">
                                    <img src="https://via.placeholder.com/100x100/FF0000/FFFFFF?text=1"
                                        className="object-cover w-20 h-20 rounded-lg cursor-pointer" alt="Thumbnail 1">
                                </button>
                                <button className="glide__bullet" data-glide-dir="=1">
                                    <img src="https://via.placeholder.com/100x100/00FF00/FFFFFF?text=2"
                                        className="object-cover w-20 h-20 rounded-lg cursor-pointer" alt="Thumbnail 2">
                                </button>
                                <button className="glide__bullet" data-glide-dir="=2">
                                    <img src="https://via.placeholder.com/100x100/0000FF/FFFFFF?text=3"
                                        className="object-cover w-20 h-20 rounded-lg cursor-pointer" alt="Thumbnail 3">
                                </button>
                                <!-- Add more thumbnails here -->
                            </div>
                        </div>
                        <button id="nextButton" className="p-2 ml-2 rounded-lg bg-wild-sand-500"
                            onclick="scrollThumbnails(1)">⟩</button>
                    </div>
                </div>

                <!-- Modal for Enlarged Image -->
                <div id="imageModal" className="fixed top-0 right-0 z-10 content-center hidden w-full h-full bg-wild-sand-950/80">
                    <div className="relative flex items-center justify-center">
                        <figure className="relative max-w-fit">
                            <img id="modalImage" src="" className="max-w-full max-h-full">
                            <figcaption
                                className="absolute flex items-center justify-center w-10 h-10 text-white top-4 right-4">
                                <button onclick="closeModal()"><span
                                        className="w-10 h-10 text-wild-sand-950 icon-[healthicons--no]"></span></button>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <section className="pb-8">
                <article className="p-4 rounded-lg shadow-sm bg-wild-sand-50/25 backdrop-blur-sm">
                    <header className="text-wild-sand-50">
                        <div className="flex flex-col gap-2">
                            <h1>Project Name</h1>
                            <span className="badge">Laravel</span>
                            <p>Link Project: <a href="#">Link Project</a></p>
                        </div>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum repellat
                            sequi
                            sapiente amet deserunt corporis facilis earum officiis illo minus magnam quaerat iusto vero?
                            Dolorem numquam distinctio nobis nisi!</p>
                    </header>
                </article>
            </section>
        </article>
    )
}