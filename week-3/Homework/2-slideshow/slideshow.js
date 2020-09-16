// Selectors
const btn = document.getElementById('back');
const btnForward = document.getElementById('forward');
const autoForward = document.getElementById('autoForward');
const btnStop = document.getElementById('stop');
const backwardChange = document.getElementById('autoBackward');
const title = document.getElementById('title');


// Photos
const photo = [
    {
    img: 'https://images.unsplash.com/photo-1530311583484-ea8bf4c407fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    location: 'Iran',
    title: 'Beautiful Iran'
},
    {
    img: 'https://images.unsplash.com/photo-1587260704881-fff9988fda80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    location: 'Iran',
    title: 'Beautiful Iran'
},
    {
    img: 'https://images.unsplash.com/photo-1591644044845-1a5bb4ee78c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    location: 'Iran',
    title: 'Beautiful Iran'
},
    {
    img: 'https://images.unsplash.com/photo-1568057217189-dc40161931b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    location: 'Iran',
    title: 'Beautiful Iran'
},
    {
    img: 'https://images.unsplash.com/photo-1584346958286-241ae2160592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    location: 'Iran',
    title: 'Beautiful Iran'
},
    {
    img: 'https://images.unsplash.com/photo-1587902319938-ba01ffbf1001?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    location: 'Iran',
    title: 'Beautiful Iran'
}
]


// Global variables
let nextPhotoNumber = 0;
let autoback = photo.length;
let maximum = photo.length -1;


// EventListeners

btnForward.addEventListener('click', ()=>{
    skipPhoto()
})

btn.addEventListener('click', ()=>{
    backPhoto();
})


autoForward.addEventListener('click', () => {
    forwardAutomatically()
})


backwardChange.addEventListener('click', () => {
    backwardAutomatically()
})

btnStop.addEventListener('click', () => {
    toStop()
})

// Functions
const skipPhoto = () => {
    if(nextPhotoNumber < maximum){
        nextPhotoNumber+= 1 ;
        const rr = document.getElementById('image').src = `${photo[nextPhotoNumber].img}`;
        console.log('nextPhotoNumber: ' + nextPhotoNumber + ' ' + 'photo :' + photo.length)
    }
}

const backPhoto = () => {
    if(nextPhotoNumber !== 0){
        nextPhotoNumber--;
        const changePhotos = document.getElementById('image').src = `${photo[nextPhotoNumber].img}`;
        console.log('nextPhotoNumber: ' + nextPhotoNumber + ' ' + 'photo :' + photo.length)
    }
}

const forwardAutomatically = () => {
    const auto = setInterval(increment, 5000);
    function increment (){
    nextPhotoNumber+= 1 ;
    const changePhotos = document.getElementById('image').src = `${photo[nextPhotoNumber].img}`;
    console.log('nextPhotoNumber: ' + nextPhotoNumber + ' ' + 'photo :' + photo.length)
    if(nextPhotoNumber === maximum){
        alert('To watch againg please click on auto-backward or backward')
        clearInterval(auto)
        } 
    }
}
const backwardAutomatically = () => {
    const auto = setInterval(decrease, 5000);
    function decrease (){
    autoback-= 1 ;
    const changePhotos = document.getElementById('image').src = `${photo[autoback].img}`;
    console.log('autoback: ' + autoback + ' ' + 'photo :' + photo.length)
    if(autoback === 0){
        clearInterval(auto)
        alert('To watch againg please click on auto-forward or forward')
        }
    }
}

const toStop = () => {
    if(autoback < photo.length){
        const back = setInterval(backwardAutomatically, 1000);
        clearInterval(back);
    } 
    const forward = setInterval(forwardAutomatically, 1000);
    clearInterval(forward)
}

// 