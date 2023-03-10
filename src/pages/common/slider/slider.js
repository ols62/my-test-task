(() => {
  const actieColor = '#9E7D43';
  const passiveColor = '#FFFFFF';
  const sliders = [];
  const mql = window.matchMedia('(max-width: 1080px)');

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
  };

  const getOffset = (slider) => {
    let viewWidth = slider.container.offsetWidth;
    let wrapWidth = viewWidth * slider.carusel * slider.imgCount;
    let imgWidth = viewWidth * slider.carusel;
    let offset = Math.round(
      ((imgWidth - (viewWidth - imgWidth) / 2) / wrapWidth) * 100
    );
    return offset;
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

  const pressButtonNext = function () {
    for (let slider of sliders) {
      if (this.parentElement === slider.container) {
        this.parentElement.lastElementChild.children.item(
          slider.current
        ).style.backgroundColor = passiveColor;
        showText(slider, 0);
        if (slider.current < slider.count - 1) {
          slider.current++;
        } else {
          slider.current = 0;
        }
        this.parentElement.lastElementChild.children.item(
          slider.current
        ).style.backgroundColor = actieColor;
        moveSlide(slider);
        showText(slider, 1);
        break;
      }
    }
  };

  const pressButtonPrev = function () {
    for (let slider of sliders) {
      if (this.parentElement === slider.container) {
        this.parentElement.lastElementChild.children.item(
          slider.current
        ).style.backgroundColor = passiveColor;
        showText(slider, 0);
        if (slider.current > 0) {
          slider.current--;
        } else {
          slider.current = slider.count - 1;
        }
        this.parentElement.lastElementChild.children.item(
          slider.current
        ).style.backgroundColor = actieColor;
        moveSlide(slider);
        showText(slider, 1);
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
    }
  };

  for (let slider of document.getElementsByClassName('slider')) {
    sliders.push(initWrapper(slider));
  }

  const changeSlider = (e) => {
    for (let slider of sliders) {
      slider.container.style.visibility = 'hidden';
      if (slider.carusel) {
        if (e.matches) {
          slider.container.firstElementChild.classList.remove('carusel_slider');
          slider.container.firstElementChild.style.width =
            100 * slider.imgCount + '%';
          slider.container.firstElementChild.style.transform =
            'translateX(-20%)';
          slider.offset = 20;
          toggleControls(slider,controlsClass(true),controlsClass(false));
        } else {
          slider.container.firstElementChild.classList.add('carusel_slider');
          slider.container.firstElementChild.style.width =
            slider.carusel * 100 * slider.imgCount + '%';
          slider.offset = getOffset(slider);
          slider.container.firstElementChild.style.transform =
            'translateX(-' + slider.offset + '%)';
            toggleControls(slider,controlsClass(false),controlsClass(true));
        }
        moveSlide(slider);
      }
      setTimeout(() => {
        slider.container.style.visibility = 'visible';
      }, 350);
    }
  };

  changeSlider(mql);
  mql.addEventListener('change', changeSlider);
})();
