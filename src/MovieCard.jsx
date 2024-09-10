import React, { useState } from 'react';
import './MovieApp.css'; // Asegúrate de que el archivo CSS esté importado

export const MovieCard = ({ movie }) => {
    const [isFlipped, setIsFlipped] = useState(false); // Estado individual para cada tarjeta

    const handleClick = () => {
        setIsFlipped(!isFlipped); // Alterna el estado solo para esta tarjeta
    };

    return (
        movie.poster_path &&
        <div className={`movie-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="movie-card-inner">
                <div className="movie-card-front">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="movie-card-back">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};
