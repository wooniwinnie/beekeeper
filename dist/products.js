"use strict";
// 배열 생성
const products = [
    {
        imgUrl: '234',
        imgAlt: 'sdfg',
        title: 'sdfgsdfgsdfgsdfg',
        description: 'fghdfghdfgh',
        price: 123,
    },
    {
        imgUrl: 's',
        imgAlt: 'd',
        title: 'f',
        description: 'd',
        price: 123,
    },
    {
        imgUrl: 'z',
        imgAlt: 'd',
        title: 'f',
        description: 'd',
        price: 123,
    },
];
// HTML 삽입할 부모 요소 선택
const productSlider = document.querySelector('.product__slider');
// 삽입할 HTML 요소의 내용은 위 products 객체의 프로퍼티들이고,
// 1개 이상의 상품이므로, 반복하여 출력이 되면서 HTMl 요소를 생성해야 되므로
// forEach 문 내부에 HTML 요소 양식을 삽입해보자
const productList = () => {
    return products.map((list, index) => `<a href="javascript:void(0)">
//             <article class="product__slider__content ${index}">
//             <img src="${list.imgUrl}" alt="${list.imgAlt}"/>
//             <h1>${list.title}</h1>
//             <p>${list.description}</p>
//             <p>${list.price}</p>
//             </article>
//         </a>`);
    // .join('');
};
// 위에 생성한 productList 요소를 부모 요소 내부에 삽입
// if (productSlider) {
//     productSlider.insertAdjacentHTML('afterbegin', productList());
// }
