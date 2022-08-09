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

gsap.to('.full_video', {
  xPercent: -60,
  duration: 1,
  delay: 4,
});
gsap.from('.alcohols', {
  delay: 4.5,
  duration: 1,
  opacity: 0,
});

gsap.from('.alcohols', {
  Xpercent: -40,
  delay: 13, //13말고다른 숫자 설정해서 test 해보세요 단, 위의 delay보다는 크게 설정 하시는게 좋습니다!
  duration: 1,
});

/* gsap.from('.alcohol_img', { y: -20, opacity: 0, duration: 1 });
gsap.from('.title', { y: -20, opacity: 0, duration: 1, delay: 1 }); */
