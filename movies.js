const { default: axios } = require('axios');

getMovies = async (request, response) => {
  const citySearch = request.query.searchQuery

  try {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${citySearch}`;
    console.log(movieUrl)
    const movieInfo = await axios.get(movieUrl);
    console.log(movieInfo.data)
    let movieData = movieInfo.data.results.map(movie => new Movies(movie));
    response.status(200).send(movieData);
  } catch (error) {
    response.status(500).send('And I oop! City not found')
  }
}

function Movies(movie) {
    this.title = movie.title
    this.image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    this.overview = movie.overview
}

module.exports = getMovies;