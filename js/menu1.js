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

// 영상 효과

// 처음 페이지 로드후 4초 후부터 스크롤 되게끔 하는 것
const wrap = document.querySelector('.wrap');

window.onload = () => {
  setTimeout(() => {
    wrap.style.overflow = 'visible';
  }, 4000);
};

// 처음 페이지 로딩시 영상효과
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

// 페이지 스크롤할 때 영상 효과

window.addEventListener('scroll', () => {
  const scrollYpos = window.scrollY;
  console.log(scrollYpos);

  if (scrollYpos > 1000) {
    gsap.to('.video2', {
      xPercent: 100,
      duration: 1,
    });
  }

  if (scrollYpos > 1400) {
    gsap.to('.video3', {
      yPercent: -100,
      duration: 1,
    });
  }
});

// 좋아요 하트 모양 변경
const emptyHearts = document.querySelectorAll('.empty_heart');
const fillHearts = document.querySelectorAll('.fill_heart');

// 채워진 하트로 변경, 이렇게 하는것을 권장
for (let i = 0; i < emptyHearts.length; i++) {
  //
  emptyHearts[i].addEventListener('click', () => {
    //
    if (fillHearts[i].classList.contains('hide')) {
      fillHearts[i].classList.remove('hide');
      emptyHearts[i].classList.add('hide');
    }
  });
}

// 빈 하트로 변경 ( for문 중첩 ver ), 이렇게 하는건 비추
for (let i = 0; i < fillHearts.length; i++) {
  //
  for (let j = 0; j < emptyHearts.length; j++) {
    //
    fillHearts[i].addEventListener('click', () => {
      //
      if (emptyHearts[j].classList.contains('hide')) {
        emptyHearts[j].classList.remove('hide');
        fillHearts[i].classList.add('hide');
      }
    });
  }
}
