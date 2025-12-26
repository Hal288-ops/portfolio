'use strict';

// ドロワーメニュー
const openBtn = document.getElementById('openNav');
const closeBtn = document.getElementById('closeNav');
const drawer = document.getElementById('drawer');

openBtn.addEventListener('click', function () {
    drawer.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    drawer.classList.remove('show');
});

// ローディング画面
window.addEventListener("load", function () {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    setTimeout(function () {
        loading.classList.add("fadeout");

        setTimeout(function () {
            loading.style.display = "none";
            content.classList.add("pop");
        }, 2000);
    }, 2000);
});

//カルーセル

const slide = document.getElementById('slider');
const prevBtn = document.getElementById('prev'); 
const nextBtn = document.getElementById('next'); 

const dots = [
    document.getElementById('list1'),
    document.getElementById('list2'),
    document.getElementById('list3'),
    document.getElementById('list4'),
    document.getElementById('list5')
];

let currentIndex = 0;
let timer; 

// ■ スライダーとドットのクラス更新処理
const updateSlide = function () {
    // スライダーのクラス更新
    slide.className = 'slider'; 
    slide.classList.add(`slider${currentIndex + 1}`);

    // ドットのクラス更新
    dots.forEach(dot => dot.classList.remove('listChange'));
    dots[currentIndex].classList.add('listChange');
}

// ■ 次へ進む処理
const nextMove = function () {
    currentIndex++;
    if (currentIndex >= dots.length) {
        currentIndex = 0;
    }
    updateSlide();
}

const prevMove = function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = dots.length - 1; 
    }
    updateSlide();
}

const resetTimer = function () {
    clearInterval(timer); 
    timer = setInterval(nextMove, 1200);
}

nextBtn.addEventListener('click', () => {
    nextMove();
    resetTimer();
});

prevBtn.addEventListener('click', () => {
    prevMove();
    resetTimer(); 
});

timer = setInterval(nextMove, 2200);

window.addEventListener('scroll', function () {
    const topButton = document.getElementById('jsTop');
    const scroll = window.pageYOffset;
    if (scroll > 100) {
        topButton.style.display = 'block'
    } else {
        topButton.style.display = 'none'
    }
});

const topButton = document.getElementById('jsTop');
topButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

