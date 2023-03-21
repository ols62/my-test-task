(() => {
  const checkbox = document.getElementsByClassName('checkbox-css');
  const total =
    document.getElementsByClassName('total_container')[0].lastElementChild;

  const toggleAccessories = (show) => {
    let accessories = document.getElementsByClassName('booking_accessories');
    if (show) {
      accessories[0].style.opacity = 1;
    } else {
      accessories[0].style.opacity = 0;
    }
  };

  const change = function (e) {
    let start = this.innerText.lastIndexOf('|') + 1;
    let end = this.innerText.lastIndexOf('$');
    let sum = this.innerText.substring(start, end);
    let index = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement);
    if (e.target.checked) {
      this.style.background = '#9E7D43';
      this.style.color = '#FFFFFF';
      if (index === 0) {
        toggleAccessories(true);
      }
    } else {
      this.style.color = '#30261D';
      this.style.background = '#F6F5F3';
      sum *= -1;
      if (index === 0) {
        toggleAccessories(false);
      }
    }
    total.dispatchEvent(
      new CustomEvent('sumChange', {
        bubbles: true,
        composed: true,
        detail: { sum: sum, source: 'checkbox' },
      })
    );
  };

  for (let element of checkbox) {
    element.addEventListener('change', change);
  }
})();
