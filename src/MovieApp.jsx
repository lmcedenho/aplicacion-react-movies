import { useState } from 'react'
import { MovieCard } from './MovieCard'

export const MovieApp = () => {

    const [search, setSearch] = useState('')
    const [movieList, setMovieList] = useState(null)
    const URL_BASE = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = 'YOUR_API_KEY'

    const handleInputChange = ({ target }) => {
        setSearch(target.value)
        console.log(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchMovies()
    }

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${URL_BASE}?query=${search}&api_key=${API_KEY}&language=es-ES`)
            const data = await response.json()
            setMovieList(data.results)
        } catch (error) {
            console.error('ha ocurrido un error: ', error)
        }
    }

    return (
        <div className='container'>
            <h1></h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Escribe una pelicula'
                    value={search}
                    onChange={handleInputChange}
                />
                <button>Buscar</button>
            </form>


            {movieList &&
                <div className='movie-list'>
                    {movieList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            }
        </div>
    )
}
