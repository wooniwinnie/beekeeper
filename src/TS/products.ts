import { addElem } from './company.js';

// 상품 객체 생성

type Products = {
    productImg: {
        imgUrl: string;
        imgAlt: string;
    };
    productTitle: string;
    productDetail: string;
    productPrice: number;
    productLike: number;
};

const products: Products[] = [
    {
        productImg: {
            imgUrl: 'https://images.unsplash.com/photo-1616987381923-7b5118f26a6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imgAlt: 'raw, pure honey',
        },
        productTitle: 'Pure Honey',
        productDetail:
            'Law, Pure Honey is the most basic honey we sell at our company and is popular worldwide.',
        productPrice: 18000,
        productLike: 0,
    },
    {
        productImg: {
            imgUrl: 'https://images.unsplash.com/photo-1481900369621-54a7facacc6c?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imgAlt: 'Raspberry',
        },
        productTitle: 'Raspberry Honey',
        productDetail:
            'Raspberry Honey is a product filled with honey from raspberry flowers grown using environmentally friendly organic farming methods.',
        productPrice: 45000,
        productLike: 0,
    },
    {
        productImg: {
            imgUrl: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imgAlt: 'Tangerine Honey',
        },
        productTitle: 'Tangerine Honey',
        productDetail:
            'Tangerine honey produced from tangerine blossoms grown in optimal, eco-friendly conditions is our Beekeeper company’s signature honey product.',
        productPrice: 68000,
        productLike: 0,
    },
];

// const addtest = {
//     productImg: {
//         imgUrl: 'https://images.unsplash.com/photo-1495298975657-492a1d068595?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         imgAlt: 'Acacia Honey',
//     },
//     productTitle: 'Acacia Honey',
//     productDetail:
//         'Experience the pure, delicate flavor of our Acacia Honey. Harvested from pristine acacia blossoms, this honey is renowned for its light color and smooth taste. Perfect for sweetening your favorite dishes or enjoying on its own.',
//     productPrice: 28000,
// };

// products.push(addtest);

// 관리자가 input에 입력하는 이미지url, 이미지alt, 상품명, 상품설명, 가격 등을 인자로 받아서
// 상품등록을 처리하는 기능을 만들어보자

// form 요소를 선택

const productsForm = document.querySelector('#productsForm');

productsForm?.addEventListener('submit', (e) => {
    // 이것은 제출을 방지함
    e.preventDefault();

    // textarea, input 필드 값 가져오기
    const productsImage = (
        document.getElementById('productsImage') as HTMLTextAreaElement
    ).value;
    const productsAlt = (
        document.getElementById('productsAlt') as HTMLTextAreaElement
    ).value;
    const productsName = (
        document.getElementById('productsName') as HTMLInputElement
    ).value;
    const productsDetail = (
        document.getElementById('productsDetail') as HTMLInputElement
    ).value;
    const productsPrice = parseFloat(
        (document.getElementById('productsPrice') as HTMLInputElement).value
    );
    const productsLike = parseFloat(
        (document.getElementById('productsLike') as HTMLInputElement).value
    );

    console.log('Product Image:', productsImage);
    console.log('Product Alt:', productsAlt);
    console.log('Product Name:', productsName);
    console.log('Product Detail:', productsDetail);
    console.log('Product Price:', productsPrice);

    // 위 값을 배열에 추가하기

    const addProduct = {
        productImg: {
            imgUrl: productsImage,
            imgAlt: productsAlt,
        },
        productTitle: productsName,
        productDetail: productsDetail,
        productPrice: productsPrice,
        productLike: productsLike,
    };

    // submit 이벤트로 배열에 객체 추가
    products.push(addProduct);

    // DOM을 업데이트 해줌
    if (productsParent) {
        productsParent.innerHTML = '';
        addElem(productsParent, 'afterbegin', productsElem());
    }
});

// 배열을 순회하면서 요소를 생성하는 함수

function productsElem() {
    let insertItems = '';
    products.forEach((item, index) => {
        insertItems += `<article class="products__content">
                <div class="products__content__imgbox">
                    <img
                        src="${item.productImg.imgUrl}"
                        alt="${item.productImg.imgAlt}"
                    />
                    <button class='like__btn'><span class='btn__count'>${item.productLike}</span></button>
                </div>
                <div class="products__content__textbox">
                    <h1>${item.productTitle}</h1>
                    <p>${item.productPrice}</p>
                </div>
            </article>`;
    });
    return insertItems;
}

// 배열의 요소를 삽입할 부모 요소 선택
const productsParent = document.querySelector<HTMLElement>(
    '#products__container'
);

// addElem 함수는 company.ts 파일에서 가져옴, 재사용함

if (productsParent) {
    addElem(productsParent, 'afterbegin', productsElem());
}

const likeBtn = document.querySelectorAll<HTMLElement>('.like__btn');

likeBtn.forEach((like, index) => {
    let count = 0;
    like.addEventListener('click', () => {
        // 클릭한 횟수를 변수에 담아봅세
        count++;
        const likeCount = document.querySelectorAll('.btn__count');
        likeCount[index].innerHTML = `${count}`; // 클릭한 인덱스만 2로 변하는 것을 확인함, 그러나 클릭한 횟수만큼 변경되어야 함
    });
});
