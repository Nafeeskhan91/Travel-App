// script.js

function searchMovies() {
    const title = document.getElementById('searchInput').value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${title}`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(error => console.error('Error fetching movies:', error));
}

function displayMovies(movies) {
    const moviesElement = document.getElementById('movies');
    moviesElement.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}</p>
            <p>${movie.overview}</p>
        `;
        moviesElement.appendChild(movieElement);
    });
}
