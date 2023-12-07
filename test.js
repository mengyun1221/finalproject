//I want to use javascript to implement automaticslideshow rotation function, so I refered javascript different tutorials and codes online to achieve the following:

let oImg = document.querySelectorAll('img');
let curDisplay = 0;
let len = oImg.length;
let timer;

function init() {
    initalCarousel();
    bindEvent();
}
init();

function initalCarousel() {
    console.log(document.querySelectorAll('img'))
    let hLen = Math.floor(oImg.length / 2);
    var rNum, lNum;
    for (var i = 0; i < hLen; i++) {
        lNum = (curDisplay - i - 1 + oImg.length) % oImg.length;
        oImg[lNum].style.transform = 'translateX(' + (-150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(30deg)';
        rNum = (curDisplay + i + 1) % oImg.length;
        oImg[rNum].style.transform = 'translateX(' + (150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(-30deg)';
        oImg.forEach(function (img) {
            img.classList.remove('active');
        });
    }

    
    oImg[curDisplay].style.transform = 'translateZ(300px)';
    oImg[curDisplay].classList.add('active');
}


function bindEvent() {
    oImg.forEach(function (img, index) {
        img.addEventListener('click', function (e) {
            if (!this.classList.contains('active')) {
                curDisplay = index;
                initalCarousel();
            }
        });
        img.addEventListener('mouseover', function () {
            clearInterval(timer);
        });
        img.addEventListener('mouseout', function () {
            play();
        });
    });
}


function play() {
    timer = setInterval(function () {
        if (curDisplay == len - 1) {
            curDisplay = 0;
        } else {
            curDisplay++;
        }
        initalCarousel();
    }, 2000);
}
