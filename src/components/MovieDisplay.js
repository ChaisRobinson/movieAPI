import React from 'react';

export default function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <h1 className="movieTitle">{movie.Title}</h1>
        <h2 className="movieGenre">{movie.Genre}</h2>
        <img className="moviePoster" src={movie.Poster} alt={movie.Title} />
        <h2 className="movieYear">{movie.Year}</h2>
        <div className="descriptionSection">
          <h3 className="descriptionTitle">Description</h3>
          <p className="descriptionText">{movie.Plot}</p>
        </div>
      </>
    );
  };

  const loading = () => {
    return <h1 className="movieErorr">No Movie to Display</h1>;
  };

  return movie ? loaded() : loading();
}