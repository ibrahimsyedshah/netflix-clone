import { Movie } from "../typings";

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  return <div>Banner</div>;
}

export default Banner;
