import * as flsFunction from "./modules/functions.js";
import noUiSlider from 'nouislider';
const body = document.querySelector('body');

flsFunction.isWebp();

// перевірка наявності кнопок на сторінці hTML
const setEventLisener = (element, type,  handler) => {
    if(!element) {
        return;
    }
    element.addEventListener(type, handler);
    return () =>{
        element.removeEventListener(type, handler);
    }
};

alert(' This Web site on production right now, so someone items  can be not avalible at this moment');


//Swiper

new Swiper('.intro__body-left', {
    // Optional parameters
    navigation: {
        nextEl: '.intro__next',
        prevEl: '.intro__prew'
    },

    loop:true,
    spaceBetween:50,
    autoplay: {
    delay:1000,
    disableOnInteraction:false,

    },
    speed:1200,


});

new Swiper('.goods__swiper', {
    // Optional parameters
    slidesPerView: 4,
    navigation: {
        nextEl: '.intro__next',
        prevEl: '.intro__prew'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets: true
      },

    loop:true,
    spaceBetween:15,
    autoplay: {
    delay:1000,
    disableOnInteraction:false,

    },
    speed:1200,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5
          },
        // when window width is >= 320px
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
          spaceBetween: 20
        },
    }
});

new Swiper('.news__right-side', {
    slidesPerView: 3,
    // Optional parameters
    navigation: {
        nextEl: '.intro__next',
        prevEl: '.intro__prew'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true
      },

    loop:true,
    spaceBetween:20,
    autoplay: {
    delay:1000,
    disableOnInteraction:false,

    },
    speed:1200,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5
          },

          578: {
            slidesPerView: 2,
            spaceBetween: 5
          },
        // when window width is >= 320px
        1200: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
          spaceBetween: 10
        },
    }
});

/*
initialization slider
*/

let mySwiper = new Swiper('.prew-block__big-slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 50


});

const sliderNavItem = document.querySelectorAll('.prew-block__photo-container');

sliderNavItem.forEach((el, index) => {
    el.setAttribute('data-index', index);

    el.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index);

        mySwiper.slideTo(index);
    })
})

// open burger menu

const  openBurger = document.querySelector('[data-burger]');

openBurger.addEventListener('click', event => {
    const $this = event.currentTarget;
    const menuBody = document.getElementById('menuActive');
    const bodyPage = document.querySelector('body');

    $this.classList.toggle('active');
    menuBody.classList.toggle('active');
    bodyPage.classList.toggle('active');
})

// moove in burger menu

const goNextMenu = document.querySelector('[data-move]');

goNextMenu.addEventListener('click', event => {
    event.preventDefault();
    const catNav = document.getElementById('nextMenu');

    catNav.classList.add('active-cat-nav');
})

const backPreviosMenu = document.querySelector('[data-previos]');

backPreviosMenu.addEventListener('click', event => {
    event.preventDefault();
    const catNav = document.getElementById('nextMenu');

    catNav.classList.remove('active-cat-nav');
})

// Header full list phone number


const arrow = document.getElementById('getListContact');
const contactList = document.getElementById('concactItem');

arrow.addEventListener('click', event =>{

        setTimeout(() => {
            arrow.classList.toggle('to-up');
            contactList.classList.toggle('see-all');
        }, 100)



});

// open full catalog

const openMenu = document.querySelectorAll('[data-openmenu]');



openMenu.forEach((item) => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let btnOp = $this;
        let btnId = btnOp.getAttribute('data-openmenu');
        let modal = document.getElementById(btnId);
        let activeBtn = document.querySelector('.cataloge__link.active')
        let activeBody = document.querySelector('.sub-cataloge__block.to-show')

        if (activeBtn && activeBtn !== btnOp) {
            activeBtn.classList.remove('active');
            activeBody.classList.remove('to-show');
            btnOp.classList.add('active');
            modal.classList.add('to-show');
        } else {
            btnOp.classList.toggle('active');
            modal.classList.toggle('to-show');
        }

})});

// tranfsert block in another place

const parentsOriginal = document.querySelector('.cataloge__box');
const parentsNew = document.querySelector('.menu-body');
const item = document.querySelector('.cataloge__nav');

window.addEventListener('resize', function(event){
    const viewportWidth = Math.max(this.document.documentElement.clientWidth, this.window.innerWidth || 0);
    if (viewportWidth <= 992) {
        if(!item.classList.contains('done')) {
            parentsNew.insertBefore(item, parentsNew.children[0]);
            item.classList.add('done');
        }
    } else {
        if(item.classList.contains('done')) {
            parentsOriginal.insertBefore(item, parentsOriginal.children[1]);
            item.classList.remove('done');
    }
}});

//open spoiler block in footer if we have size screen less than 992px
const openSpoiler = document.querySelectorAll('[data-openSpoiler]');

openSpoiler.forEach((item) =>{
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let btnClass = $this.querySelector('.spoiler__btn');
        let bodyClass = document.querySelectorAll('.spoiler__body');
        let opnBody = $this.getAttribute('data-openSpoiler');
        let opnBodyId  = document.getElementById(opnBody);


        if(btnClass && btnClass === $this) {
            $this.classList.add('open');
            opnBodyId.classList.add('open')
            btnClass.classList.remove('open');
            bodyClass.classList.remove('open')
        } else {

            $this.classList.toggle('open');
            opnBodyId.classList.toggle('open')
        }


    })
});

// add number after use plus or minus
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const num = document.querySelector('.quantity__value');
let a = 1;

setEventLisener(btnPlus, 'click',  () => {
        a++;
        a = (a < 10) ? "" + a : a;
        num.value = a;
        console.log(a);
});

setEventLisener(btnMinus, 'click', () => {
    if(a > 1){
        a--;
        a = (a < 10) ? "" + a : a;
        num.value = a;
    }
});

// dropDown list for card of goods

if(document.querySelectorAll('.choose__dropdown-btn')) {

    let btnDropDown = document.querySelectorAll('.choose__dropdown-btn');

    btnDropDown.forEach((item) => {
        item.addEventListener('click', event => {
            let $this = event.currentTarget;
            let closestBody = $this.closest('body');
            let paretnDropDown = $this.closest('.choose__dropdown');
            let DropDownList = paretnDropDown.querySelector('.choose__dropdown-body');


            if($this.classList.contains('choose__dropdown-btn--see')) {
                $this.classList.remove('choose__dropdown-btn--see');
                DropDownList.classList.remove('choose__dropdown-body--see');
            } else if(closestBody.querySelector('.choose__dropdown-body--see')){
                let activeDropDown = closestBody.querySelector('.choose__dropdown-body--see');
                let activeBtn = closestBody.querySelector('.choose__dropdown-btn--see');

                activeDropDown.classList.remove('choose__dropdown-body--see');
                activeBtn.classList.remove('choose__dropdown-btn--see');
                $this.classList.add('choose__dropdown-btn--see');
                DropDownList.classList.add('choose__dropdown-body--see');
            } else  {
                $this.classList.add('choose__dropdown-btn--see');
                DropDownList.classList.add('choose__dropdown-body--see');
            }

            let itemListDropDwon = DropDownList.querySelectorAll('.choose__dropdown-item');

            itemListDropDwon.forEach((item)=> {
                item.addEventListener('click', e => {
                    let $this = e.currentTarget;
                    let paretnDropDown = $this.closest('.choose__dropdown');
                    let itemValue = $this.innerText;
                    let inputDropDown = paretnDropDown.querySelector('.choose__dropdown-input');

                    inputDropDown.value = itemValue;
                });
            });
        });
    });

// let cardDropDowns = document.querySelectorAll('.choose__dropdown');

// cardDropDowns.forEach(function (dropDownChoose){

//     const dropDownCardBtn = dropDownChoose.querySelector('.choose__dropdown-btn');
//     const dropDownCardItem = dropDownChoose.querySelectorAll('.choose__dropdown-item');
//     const dropDownCardList = dropDownChoose.querySelector('.choose__dropdown-body');
//     const dropDownCardBtnIcon = dropDownChoose.querySelector('.choose__dropdown-img');



//     dropDownCardBtn.addEventListener('click', (e) =>{

//         dropDownCardBtn.classList.toggle('see');
//         dropDownCardBtnIcon.classList.toggle('see');
//         dropDownCardList.classList.toggle('see');
//     });



//     dropDownCardItem.forEach(function(event){
//         event.addEventListener('click', item =>{
//             const dropDownCardInput = dropDownChoose.querySelector('.choose__dropdown-input');
//             let $this = item.currentTarget;
//             const dropDownCardList = dropDownChoose.querySelector('.choose__dropdown-body');
//             const dropDownCardBtnIcon = dropDownChoose.querySelector('.choose__dropdown-img');

//             dropDownCardInput.value = $this.innerText;
//             dropDownCardList.classList.remove('see');
//             dropDownCardBtnIcon.classList.remove('see');
//         } )
//     });
// });


}
// tab

document.querySelectorAll('.tab__link').forEach((item) => {
    item.addEventListener('click', function (e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');


        document.querySelectorAll('.tab__link').forEach((child) => child.classList.remove('active'));
        document.querySelectorAll('.tab__section').forEach((child) => child.classList.remove('active'));

        item.classList.add('active');
        document.getElementById(id).classList.add('active');
    }) }
);
// tan dropdown
const dataTabSpoiler = document.querySelectorAll('[data-tab-spoiler]');

dataTabSpoiler.forEach((item) => {
    item.addEventListener('click', event => {
        const $this = event.currentTarget;
        const listId = $this.getAttribute('data-tab-spoiler');
        const listSpoiler = document.getElementById(listId);

        $this.classList.toggle('active');
        listSpoiler.classList.toggle('active');
    })
});

//tab dropdown
document.querySelectorAll('.select__choose').forEach(function(tabChooseWraper){
    const tabDropDownBtn = tabChooseWraper.querySelector('.select__btn');
    const tabDropDownList = tabChooseWraper.querySelector('.select__list');

    setEventLisener(tabDropDownBtn, 'click', () => {

        tabDropDownList.classList.toggle('select__list--active');
    });

    const tabSelectItem = tabChooseWraper.querySelectorAll('.select__item');

    tabSelectItem.forEach(function (listItem){
        listItem.addEventListener('click', event => {
            const $this = event.currentTarget;
            const tabSelectInput = tabChooseWraper.querySelector('.select__input');

            event.stopPropagation;
            tabSelectInput.value =  $this.innerText;
            tabDropDownList.classList.remove('select__list--active');
        })
    });
});


if(document.querySelector('.dropdown__btn')) {
//dropdown list
const dropDownBtn = document.querySelector('.dropdown__btn');

setEventLisener(dropDownBtn, 'click', event => {
    const dropDowList = document.querySelector('.dropdown__list');

    let $this = event.currentTarget;
    $this.classList.toggle('show');
    dropDowList.classList.toggle('show');

});

/* sadfaf*/

const dropDownItem = document.querySelectorAll('.dropdown__item');
const dropDowList = document.querySelector('.dropdown__list');

dropDownItem.forEach(function(event){
    event.addEventListener('click', event => {
        const dropDownBtn = document.querySelector('.dropdown__btn');
        let $this = event.currentTarget;
        const dropDownInput = document.querySelector('.dropdown__input');
        /* sadfaf*/
        event.stopPropagation;
        dropDownBtn.innerText = $this.innerText;
        dropDownBtn.focus();
        /* sadfaf*/
        dropDownInput.value = $this.dataset.value;
        dropDowList.classList.remove('show');
        dropDownBtn.classList.remove('show');
    })
});

//Клік по всій сторінці

window.addEventListener('click', event => {
    let $this = event.target;

    if ($this !== dropDownBtn) {
        dropDowList.classList.remove('show');
        dropDownBtn.classList.remove('show');
    }
});
//Клік по кнопкам
document.addEventListener('keydown', event => {
    if(event.key === 'Tab' || event.key === 'Escape' ) {
        dropDowList.classList.remove('show');
        dropDownBtn.classList.remove('show');
    }
});

}

/* Filter open*/
if(document.querySelector('.products__filters-btn')) {


const filterHeadBtn = document.querySelector('.products__filters-btn')

filterHeadBtn.addEventListener('click', event => {
    const filterBlock = document.querySelector('.filter');

    filterBlock.classList.toggle('show');
});

//Filter open

const filterSpoilerBtn = document.querySelectorAll('[data-filerShow]');

filterSpoilerBtn.forEach((item) =>{
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let filetrContet = $this.getAttribute('data-filerShow');
        let filetrContentId  = document.getElementById(filetrContet);
        $this.classList.toggle('show');
        filetrContentId.classList.toggle('show');
    });
});

//nouSlider
const rangeSlider = document.getElementById('slider-filter');

noUiSlider.create(rangeSlider, {
    start: [1, 99999],
    connect: true,
    range: {
        'min': 1,
        'max': 99999
    }
});

const rangeInput0 = document.getElementById('rangeInput-0');//iмпут 1
const rangeInput1 = document.getElementById('rangeInput-1');//iмпут 2 , доречі отримали елемент через айди
const inputs = [rangeInput0, rangeInput1]; // масив з двох наших  імпутів , ну як знаєш квадратні дужки

/* короче взяли нащ слайдер , навісили через on. подію апдейт і функцію в свойствах якої закинули (values, handle) , також треба розбратись з Метод Math.round() возвращает число, округлённое к ближайшему целому. */
rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
    let arr = [null, null]; // масив з чисел
    arr[i] = value; // отримали в масив значення

    rangeSlider.noUiSlider.set(arr)
};
// при введенні цифр в імпут ми рухаємо наш повзунок
inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value)
    });
});

//Second nouSlide

const rangeSliderSecond = document.getElementById('slider-filter-socond');

noUiSlider.create(rangeSliderSecond, {
    start: [1, 1000],
    connect: true,
    range: {
        'min': 1,
        'max': 1000
    }
});

//

const rangeInputLong0 = document.getElementById('rangeInput-long-0');
const rangeInputLong1 = document.getElementById('rangeInput-long-1');

const intutsLong = [rangeInputLong0, rangeInputLong1];

rangeSliderSecond.noUiSlider.on('update', (values, handle) => {
        intutsLong[handle].value = Math.round(values[handle]);
    })

const setRangeSliderLong = (i, value) => {
    let arr = [null, null]; // масив з чисел
    arr[i] = value; // отримали в масив значення

    rangeSliderSecond.noUiSlider.set(arr)
};

// при введенні цифр в імпут ми рухаємо наш повзунок

intutsLong.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        setRangeSliderLong(index, e.currentTarget.value)
    });
});

//Third filter-slider

const rangeSliderThird = document.getElementById('slider-filter-third');

noUiSlider.create(rangeSliderThird, {
    start: [1, 1000],
    connect: true,
    range: {
        'min': 1,
        'max': 1000
    }
});

//

const rangeInputWidth0 = document.getElementById('width-rangeInput-0');
const rangeInputWidth1 = document.getElementById('width-rangeInput-1');

const intutsWidth = [rangeInputWidth0, rangeInputWidth1];

rangeSliderThird.noUiSlider.on('update', (values, handle) => {
        intutsWidth[handle].value = Math.round(values[handle]);
    })

const setRangeSliderWidth = (i, value) => {
    let arr = [null, null]; // масив з чисел
    arr[i] = value; // отримали в масив значення

    rangeSliderThird.noUiSlider.set(arr)
};

// при введенні цифр в імпут ми рухаємо наш повзунок

intutsWidth.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        setRangeSliderWidth(index, e.currentTarget.value)
    });
});


}

