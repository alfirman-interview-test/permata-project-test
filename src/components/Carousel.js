import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(1);
  const ref = useRef();

  return (
    <div className="p-5 w-full whitespace-nowrap">
      <div className="h-[350px] w-3/4 mx-auto relative">
        <div className="absolute -left-14 h-full flex items-center justify-center">
          <button
            onClick={() => {
              if (currentImage > 1) {
                ref.current.scrollLeft += -ref.current.offsetWidth - 20;
                setCurrentImage(currentImage - 1);
              }
            }}
          >
            <ChevronLeftIcon className="h-10 w-10 border border-gray-300 p-2 rounded-full text-gray-600 bg-white" />
          </button>
        </div>
        <div className="absolute -right-14 h-full flex items-center justify-center">
          <button
            onClick={() => {
              if (currentImage < images.length) {
                ref.current.scrollLeft += ref.current.offsetWidth + 20;
                setCurrentImage(currentImage + 1);
              }
            }}
          >
            <ChevronRightIcon className="h-10 w-10 border border-gray-300 p-2 rounded-full text-gray-600 bg-white" />
          </button>
        </div>
        <div
          ref={ref}
          className="space-x-5 w-full h-full overflow-x-scroll hide-scroll-bar"
        >
          {images.map((img, i) => (
            <img
              key={i}
              alt={img}
              src={img}
              className="rounded-xl object-cover h-full w-full inline-block"
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-5 space-x-1">
          {images.map((el, i) => (
            <div
              key={i}
              className={`${
                currentImage === i + 1 ? "bg-gray-600" : "bg-gray-300"
              } h-1 w-5 rounded-full`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

const images = [
  "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
];
