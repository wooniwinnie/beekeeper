"use strict";
/**
 * 첫인상이 중요하다.
 * 내가 만드는 홈페이지에도 강인한 첫인상을 주고 싶다.
 */
const mainDoor = document.querySelector('.maindoor');
const openTheDoor = document.querySelector('.maindoor__contents__textbox button');
const mainDoorStyle = { opacity: '0', transition: 'all 1s' };
openTheDoor?.addEventListener('click', () => {
    if (mainDoor) {
        Object.assign(mainDoor.style, mainDoorStyle);
        if (mainDoor) {
            setTimeout(() => {
                Object.assign(mainDoor.style, { display: 'none' });
            }, 500);
        }
    }
});
// console.log(mainDoorStyle.opacity === '0');
// NAVBAR
// navbar list 메뉴들에 마우스를 올리면 underline이 생긴다.
// underline 스타일을 적용할 HTML 요소들을 선택한다.
const navMenu = document.querySelectorAll('nav li');
// underline 스타일을 변수에 할당
// const underLineStyle: Partial<CSSStyleDeclaration> = {
//     textDecoration: 'underline',
// };
// underline 스타일을 변수가 아닌 객체 리터럴로 생성해봄ㅋㅋ
const underLineStyle = [
    {
        textDecoration: 'underline',
    },
    {
        textDecoration: 'none',
    },
];
// HTML 요소들에 이벤트 함수를 적용한다.
navMenu.forEach((menu) => {
    menu.addEventListener('mouseover', (e) => {
        if (e.target) {
            Object.assign(menu.style, underLineStyle[0]);
        }
        menu.addEventListener('mouseleave', (e) => {
            if (e.target) {
                Object.assign(menu.style, underLineStyle[1]);
            }
        });
    });
});
/**
 * HTML 요소 마진 조작을 클래스로 만드려는 이유는 무엇이니?
 * 스타일 조작 코드를 매번 작성하는 것보다 클래스의 메소드로 작성하는 것이
 * 코드의 재사용성과 가독성 측면에서 나을 것같아서???
 */
// 마진 조작 클래스 생성
class ControlMargin {
    // 인스턴스의 프로퍼티 타입 지정
    // elem은 단일 요소일수도, 다수 요소일수도 있으므로 유니온 타입을 사용함
    elem;
    styles;
    constructor(elem, styles) {
        // 인스턴스 초기화
        this.elem = elem;
        this.styles = styles;
    }
    addMarginTop() {
        // 다수 요소라면?
        // elem이 NodeList에 포함되어 있다면
        if (this.elem instanceof NodeList) {
            this.elem.forEach((element) => {
                Object.assign(element.style, this.styles);
            });
        }
        // 단일 요소라면?
        // elem이 HTMLElement의 인스턴스라면
        else if (this.elem instanceof HTMLElement) {
            Object.assign(this.elem.style, this.styles);
        }
    }
    addMarginLeft() {
        if (this.elem instanceof NodeList) {
            this.elem.forEach((element) => {
                Object.assign(element.style, this.styles);
            });
        }
        // 단일 요소라면?
        // elem이 HTMLElement의 인스턴스라면
        else if (this.elem instanceof HTMLElement) {
            Object.assign(this.elem.style, this.styles);
        }
    }
}
// 단일요소 테스트
const $img = document.querySelector('.img1');
const style = { marginTop: '-100px' };
if ($img) {
    const $imgControl = new ControlMargin($img, style);
    $img.addEventListener('click', function () {
        // $imgControl.addMarginTop();
    });
}
// MAIN SLIDER
// 이미지 슬라이더를 구현해보자
// 먼저 단순하게 제작을 해보고, 그 이후에는 페이드 아웃같은 기능도 추가를 해보자
// 이미지들이 추후에 변경될 가능성이 높고 빈도수가 많으므로
// HTML 요소들을 객체로 관리하기로 한다.
const mainSliderContents = [
    {
        imgUrl: 'https://images.unsplash.com/photo-1622380997944-c00207483cce?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'honey bee and flower',
        title: 'A World with Bees',
        text: 'The Shortcut to Protecting the Earth',
        styleName: 'wrapper__img',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'honey',
        title: 'The BeeKeeper raises bees with love',
        text: 'As a result, the bees produce healthy honey',
        styleName: 'wrapper__img',
    },
    {
        imgUrl: 'https://images.unsplash.com/photo-1481900369621-54a7facacc6c?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgAlt: 'healthy honey',
        title: "The Beekeeper's honey is full of nutrients",
        text: 'Take care of your health with our honey',
        styleName: 'wrapper__img',
    },
];
// 콘텐츠 템플릿을 만들어놓자
// 슬라이더 콘텐츠를 반복시켜서 변수에 할당한다음에
// 그 변수를 반환시키고 반환시킨 변수를 HTML 삽입 함수 매개변수로 전달함
const sliderHtml = () => {
    let insertHtml = '';
    mainSliderContents.forEach((sliderElem) => (insertHtml += `<article class='${sliderElem.styleName}'>
    <img src='${sliderElem.imgUrl}' alt='${sliderElem.imgAlt}' />
    <h1>${sliderElem.title}</h1>
    <p>${sliderElem.text}</p>
    </article>`));
    return insertHtml;
};
const mainSliderContainer = document.querySelector('.wrapper');
mainSliderContainer?.insertAdjacentHTML('afterbegin', sliderHtml());
const controlSlider = document.querySelectorAll('.wrapper__img');
const sliderBtn = document.querySelectorAll('.btn');
//! 이 코드는 좀 더 고민해보고 수정을 진행할 것!!
sliderBtn.forEach((btnElem, index) => {
    let count = 0;
    let btnIndex = index;
    btnElem.addEventListener('click', (e) => {
        if (e.target && btnIndex === 1) {
            count++;
            console.log('나는 이전버튼', count);
            if (controlSlider[0]) {
                controlSlider[0].style.marginLeft = `${count * -100}vw`;
                if (count >= 3) {
                    if (controlSlider[0]) {
                        controlSlider[0].style.marginLeft = '0vw';
                    }
                    return (count = 0);
                }
            }
        }
        if (e.target && btnIndex === 0) {
            if (controlSlider[0]) {
                controlSlider[0].style.marginLeft = `${count * 100}vw`;
            }
        }
    });
});
// 이미지에 마우스를 오버하면 숨겨져있던 텍스트 박스가 나옴
// 문제가 생김
// 이미지 가운데에 마우스를 올려놓고 가만히 있으면
// 텍스트 박스가 나오지만, 마우스리브 이벤트가 발동되서 디제잉하고 자빠져있음
// 마우스오버시 동작하는 이벤트 대상
const imgBox = document.querySelectorAll('.briefintroduction__container__imgbox__img');
// 마우스오버시 스타일이 변경될 대상
const textBox = document.querySelectorAll('.briefintroduction__container__textbox');
// textBox 스타일 객체
const textBoxStyles = [
    {
        transition: 'all 1s',
        marginLeft: '0px',
    },
    {
        transition: 'all 1s',
        marginLeft: '-650px',
    },
];
// 마우스오버 이벤트 함수
imgBox.forEach((imgElem, index) => {
    imgElem.addEventListener('mouseover', () => {
        if (textBox[index]) {
            Object.assign(textBox[index].style, textBoxStyles[0]);
        }
    });
    imgElem.addEventListener('mouseleave', () => {
        if (textBox[index]) {
            Object.assign(textBox[index].style, textBoxStyles[1]);
        }
    });
});
