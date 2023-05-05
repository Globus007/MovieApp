export const transformResponseToMovieInfo = (data) => {
  const {
    poster_path,
    title,
    release_date,
    genres,
    vote_average,
    runtime,
    overview,
  } = data;
  return {
    imageUrl: poster_path,
    movieName: title,
    releaseYear: release_date?.substring(0, 4),
    relevantGenres: genres,
    rating: vote_average,
    duration: runtime,
    description: overview,
  };
};
