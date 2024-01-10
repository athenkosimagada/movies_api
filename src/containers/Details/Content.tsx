import { HiStar } from "react-icons/hi";
import CastList from "./CastList";
import { Language } from "../../pages/Details";

interface ContentProps {
  description: string;
  genres: any[];
  year: string;
  rate: number;
  languages: Language[];
  time: number;
}

function Content({
  description,
  genres,
  year,
  rate,
  languages,
  time,
}: ContentProps) {
  return (
    <div className="contents">
      <div className="left">
        <div className="card">
          <p className="title">Description</p>
          <p>{description}</p>
        </div>
        <CastList />
      </div>
      <div className="right">
        <div className="card">
          <p className="title">Runtime</p>
          <p>{(time/60).toFixed(0)} hour(s) {time % 60} minutes</p>
        </div>
        <div className="card">
          <p className="title">Genres</p>
          <div className="genres">
            {genres.slice(0, 3).map((genre, index) => (
              <p key={index} className="btn-genre">
                {genre.name}
              </p>
            ))}
          </div>
        </div>
        <div className="card">
          <p className="title">Year of release</p>
          <p>{year}</p>
        </div>
        <div className="card">
          <p className="title">Ratings</p>
          <p className="rate">
            <HiStar />
            <span>{rate?.toFixed(2)}</span>
          </p>
        </div>
        <div className="card">
          <p className="title">Languages</p>
          <div className="genres">
            {languages.map((genre, index) => (
              <p key={index} className="btn-genre">
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
