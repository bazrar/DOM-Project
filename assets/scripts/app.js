const addMovieModal = document.querySelector('#add-modal');
const backdrop = document.getElementById('backdrop'); 
const startButton = document.querySelector('header button'); 
const modal = document.querySelector('.modal'); 
const movieSection = document.querySelector('#entry-text'); 
const main = document.querySelector('main'); 
const movieList = main.lastElementChild; 

// console.log(movieSection.style.display = 'none');
// input fields 
// const movieTitle = document.querySelector('#title');
// const imageURL = document.querySelector('#iamge-url');
// const rating = document.querySelector('#rating'); 
// const  userInputs = document.querySelector('.modal__content').children;
const userInputs = document.querySelectorAll('.modal__content input'); 
// console.log(userInputs)

const movies = []; 

const modalActions = modal.lastElementChild; 
const addMovieButton = modalActions.firstElementChild;
const cancelMovieButton = modalActions.lastElementChild;

// console.log(addMovieButton);
// console.log(cancelMovieButton); 
// const header = document.body.lastElementChild.previousElementSibling; 
// const startAddMovieButton = header.lastElementChild; 
// console.log(startButton);

const updateUI = () => {
    if(!movies.length) {
        movieSection.style.display = 'block'; 

    } else {
       movieSection.style.display = 'none'; 
    }
}

const renderMovieElement = (movie)  => {
    const {title, imageURL, ratings} = movie; 
    const listEl = document.createElement('li'); 
    listEl.className = 'movie-element'; 
    listEl.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageURL}" alt="${title}" />
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${ratings}/5 stars</p>
    </div>
    `;
    movieList.append(listEl);
}; 



const toggleBackdropHandler  = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible'); 
    toggleBackdropHandler(); 
    clearMovieInputs();
}; 

const backdropClickHandler = () => {
    toggleMovieModal();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value; 
    const imageURLValue = userInputs[1].value; 
    const ratingsValue = userInputs[2].value; 

    if(titleValue.trim() === '' || 
    imageURLValue.trim() === '' || 
    ratingsValue.trim() === '' || 
    +ratingsValue < 1 ||
    +ratingsValue > 5
    ) {
        alert('Please enter valid values(rating between 1 and 5)')
    } else {
        // console.log('else block');
        // console.log(`titleValue: ${titleValue} imageURLValue: ${imageURLValue} 
        // ratingsValue: ${ratingsValue}`)
        const newMovie = {
            title: titleValue, 
            imageURL : imageURLValue, 
            ratings: ratingsValue
        }
        movies.push(newMovie); 
        console.log(movies);
        toggleMovieModal(); 
        updateUI(); 
        renderMovieElement(newMovie); 
    }
}

const clearMovieInputs = () => {
    userInputs.forEach(userInput => userInput.value = ''); 
}



// toggle backdrops on click events
backdrop.addEventListener('click', backdropClickHandler); 
cancelMovieButton.addEventListener('click',toggleMovieModal);
startButton.addEventListener('click', toggleMovieModal);
addMovieButton.addEventListener('click', addMovieHandler);  

// add onChange eventlistener on the input fields
// movieTitle.onchange = () => {
//     console.log(movieTitle.value);
// }
