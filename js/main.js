
(() => {
    console.log('javascript is running! go catch it!');

    //VARIABLES 
    const jacobHead = document.querySelector('.personOne'),
        helenHead = document.querySelector('.personTwo'),
        jacobTitle = document.querySelector('#jacob-title'),
        helenTitle = document.querySelector('#helen-title'),
        jacobBoxes = document.querySelectorAll('.j-box'),
        helenBoxes = document.querySelectorAll('.h-box');

    //FUNCTIONS
    // function addBoxes(e){
    //     console.log(e);
    //     if(e=='jacob'){
    //         jacobBoxes.firstElementChild.classList.add('appear');
    //         jacobBoxes.firstElementChild.classList.remove('opacity');
    //     }else if(e=='helen'){
    //         helenBoxes.classList.remove('hidden');
    //     }
    // }

    function openSide(e){
        if (this == jacobHead || this == jacobTitle){
            jacobHead.firstChild.classList.add('slide-left');
            helenHead.classList.add('opacity');
            helenTitle.classList.add('hidden');
            jacobTitle.classList.add('main-title');
            jacobBoxes.forEach(function(element) {
                element.classList.add('grow');
              });
        }else if(this == helenHead || this == helenTitle){
            helenHead.firstChild.classList.add('slide-right');
            jacobHead.classList.add('opacity');
            jacobTitle.classList.add('hidden');
            helenTitle.classList.add('main-title');
            helenBoxes.forEach(function(element) {
                element.classList.add('grow');
              });
        }else{
            console.log('WHAT');
        }
    }



    //EVENTLISTENERS
    jacobHead.addEventListener('click', openSide);
    helenHead.addEventListener('click', openSide);
    jacobTitle.addEventListener('click', openSide);
    helenTitle.addEventListener('click', openSide);
    

})();