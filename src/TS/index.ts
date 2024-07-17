/**
 * HTML 요소 마진 조작을 클래스로 만드려는 이유는 무엇이니?
 * 스타일 조작 코드를 매번 작성하는 것보다 클래스의 메소드로 작성하는 것이
 * 코드의 재사용성과 가독성 측면에서 나을 것같아서???
 */

// 마진 조작 클래스 생성
class ControlMargin {
    // 인스턴스의 프로퍼티 타입 지정
    // elem은 단일 요소일수도, 다수 요소일수도 있으므로 유니온 타입을 사용함
    elem: NodeListOf<HTMLElement> | HTMLElement;
    styles: Partial<CSSStyleDeclaration>;
    constructor(
        elem: NodeListOf<HTMLElement> | HTMLElement,
        styles: Partial<CSSStyleDeclaration>
    ) {
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
}

// 단일요소 테스트
const $img = document.querySelector<HTMLElement>('.img1');
const style = { marginTop: '-100px' };
if ($img) {
    const $imgControl = new ControlMargin($img, style);
    $img.addEventListener('click', function () {
        $imgControl.addMarginTop();
    });
}

/**
 * 비키퍼 이미지 슬라이드 기능 구현하기
 * 상품 이미지 컨테이너에 표현할 수 있는 상품 이미지는 총 세개
 * 가운데 이미지가 양쪽에 있는 이미지보다 클것
 * 상품 이미지에는 그림자 효과가 있을 것
 * 왼쪽, 오른쪽 화살표 버튼이 있고, 그것을 누르면 상품이미지가 양쪽으로 이동한다
 */

/**
 * 1. HTML 요소 생성
 * 유사 배열 객체처럼 사용하기 위해 공통적인 클래스를 지정한다.
 */

/**
 * 2.
 */

// 공부하기

// const $text = document.querySelectorAll<HTMLElement>('.wrapper p');
// const $textStyle = { marginRight: '100px' };

// if ($text) {
//     const $textControl = new ControlMargin($text, $textStyle);
//     $text.forEach(($elem) =>
//         $elem.addEventListener('click', function () {
//             $textControl.addMarginTop();
//         })
//     );
// }

// forEach 공부
// const numbers: object = [1, 2, 3];
// const pows: object = [];

// numbers.forEach((num) => {
//     pows.push(num ** 2);
// });

// console.log(pows);

// [1, 2, 3].forEach((item, index, arr) => {
//     console.log(
//         `요소값: ${item} 인덱스: ${index} this: ${JSON.stringify(arr)}`
//     );
// });

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index) => {
//     console.log(`Index ${index}: ${number}`);
// });

// const obj = {
//     multiplier: 2,
//     multiply: function (numbers: number) {
//         numbers.forEach(function (number: number) {
//             console.log(number * this.multiplier);
//         }, this);
//     },
// };
// obj.multiply([1, 2, 3, 4]);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index) => {
//     number = number * 2;
//     console.log(`Index ${index}: ${number}`);
// });

// console.log(numbers);

// const items = [
//     {
//         id: 1,
//         name: 'Item 1',
//     },
//     {
//         id: 2,
//         name: 'Item 2',
//     },
//     {
//         id: 3,
//         name: 'Item 3',
//     },
// ];

// items.forEach((item) => {
//     item.name = 'Updated ' + item.name;
// });

// console.log(items);

// const elements = document.querySelectorAll<HTMLElement>('.element');

// elements.forEach((element, index) => {
//     element.style.color = 'blue';
//     element.style.fontSize = '2rem';
//     element.textContent = `Updated Element ${index + 1}`;
// });
