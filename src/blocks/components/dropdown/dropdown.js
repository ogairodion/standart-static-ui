const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach((el) => {
    const dropdownTop = el.querySelector('.dropdown__top');
   
    dropdownTop.addEventListener('click', (e) => {
        el.classList.toggle('open');
    });
});
