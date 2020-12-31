const baseURL = 'https://ghibliapi.herokuapp.com';

const searchForm = document.querySelector('form'); 
// console.log(searchForm);
const movieList = document.querySelector('ul');


searchForm.addEventListener('submit', fetchMovie); // function reference - function is not being invoked on this line, we only want the function to run when the submit event happens. the addEventListener method will always send the event as the first parameter to the function being called by default
function fetchMovie(event) {
    console.log(event);
    event.preventDefault(); // stops automatic reload of page on form submission
    fetch(`${baseURL}/films`) // fetch starts the process of fetching a resource from a network, and that fetch will return a promise which is fulfilled (or rejected) once the response is available
        .then(responseObj => responseObj.json()) // .then(function(responseObj) {})
        .then(jsonData => (displayMovies(jsonData)))
}
//                      json = jsonData


function displayMovies(json) {
    console.log('Results:', json);
    json.forEach(movie => {
        console.log(movie);
        let item = document.createElement('li');
        item.innerText = movie.title
        movieList.appendChild(item);
    })
}