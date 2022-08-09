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

/* 하단 스크롤 위로 바로가기 버튼 */
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