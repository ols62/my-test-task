(() => {
  const total =
    document.getElementsByClassName('total_container')[0].lastElementChild;
  const option = document.getElementsByClassName('checkbox-css');

  const initTotal = () => {
    let element = document.getElementsByClassName('slider_sum');
    let sum = element[0].innerText.substring(1);
    total.innerHTML = `$${sum}`;
  };

  const updateTotal = function (e) {
    if (e.detail.source === 'slider') {
      this.innerHTML = `$${e.detail.sum}`;
      let accessories = document.getElementsByClassName('booking_accessories');
      accessories[0].style.opacity = 0;
      for (let item of document.getElementsByClassName('checkbox-css')) {
        if (item.children[1].checked) {
          item.children[1].checked = false;
          item.style.background = '#F6F5F3';
          item.style.color = '#30261D';
        }
      }
    } else if (e.detail.source === 'checkbox') {
      let totalsum = Number(total.innerHTML.substring(1));
      this.innerHTML = `$${Number(e.detail.sum) + totalsum}`;
    }
  };
  total.addEventListener('sumChange', updateTotal);
  initTotal();
})();
