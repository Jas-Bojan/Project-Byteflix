import React from 'react'

const MovieCard = ({movie:{title, vote_average, poster_path, releast_date, original_language}}) => {
  return (
    <div className='movie-card'>
        <img src={poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`:'/no-movie.img'}/>
    </div> 
  )
}

export default MovieCard