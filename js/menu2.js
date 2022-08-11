/* HEADER
const logo = document.querySelector('.logo');
const header = document.querySelector('header');

// 로고, 헤더 이벤트
logo.addEventListener('mouseover', function () {
  header.style.transform = 'translate(0px, 0px)';
});

header.addEventListener('mouseover', function () {
  header.style.transform = 'translate(0px, 0px)';
});

logo.addEventListener('mouseout', function () {
  header.style.transform = 'translate(0px, -100px)';
});

header.addEventListener('mouseout', function () {
  header.style.transform = 'translate(0px, -100px)';
});
 */
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

/* Direct btn to top*/
const gotoTopEl = document.querySelector('#goto-top')
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) { // 페이지 스크롤 위치가 500px이 넘으면
    //상단으로 스크롤 버튼 보이기
    gsap.to(gotoTopEl, .2, {
      x: 0
    })
  } else { // 페이지 스크롤 위치가 500px이 넘지 않으면.
    gsap.to(gotoTopEl, .2, { // 상단으로 스크롤 버튼 숨기기
      x: 100
    })
  }
}, 300)
gotoTopEl.addEventListener('click', function() { //스크롤 버튼 클릭시
  gsap.to(window, .7, { // 페이지 최상단으로 0.7초 동안부드럽게 이동
    scrollTo: 0
  })
})

/* SCROLL FLIP-Animation  */
class CardFlipOnScroll{
    constructor(wrapper, sticky) {
        this.wrapper = wrapper
        this.sticky = sticky
        this.cards = sticky.querySelectorAll('.card')
        this.length = this.cards.length

        this.start = 0
        this.end = 0
        this.step = 0
    }
    init(){
        this.start = this.wrapper.offsetTop
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight
        this.step = (this.end - this.start) / (this.length * 2)
    }
    animate(){
        this.cards.forEach((card, i) => {
            const s = this.start + this.step * i 
            const e = s + this.step * (this.length + 1)

            if(scrollY <= s){
                card.style.transform = `
                perspective(100vw)
                translateX(100vw)
                rotateY(180deg)
                `
            }else if(scrollY > s && scrollY <= e - this.step){
                card.style.transform = `
                perspective(100vw)
                translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
                rotateY(180deg) `
            }else if(scrollY > e - this.step && scrollY <= e){
                card.style.transform = `
                perspective(100vw)
                translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
                rotateY(${180 - -(scrollY - (e - this.step)) / this.step * 180}deg)
                `
            }else if(scrollY > e){
                card.style.transform = `
                perspective(100vw)
                translateX(0vw)
                rotateY(0deg)
                `
            }
        })
    }
}
const mainContent1 = document.querySelector('.main-content-1')
const sticky = document.querySelector(".sticky")
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
cardFlipOnScroll.init()

window.addEventListener('scroll', ()=>{
    cardFlipOnScroll.animate()
})
window.addEventListener('resize', ()=>{
    cardFlipOnScroll.init()
})

/* Flow word */
const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')

const textArr1 = 'Alcohol Yummy Food Tasty Useful Fun'.split(' ')
const textArr2 = 'Love Yummy Food Tasty Powerful Adorable'.split(' ')

function initTexts(element, textArray){
    textArray.push(...textArray)
    for(let i = 0; i < textArray.length; i++){
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0\u00A0`
    }
}
initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)

let count1 = 0
let count2 = 0

function marqueeText(count, element, direction){
    if(count > element.scrollWidth /2){
        element.style.transform = `translateX(0)`
        count = 0
    }
    element.style.transform = `translateX(${count * direction}px)`
    return count
}

function animate(){
    count1++
    count2++

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)

    window.requestAnimationFrame(animate)
}
/* 함수 사용 */
animate() 

/* window.addEventListener('scroll', ()=> {
    count1 += 15
    count2 += 15
}) */

