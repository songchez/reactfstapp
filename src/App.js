import axios from "axios";
import react from "react";
import Movies from "./movies";
import "./App.css";

class App extends react.Component {
  state = {
    isloading: true,
    movies: [],
  };

  Getmovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json/sort_by=rating"
    );
    this.setState({ movies, isloading: false }); //movies:movies와 같은뜻임
  };

  componentDidMount() {
    this.Getmovies();
  }
  
  render() {
    const { isloading, movies } = this.state;
    const loadingimg = "diamond.png";
    
    return (
      <section className="container">
        {isloading ? (
          <div className="loader">
            <div className="lds-circle">
                <img src={loadingimg} alt="Loading"/>
            </div>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movies, index) => {
              return (
                <Movies
                  key={index}
                  year={movies.year}
                  title={movies.title}
                  summary={movies.summary}
                  genre={movies.genres}
                  poster={movies.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
