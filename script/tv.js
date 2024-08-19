document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu');
    const menu = document.querySelector('header');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menu-open');});
    });

async function getMovies(){

const apiKey = 'c8520232a18277c0f55a8792f195efe8'; // Replace with your provided TMDb API key
        const randomPage = 4;

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&include_image_language=en&page=${randomPage}&sort_by=popularity.desc`;

        const response = await fetch(url);
        const data = await response.json();
        return data;
}
async function displayResults() {
try{
    const data = await getMovies();
    const results = data.results; 
    const resultsContainer = document.getElementById('vim');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }
    results.forEach(movie=> {
        const movieElement = document.createElement('div');
        movieElement.className = 'dav';
        movieElement.addEventListener("click", ()=>{
const mvt= movie.title;
const mac= movie.overview;
const id= movie.id;
        localStorage.setItem("movieName",mvt); 
localStorage.setItem("movieDesc",mac);
localStorage.setItem("id",id);
window.location.href="../pages/watch.html"; 
});

        const imageUrl = movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : 'path/to/default-image.jpg';  // Default image if no poster is available
           movieElement.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url("${imageUrl}")`;

        movieElement.innerHTML = `<h3 id="spide">${movie.title}</h3>`;
        
        resultsContainer.appendChild(movieElement);
    });
}
catch(error){
//document.getElementById("bg2").style.display="block";
}
}
displayResults();


async function getMovies2(){

const apiKey = 'c8520232a18277c0f55a8792f195efe8'; // Replace with your provided TMDb API key
        const randomPage = 2;

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_image_language=en&page=${randomPage}&sort_by=popularity.desc`;

        const response = await fetch(url);
        const data = await response.json();
        return data;
}
async function displayResults2() {
try{
    const data = await getMovies2();
    const results = data.results; 
    const resultsContainer = document.getElementById('tren');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }
    results.forEach(movie=> {
        const movieElement = document.createElement('div');
        movieElement.className = 't2';
        movieElement.addEventListener("click", ()=>{
const mvt= movie.title;
const mac= movie.overview;
const id= movie.id;
        localStorage.setItem("movieName",mvt); 
localStorage.setItem("movieDesc",mac);
localStorage.setItem("id",id);
window.location.href="../pages/watch.html"; 
});

        const imageUrl = movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` 
            : 'path/to/default-image.jpg';  // Default image if no poster is available
           movieElement.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url("${imageUrl}")`;

        movieElement.innerHTML = `<h3 id="spide2">${movie.title}</h3>`;
        
        resultsContainer.appendChild(movieElement);
    });
}
catch(error){
//document.getElementById("bg2").style.display="block";
}
}
displayResults2();

function ser(){
const search = document.getElementById('ser').value;
localStorage.setItem("search",search); 
window.location.href="../pages/search.html";
}






const apiKey = 'c8520232a18277c0f55a8792f195efe8';  // Replace with your TMDb API key
const apiUrl = 'https://api.themoviedb.org/3/tv/popular';
window.onload= () => {
    const query = localStorage.getItem('search');
    if (query) {
        searchMovies(query);
    }
}
document.getElementById("serbtn").addEventListener("click", ()=> {
    const query = document.getElementById("ser").value;
    if (query) {
        searchMovies(query);
    }
});
async function searchMovies(query) {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}

async function displayResults4() {
    const query =localStorage.getItem('search');
    const results = await searchMovies(query);
    const resultsContainer = document.getElementById('cont2');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach( movie=> {
        const movieElement = document.createElement('div');
        movieElement.className = 'dag';
        movieElement.addEventListener("click", ()=>{
const mvt= movie.original_name;
const mac= movie.overview;
const id= movie.id;
        localStorage.setItem("movieName",mvt); 
localStorage.setItem("movieDesc",mac);
localStorage.setItem("id",id);
window.location.href="../pages/watch.html"; 
});

        const imageUrl = movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : 'path/to/default-image.jpg';  // Default image if no poster is available
           movieElement.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url("${imageUrl}")`;

        movieElement.innerHTML = `<h3 id="spide2">${movie.original_name}</h3>`;
        
        resultsContainer.appendChild(movieElement);
    });
}
displayResults4();

