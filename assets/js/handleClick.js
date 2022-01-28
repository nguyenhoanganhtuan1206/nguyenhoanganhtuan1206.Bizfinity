const btnListMobile = document.querySelector('.js-btn-list-on-mobile');
const listOnMobile = document.querySelector('.js-list-mobile');
const btnCloseList = document.querySelector('.js-close-list');

btnListMobile.addEventListener('click' , function() {
    listOnMobile.classList.add('open-list');
    btnCloseList.style.display = "block";
    btnListMobile.style.display = "none";
});

btnCloseList.addEventListener('click' , function() {
    listOnMobile.classList.remove('open-list');
    btnListMobile.style.display = "block";
    btnCloseList.style.display = "none";
});