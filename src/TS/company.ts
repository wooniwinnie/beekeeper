// ABOUT 메뉴를 클릭하면, footer 메뉴의 Company 리스트 내부에
// About Us, Careers, Press, Blog 페이지들이 존재한다.
// 동일한 HTML 틀을 제작하여, 각각 서브메뉴들을 클릭했을 때, 페이지들을 다르게
// 보여주는 코드를 만들어보자, 이 설명을 추후에 수정하도록

// company container에 About us, Careers, Press, Blog를 넣는다.

// 타이틀과 서브메뉴 템플릿
const companyMenu = [
    {
        title: 'About Us',
        submenu: 'About Us',
        content: {
            title: 'Home of the Coolest Beekeepers!',
            text: 'Welcome to the hive of excellence and passion.Where beekeeping meets artistry. Experience the magic of honey made with love. Our beekeepers are the maestros of the bee world. Innovative techniques for the best honey production. Sustainable practices for a healthier planet.Join our community of bee enthusiasts. Learn, grow, and taste the difference. Support beekeepers who care about quality and the environment.Discover the sweetest place on earth!',
            imgUrl: 'https://plus.unsplash.com/premium_photo-1681506421805-5a72b5528439?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imgAlt: 'beekeeper man',
        },
    },
    {
        title: 'Careers',
        submenu: 'Careers',
        content: {
            title: 'We are looking for employees with dreams and passion.',
            text: "We seek talented individuals to shape the future with us. We offer opportunities to realize your dreams. An environment where passion and creativity can thrive. Innovative projects and challenging tasks. A culture that values teamwork and collaboration. Opportunities for continuous learning and growth. A workplace that respects diversity and inclusion. A fair and transparent hiring process. The chance to work with the world's top experts. Share your talent and passion with us.",
            imgUrl: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imgAlt: 'career',
        },
    },
    {
        title: 'Press',
        submenu: 'Press',
        content: {
            title: "Ranked Among the World's Top 10 Companies for Contributions to Society",
            text: 'In a remarkable achievement, XYZ Corporation has been ranked among the world’s top 10 companies for its significant contributions to society. This recognition comes from the Global Corporate Responsibility Index, which evaluates companies based on their social, environmental, and economic impact. XYZ Corporation has long been a leader in sustainable practices, implementing innovative programs that benefit both the environment and local communities. Their commitment to renewable energy, waste reduction, and ethical labor practices has set a high standard in the industry. The company’s CEO, Jane Doe, expressed her pride in the recognition, stating, “This accolade reflects our unwavering dedication to making a positive impact on the world. We will continue to strive for excellence in all aspects of our business. <br>Employees of XYZ Corporation are equally proud, noting that the company’s values align with their personal goals of contributing to a better society. The company’s initiatives, such as the Community Engagement Program and the Green Earth Project, have garnered widespread acclaim and support. As XYZ Corporation moves forward, they plan to expand their efforts, aiming to inspire other companies to follow suit. Their success serves as a powerful reminder that businesses can thrive while also playing a crucial role in societal advancement.',
            imgUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imgAlt: 'press',
        },
    },
    {
        title: 'Blog',
        submenu: 'Blog',
        content: {
            title: 'Learning About Bee Characteristics Before Starting Beekeeping',
            text: 'Before starting beekeeping, understanding the ecology and behavior of bees is essential. Bees have a complex social structure that includes queen bees, worker bees, and drones, each performing distinct roles. Worker bees, in particular, play a crucial role in collecting nectar and pollen. Bees are also vital pollinators, transferring pollen to aid in plant reproduction. A key element for the survival of a bee colony is the regulation of temperature and humidity to optimize the environment within the hive. However, bees can also be defensive, making it important to learn safe beekeeping management practices. Maintaining the health of bees and effectively managing pests and diseases through beekeeping are also critical. This foundational knowledge will greatly assist in successfully starting and managing beekeeping.',
            imgUrl: 'https://plus.unsplash.com/premium_photo-1681506341082-80c5eabc3558?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imgAlt: 'traning',
        },
    },
];

// 만들어진 요소를 삽입하는 함수
function addElem(
    parentElem: HTMLElement,
    position: InsertPosition,
    content: string
) {
    if (parentElem) {
        parentElem.insertAdjacentHTML(position, content);
    }
}

// 타이틀과 서브메뉴가 삽입될 첫번째 부모요소 선택
const firstParentElem = document.querySelector<HTMLElement>('.company__title');

// 변경할 h1 태그 선택
const titleItem = document.querySelector<HTMLElement>('.company__title h1');

// companyMenu 배열의 서브메뉴를 생성하는 함수를 정의
const firstParentElemSub = document.querySelector<HTMLElement>(
    '.company__title__menu'
);
function addSubMenu() {
    // 서브메뉴는 addElem에 전달되어야 하는 콜백함수이므로,
    // HTML 요소를 값으로 반환하는 함수로 만들어야함
    // 배열의 모든 서브메뉴들을 순환하여 표시되어야 함
    let insertSubMenu = '';
    companyMenu.forEach((subMenu, index) => {
        let subMenuIndex = index;
        insertSubMenu += `<li data-index${subMenuIndex}>${subMenu.submenu}</li>`;
    });
    // 위에서 생성된 요소들을 반환해주고 함수 실행 종료
    return insertSubMenu;
}

// 우선 클릭이 되어야하는 요소를 선택하기 위해 서브메뉴를 부모요소에 삽입하고 선택자로 지정해야함
if (firstParentElemSub) {
    addElem(firstParentElemSub, 'beforeend', addSubMenu());
}

// 클릭이 되어야하는 요소들 선택
const subMenuList = document.querySelectorAll<HTMLElement>(
    '.company__title__menu li'
);

// function addContents() {
//     let insertContent = `<article><img src="" alt=""></article>
//         <article><h1>1</h1><p>1</p></article>`;

//     return insertContent;
// }

// HTML 요소들을 삽입할 부모 요소 선택

const parentElement = document.querySelector<HTMLElement>(
    '.company__container__content'
);

// function resetContentElem(index: number) {
//     let insetResetContent = '';
//     let resetContentElemIndex = companyMenu[index];
//     insetResetContent += `
//     <article><img src="${resetContentElemIndex.content.imgUrl}" alt="${resetContentElemIndex.content.imgAlt}"></article>
//       <article><h1>${resetContentElemIndex.content.title}</h1><p>${resetContentElemIndex.content.text}</p></article>
//     `;
//     return insetResetContent;
// }

if (parentElement) {
    const resetContent = companyMenu[0].content;
    parentElement.innerHTML = `
        <article class="company__container__content__imgbox">
            <img src="${resetContent.imgUrl}" alt="${resetContent.imgAlt}">
        </article>
        <article class="company__container__content__contentbox">
            <h1>${resetContent.title}</h1>
            <p>${resetContent.text}</p>
        </article>
    `;
}

function addContents(index: number) {
    const menuItem = companyMenu[index];
    let insertContent = ``;
    insertContent += `
    <article class="company__container__content__imgbox"><img src="${menuItem.content.imgUrl}" alt="${menuItem.content.imgAlt}"></article>
      <article class="company__container__content__contentbox"><h1>${menuItem.content.title}</h1><p>${menuItem.content.text}</p></article>
    `;
    return insertContent;
}

// 클릭이 되어지는 요소의 내용을 title 요소의 내용으로 삽입한다.

subMenuList.forEach((subItem, index) => {
    subItem.addEventListener('click', (e) => {
        // 내가 클릭하는 요소의 타겟은 e.target
        // e.target은 변수에 담아 사용한다.
        const target = e.target as HTMLElement;
        if (titleItem && target) {
            if (target instanceof HTMLElement) {
                titleItem.innerHTML = target.innerText;
                if (parentElement) {
                    parentElement.innerHTML = addContents(index);
                }
            }
        }
    });
});

// 문단의 첫 번째 글자의 크기와 색깔을 변경해보자

// company contents 객체를 만들어서 위에 title 요소 내용 삽입 함수에
// 콜백함수로 전달한다.

// if (test) {
//     test.innerHTML = `<article>
//     <img/></article>
//     <article><h1>2</h1><p>2</p></article>
//     `;
// }

// 기본적인 형태
// Nav 메뉴 ABOUT을 클릭하면 company.html로 이동
// 좌측 h1 태그는 companyMenu 배열의 title 항목이, 우측 h1태그에는 companyMenu 배열의 subMenu가 표기되어야 함
// 좌측 h1 태그는 우측 h1태그에서 클릭된 항목과 같아야함

// subMenuItems.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         const index = item.getAttribute('data-index');
//         if (index !== null) {
//             const menuIndex = parseInt(index, 10);
//             if (parentElement && companyMenu[menuIndex]) {
//                 parentElement.innerHTML = '';
//                 addElem(
//                     parentElement,
//                     'afterbegin',
//                     addTitle(companyMenu[menuIndex].title)
//                 );
//                 addElem(
//                     parentElement,
//                     'beforeend',
//                     companyMenu[menuIndex].content
//                 );
//             }
//         }
//     });
// });

// const listItem = document.querySelector('li');
// console.log(listItem);

// const index = listItem?.getAttribute('data-index');
// console.log(index);

// listItem?.setAttribute('data-index', '5');
// console.log(listItem?.getAttribute('data-index'));

// const exampleDiv = document.getElementById('example');

// if (exampleDiv) {
//     exampleDiv.dataset.name = 'Kaeun Lee';
//     exampleDiv.dataset.age = '25';
//     exampleDiv.dataset.role = 'designer';
// }

// console.log(exampleDiv?.dataset.name);
// console.log(exampleDiv?.dataset.age);
// console.log(exampleDiv?.dataset.role);
