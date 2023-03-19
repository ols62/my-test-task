(() => {
  const checkbox = document.getElementsByClassName('checkbox-css');
  const change = function (e) {
    if (e.target.checked) {
      this.parentElement.style.background = '#9E7D43';
      this.parentElement.style.color = '#FFFFFF';
    } else {
      this.parentElement.style.color = '#30261D';
      this.parentElement.style.background = '#F6F5F3';
    }
  };

  for (let i = 0; i < checkbox.length; i++) {
    let element = checkbox[i].getElementsByTagName('input');
    element[0].addEventListener('change', change);
    if (element[0].checked) {
      element[0].parentElement.style.background = '#9E7D43';
      element[0].parentElement.style.color = '#FFFFFF';
    }
  }
})();
