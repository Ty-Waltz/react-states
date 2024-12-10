import { useState } from 'react';

const MoviesList = () => {
    const initialMovies = [
        { id: 1, title: 'Spider-Man: Into the Spider-Verse', description: 'Spider-Man: Into the Spider-Verse matches bold storytelling with striking animation for a purely enjoyable adventure with heart, humor, and plenty of superhero action.', genre: 'Action', showDetails: false },
        { id: 2, title: 'Toy Story', description: 'Entertaining as it is innovative, Toy Story reinvigorated animation while heralding the arrival of Pixar as a family-friendly force to be reckoned with.', genre: 'Comedy', showDetails: false },
        { id: 3, title: 'How to Train Your Dragon', description: 'A misfit Viking teenager sees a chance to change the course of his clans future when he befriends an injured dragon.', genre: 'Adventure', showDetails: false },
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [showActionMovies, setShowActionMovies] = useState(false);

    const toggleDetails = (id) => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === id
                    ? { ...movie, showDetails: !movie.showDetails }
                    : movie
            )
        );
    };

    const removeMovie = (id) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    };

    const toggleView = () => {
        setShowActionMovies(prevState => !prevState);
    };

    const filteredMovies = showActionMovies ? movies.filter(movie => movie.genre === 'Action') : movies;

    return (
        <div>
            <button onClick={toggleView}>
                {showActionMovies ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        <div>
                            <span
                                style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                onClick={() => toggleDetails(movie.id)}
                            >
                                {movie.title}
                            </span>
                            <button onClick={() => removeMovie(movie.id)} style={{ marginLeft: '10px' }}>
                                Remove
                            </button>
                        </div>
                        {movie.showDetails && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;