const elModal = document.querySelector('.modal');

if(elModal){
    const elModalClose = elModal.querySelector('.modal-close');
    elModalClose.addEventListener('click', function(){
    elModal.classList.remove('modal-open')
});
};

setTimeout(function(){
    elModal.classList.add('modal-open')
}, 10000);

