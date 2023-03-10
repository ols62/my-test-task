(() => {
  let nav = document.querySelector('.header_nav_small');
  nav.addEventListener('click', function (event) {
    this.previousElementSibling.classList.toggle('nav_active');
    /*for (let element of this.children) {
      console.log(element);
      element.classList.toggle('active');
    }*/
    event.stopPropagation;
  });
})();
