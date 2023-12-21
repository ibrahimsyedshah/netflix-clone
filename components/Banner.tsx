import Image from "next/image";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    //changed lg:h-[65vh] to lg:h-[85vh]
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[85vh] lg:justify-end lg:pb-12">
      <div className={`absolute top-0 left-0 h-[95vh] -z-10 banner-width`}>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
          alt={""}
        />
      </div>
      {/* modified font sizes and max width in h1 and p for lg breakpoints */}
      <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-[46rem] lg:text-xl text-shadow-md">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:w-7 md:h-7 " /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70 "
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
