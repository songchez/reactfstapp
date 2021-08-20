import PropTypes from "prop-types";
import "./Movie.css";




function Movies({year, title, summary, poster, genre}){
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <h5 className="movies_genre">{genre}</h5>
        <p className="movie_summary">{summary.slice(0,130)}...</p>
        <ul className="movie_genre">
          {genre.map((genre, index) => (
            <li className="genre_g" key={index}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movies.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;