(() => {
  const total =
    document.getElementsByClassName('total_container')[0].lastElementChild;

  const updateTotal = function () {
    /*alert('updateTotal');*/
  };

   total.addEventListener('sumChange', updateTotal);
})();
