"use client"; // <===== REQUIRED

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShopTheLook = () => {
	const slides = [
		{
			href: "https://mysaintclo.com.ar/productos/polo-gris/",
			src: "//acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1734549075679-5027728832-05b8a2ebd40bc8f911c85e582b2531d81734549078.png?2136655381",
			alt: "Polo Gris",
		},
		{
			href: "https://mysaintclo.com.ar/productos/remera-rodeo-blanca/",
			src: "//acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1734550748097-6170275543-0db9b1083dd46ef7f88926b36ccec8ef1734550749.png?2136655381",
			alt: "Remera Rodeo Blanca",
		},
		{
			href: "https://mysaintclo.com.ar/productos/polo-gris/",
			src: "https://acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1734551265057-1117429623-6e457f4e972377fbd1602a350276c94f1734551268.png?2136655381",
			alt: "Polo Gris",
		},
		{
			href: "https://mysaintclo.com.ar/productos/remera-rodeo-blanca/",
			src: "https://acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1729794976744-8232466906-41eabde1acf6e4c2f06ba11ec8b9ea711729794980.png?2136655381",
			alt: "Remera Rodeo Blanca",
		},
		{
			href: "https://mysaintclo.com.ar/productos/polo-gris/",
			src: "https://acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1729814285608-4692534494-1ca496f807d0df0d3bb9fa1b48fab04f1729814286.png?2136655381",
			alt: "Polo Gris",
		},
		{
			href: "https://mysaintclo.com.ar/productos/remera-rodeo-blanca/",
			src: "https://acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1729794976744-8458887595-08db62fbd1e36e55680267fe726d8c3d1729794982.png?2136655381",
			alt: "Remera Rodeo Blanca",
		},
		{
			href: "https://mysaintclo.com.ar/productos/polo-gris/",
			src: "https://acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1729814436194-1902137371-d03b069f3f578e5fbd3532614a05a2a21729814439.png?2136655381",
			alt: "Polo Gris",
		},
		{
			href: "https://mysaintclo.com.ar/productos/remera-rodeo-blanca/",
			src: "https://acdn.mitiendanube.com/stores/002/753/652/themes/rio/slide-1729794976745-8054420470-8bc4d36cc136841162ef57abf6ea887d1729794984.png?2136655381",
			alt: "Remera Rodeo Blanca",
		},
		// Add more slides as needed
	];

	return (
		<section className="py-12">
			<div className="container mx-auto text-center">
				<h2 className="text-xl font-bold mb-8">SHOP THE LOOK</h2>
				<div className="relative">
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={10}
						slidesPerView={4}
						pagination={{
							type: "bullets",
						}}
						className="!px-4"
					>
						{slides.map((slide, index) => (
							<SwiperSlide key={index} className="w-[200px]">
								<a href={slide.href} aria-label={`Carrusel ${index + 1}`}>
									<img
										src={slide.src}
										alt={slide.alt}
										className="rounded transition-transform duration-300 hover:scale-110"
									/>
								</a>
							</SwiperSlide>
						))}
					</Swiper>
					{/* Custom Progress Bar Container */}
					<div className="swiper-pagination swiper-pagination-progressbar h-1 bg-blue-200"></div>
				</div>
			</div>
		</section>
	);
};

export default ShopTheLook;
