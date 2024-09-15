import {Icon} from "@iconify/react";

export default function Sertifikat() {
    const openModal = (imageUrl) => {
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      modalImage.src = imageUrl;
      modal.classList.remove('hidden');
    };
  
    const closeModal = () => {
      const modal = document.getElementById('imageModal');
      modal.classList.add('hidden');
    };
  
    return (
      <>
        <article className="px-6">
          <header className="py-4">
            <h2 className="text-2xl font-bold text-wild-sand-50">Sertifikat</h2>
          </header>
          <ul className="flex items-center gap-4 pb-4 text-wild-sand-50 button-group">
            <li>
              <button data-filter="*" className="p-2">
                Show All
              </button>
            </li>
            <li>
              <button data-filter=".design" className="p-2">
                Design
              </button>
            </li>
            <li>
              <button data-filter=".web-design" className="p-2">
                Web Design
              </button>
            </li>
            <li>
              <button data-filter=".products" className="p-2">
                Products
              </button>
            </li>
          </ul>
        </article>
  
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <article className="shadow-xl justify-self-center card bg-base-100 element-item design">
            <div className="relative" onClick={() => openModal('https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp')}>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="absolute top-0 flex flex-col justify-between w-full h-full p-4">
                <h2 className="badge">Kategori</h2>
                <h2 className="self-end text-end badge">2022 - 2024</h2>
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </article>
        </section>
  
        {/* Modal for Image */}
        <div
          id="imageModal"
          className="fixed top-0 left-0 z-50 hidden w-full h-full bg-wild-sand-950/80"
        >
          <div className="relative flex items-center justify-center h-full">
            <figure className="relative max-w-fit">
              <img id="modalImage" src="" alt="Modal Content" className="max-w-full max-h-full" />
              <figcaption className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="flex items-center justify-center"
                >
                  <Icon icon="healthicons:no" className="text-white rounded-full w-10 h-10"/>
                </button>
              </figcaption>
            </figure>
          </div>
        </div>
      </>
    );
  }
  