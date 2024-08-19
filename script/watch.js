function load(){
document.getElementById('cpt').innerText=localStorage.getItem('movieName');
document.getElementById('cpt2').innerText=localStorage.getItem('movieDesc');
const id =localStorage.getItem('id');
//localStorage.removeItem('movieName');
}
load();
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu');
    const menu = document.querySelector('header');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menu-open');});
    });



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

}
}
displayResults2();

function ser(){
const search = document.getElementById('ser').value;
localStorage.setItem("search",search); 
window.location.href="../pages/search.html";
}


async function getTrailer() {
    try {
        const apiKey = 'c8520232a18277c0f55a8792f195efe8'; // Replace with your provided TMDb API key

        const id =localStorage.getItem('id');
        const url =  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const movieID = data.results[0].key;
       document.getElementById('cont2').src=`https://youtube.com/embed/${movieID}`;
}
catch(error){
console.error("error fetching file:"), error;
 
return '';
}
//document.getElementById('cont2').src="https://www.youtube.com/embed/VIDEO_ID";
}
getTrailer();
