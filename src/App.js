import axios from "axios";
import react from "react";
import Movies from "./movies";

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
    return (
      <div>
        {isloading
          ? "Loading..."
          : movies.map((movies) => {
              return (
                <Movies
                  key={movies.id}
                  id={movies.id}
                  year={movies.year}
                  title={movies.title}
                  summary={movies.summary}
                  poster={movies.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
