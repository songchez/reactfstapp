import PropTypes from "prop-types";

function Movies({id, year, title, summary, poster}){
  return <h5>{title}</h5>
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default Movies;