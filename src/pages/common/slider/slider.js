(() => {
  const actieColor = '#9E7D43';
  const passiveColor = '#FFFFFF';
  const sliders = [];
  const mql = window.matchMedia('(max-width: 870px)');
  const total =
    document.getElementsByClassName('total_container')[0].lastElementChild;

  const controlsClass = (carusel) => {
    const sliderControls = {
      bntprev: 'prev',
      bntnext: 'next',
      leftarrow: 'left-arrow',
      rightarrow: 'right-arrow',
      container: 'marker_container',
      marker: 'slider_marker',
    };
    const caruselControls = {
      bntprev: 'carusel_prev',
      bntnext: 'carusel_next',
      leftarrow: 'carusel_left-arrow',
      rightarrow: 'carusel_right-arrow',
      container: 'carusel_marker_container',
      marker: 'carusel_marker',
    };
    return carusel ? caruselControls : sliderControls;
  };

  const addElements = (element) => {
    ctrlClass = controlsClass(element.carusel);
    element.container.insertAdjacentHTML(
      'beforeend',
      `<label class="${ctrlClass.bntprev}"><span class="${ctrlClass.leftarrow}"></span></label>`
    );
    element.container.insertAdjacentHTML(
      'beforeend',
      `<label class="${ctrlClass.bntnext}"><span class="${ctrlClass.rightarrow}"></span></label>`
    );
    let div = document.createElement('div');
    let divContent = '';
    div.className = ctrlClass.container;
    for (let j = 0; j < element.count; j++) {
      divContent += `<div class="${ctrlClass.marker}"></div>`;
    }
    div.innerHTML = divContent;
    element.container.append(div);
    if (element.imgCount > element.count) {
      div = document.createElement('div');
      div.innerHTML =
        element.container.firstElementChild.firstElementChild.innerHTML;
      element.container.firstElementChild.prepend(div);
      div = document.createElement('div');
      div.innerHTML =
        element.container.firstElementChild.lastElementChild.innerHTML;
      element.container.firstElementChild.append(div);
    }
    element.container.lastChild.style.left = `calc(50% - ${
      element.container.lastChild.offsetWidth / 2
    }px)`;
  };

  const getOffset = (slider) => {
    let padding = getComputedStyle(
      slider.container.children.item(0).firstElementChild
    )['padding-right'];
    let index = padding.lastIndexOf('px')
      ? padding.lastIndexOf('px')
      : padding.lastIndexOf('rem');
    padding = index ? padding.substr(0, index) : 0;
    let viewWidth = slider.container.offsetWidth;
    let imgWidth = viewWidth * slider.carusel;
    let wrapWidth =
      imgWidth * slider.imgCount + padding * (slider.imgCount - 1);
    let offset = ((imgWidth - (viewWidth - imgWidth) / 2) / wrapWidth) * 100;
    return Math.round(offset * 100) / 100;
  };

  const moveSlide = (slider) => {
    let percent = (-100 / slider.imgCount) * slider.current - slider.offset;
    slider.container.firstElementChild.style.transform = `translateX(${percent}%)`;
  };

  const showText = (slider, flag) => {
    if (slider.text) {
      if (flag === 0) {
        slider.container.querySelectorAll('.slider_text')[
          slider.current
        ].style.opacity = 0;
        slider.container.querySelectorAll('.slider_text')[
          slider.current
        ].style.visibility = 'hidden';
      } else if (flag === 1) {
        slider.container.querySelectorAll('.slider_text')[
          slider.current
        ].style.visibility = 'visible';
        slider.container.querySelectorAll('.slider_text')[
          slider.current
        ].style.opacity = 1;
      }
    }
  };

  const sendEvent = (sum) => {
    total.dispatchEvent(
      new CustomEvent('sumChange', {
        bubbles: true,
        composed: true,
        detail: { sum: sum, source: 'slider' },
      })
    );
  };

  const moveSlider = (element, slider, direction) => {
    element.lastElementChild.children.item(
      slider.current
    ).style.backgroundColor = passiveColor;
    showText(slider, 0);
    if (direction === 'right') {
      if (slider.current < slider.count - 1) {
        slider.current++;
      } else {
        slider.current = 0;
      }
    } else if (direction === 'left') {
      if (slider.current > 0) {
        slider.current--;
      } else {
        slider.current = slider.count - 1;
      }
    }
    element.lastElementChild.children.item(
      slider.current
    ).style.backgroundColor = actieColor;
    moveSlide(slider);
    showText(slider, 1);
    let sum = slider.container
      .getElementsByClassName('slider_sum')
      [slider.current].innerText.substring(1);
    if (slider.text) {
      sendEvent(sum);
    }
  };

  const pressButtonNext = function () {
    for (let slider of sliders) {
      if (this.parentElement === slider.container) {
        moveSlider(this.parentElement, slider, 'right');
        break;
      }
    }
  };

  const pressButtonPrev = function () {
    for (let slider of sliders) {
      if (this.parentElement === slider.container) {
        moveSlider(this.parentElement, slider, 'left');
        break;
      }
    }
  };

  const touchSliderStart = function (event) {
    for (let slider of sliders) {
      if (this === slider.container) {
        slider.touchStart = event.touches[0].clientX;
        break;
      }
    }
  };

  const touchSliderEnd = function (event) {
    for (let slider of sliders) {
      if (this === slider.container) {
        let deltaX = slider.touchStart - event.changedTouches[0].clientX;
        if (Math.abs(deltaX) > 30) {
          if (deltaX < 0) {
            moveSlider(this, slider, 'left');
          } else {
            moveSlider(this, slider, 'right');
          }
        }
        break;
      }
    }
  };

  const initWrapper = (slider) => {
    let element = {
      container: slider,
      carusel: 0,
      count: slider.getElementsByClassName('slide').length,
      imgCount: 0,
      current: 0,
      text: slider.getElementsByClassName('slider_text').length,
      offset: 0,
      touchStart: 0,
    };
    let persent = 100;
    element.imgCount = element.count;
    if (slider.firstElementChild.classList.contains('carusel_slider')) {
      element.imgCount = element.count + 2;
      element.carusel =
        element.container.firstElementChild.offsetWidth /
        element.container.offsetWidth;
      persent = element.carusel * 100;
    }
    addElements(element);
    persent = persent * element.imgCount;
    element.container.firstElementChild.style.width = `${persent}%`;
    if (element.carusel) {
      element.offset = getOffset(element);
    }
    element.container.firstElementChild.style.transform = `translateX(${
      element.offset * -1
    }%)`;
    const btnPrev = slider.children[slider.children.length - 3];
    const btnNext = slider.children[slider.children.length - 2];
    btnNext.addEventListener('click', pressButtonNext);
    btnPrev.addEventListener('click', pressButtonPrev);
    slider.children[
      slider.children.length - 1
    ].firstElementChild.style.backgroundColor = actieColor;
    if (element.text) {
      slider.querySelectorAll('.slider_text')[0].style.opacity = 1;
      slider.querySelectorAll('.slider_text')[0].style.visibility = 'visible';
    }
    slider.addEventListener('touchstart', touchSliderStart);
    slider.addEventListener('touchend', touchSliderEnd);
    return element;
  };

  const toggleControls = (slider, removelClass, addClass) => {
    let elements = slider.container.firstElementChild.parentElement.children;
    elements.item(elements.length - 3).classList.remove(removelClass.bntprev);
    elements.item(elements.length - 3).classList.add(addClass.bntprev);
    elements
      .item(elements.length - 3)
      .firstElementChild.classList.remove(removelClass.leftarrow);
    elements
      .item(elements.length - 3)
      .firstElementChild.classList.add(addClass.leftarrow);
    elements.item(elements.length - 2).classList.remove(removelClass.bntnext);
    elements.item(elements.length - 2).classList.add(addClass.bntnext);
    elements
      .item(elements.length - 2)
      .firstElementChild.classList.remove(removelClass.rightarrow);
    elements
      .item(elements.length - 2)
      .firstElementChild.classList.add(addClass.rightarrow);
    elements.item(elements.length - 1).classList.remove(removelClass.container);
    elements.item(elements.length - 1).classList.add(addClass.container);
    for (let marker of elements.item(elements.length - 1).children) {
      marker.classList.remove(removelClass.marker);
      marker.classList.add(addClass.marker);
      slider.container.lastChild.style.left = `calc(50% - ${
        slider.container.lastChild.offsetWidth / 2
      }px)`;
    }
  };

  const changeSlider = (e) => {
    for (let slider of sliders) {
      slider.container.style.visibility = 'hidden';
      if (slider.carusel) {
        if (e.matches) {
          let width = 100 * slider.imgCount;
          slider.container.firstElementChild.classList.remove('carusel_slider');
          slider.container.firstElementChild.style.width = `${width}%`;
          slider.offset = 100 / slider.imgCount;
          slider.container.firstElementChild.style.transform =
            'translateX(-' + slider.offset + '%)';
          toggleControls(slider, controlsClass(true), controlsClass(false));
        } else {
          slider.container.firstElementChild.classList.add('carusel_slider');
          slider.container.firstElementChild.style.width =
            slider.carusel * 100 * slider.imgCount + '%';
          slider.offset = getOffset(slider);
          slider.container.firstElementChild.style.transform =
            'translateX(-' + slider.offset + '%)';
          toggleControls(slider, controlsClass(false), controlsClass(true));
        }
        moveSlide(slider);
      }
      setTimeout(() => {
        slider.container.style.visibility = 'visible';
      }, 350);
    }
  };

  for (let slider of document.getElementsByClassName('slider')) {
    sliders.push(initWrapper(slider));
  }

  mql.addEventListener('change', changeSlider);
  changeSlider(mql);

})();
