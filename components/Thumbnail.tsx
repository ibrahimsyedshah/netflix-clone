import Image from "next/image";
import { Movie } from "../typings"

interface Props {
    movie: Movie;
}

function Thumbnail({movie}: Props) {
    console.log(movie.backdrop_path || movie.poster_path)
  return (
    <div className="relative h-28 min-w-[180px]">
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail