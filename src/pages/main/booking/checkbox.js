(() => {
const checkbox = document.getElementsByClassName('checkbox-css');
for (let i = 0; i < checkbox.length; i++) {
  let element = checkbox[i].getElementsByTagName('input');
  element[0].addEventListener('change', function (event) {
    if (event.target.checked) {
      this.parentElement.style.background = '#9E7D43';
      this.parentElement.style.color = '#FFFFFF';
    } else {
      this.parentElement.style.color = '#30261D';
      this.parentElement.style.background = '#F6F5F3';
    }
  });
}
})();
