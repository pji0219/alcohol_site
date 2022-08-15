const logo = document.querySelector(".logo");
const header = document.querySelector("header");

// 로고, 헤더 이벤트
logo.addEventListener("mouseover", function () {
  header.style.transform = "translate(0px, 0px)";
});

header.addEventListener("mouseover", function () {
  header.style.transform = "translate(0px, 0px)";
});

logo.addEventListener("mouseout", function () {
  header.style.transform = "translate(0px, -100px)";
});

header.addEventListener("mouseout", function () {
  header.style.transform = "translate(0px, -100px)";
});

// 영상 효과

// 처음 페이지 로드후 4초 후부터 스크롤 되게끔 하는 것
const wrap = document.querySelector(".wrap");

// 장바구니 나타나기
const heartHeader = document.querySelector(".heart");
const cartHeader = document.querySelector(".cart");

window.onload = () => {
  setTimeout(() => {
    wrap.style.overflow = "visible";

    heartHeader.style.display = "inline";
    cartHeader.style.display = "inline";
  }, 1000);
};

// 처음 페이지 로딩시 영상효과
gsap.to(".full_video", {
  xPercent: -60,
  duration: 1,
  delay: 4,
});
gsap.from(".alcohols", {
  delay: 4.5,
  duration: 1,
  opacity: 0,
});

// 페이지 스크롤할 때 영상 효과
const video2 = document.querySelector(".video2");

window.addEventListener("scroll", () => {
  const scrollYpos = window.scrollY;

  if (scrollYpos > 1000) {
    gsap.to(".video2", {
      xPercent: 400,
      duration: 5,
    });

    setTimeout(() => {
      video2.style.opacity = "0.3";
      video2.style.transitionProperty = "opacity";
      video2.style.transitionTimingFunction = "ease-in-out";
    }, 800);
  }

  if (scrollYpos > 1400) {
    gsap.to(".video3", {
      yPercent: -100,
      duration: 1,
    });
  }
});

// 좋아요 하트 모양 변경
const emptyHearts = document.querySelectorAll(".empty_heart");
const fillHearts = document.querySelectorAll(".fill_heart");

// 채워진 하트로 변경
for (let i = 0; i < emptyHearts.length; i++) {
  //
  emptyHearts[i].addEventListener("click", () => {
    //
    if (fillHearts[i].classList.contains("hide")) {
      fillHearts[i].classList.remove("hide");
      emptyHearts[i].classList.add("hide");
    }
  });
}



for (let j = 0; j < emptyHearts.length; j++) {
  //
  fillHearts[j].addEventListener("click", () => {
    //
    if (emptyHearts[j].classList.contains("hide")) {
      emptyHearts[j].classList.remove("hide");
      fillHearts[j].classList.add("hide");
    }
  });
}

// 상세 보기
const detailBtn = document.querySelectorAll(".detail");
const cancelBtn = document.querySelectorAll(".cancel");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");

// 뒷면 상세 보기로
for (let i = 0; i < detailBtn.length; i++) {
  detailBtn[i].addEventListener("click", () => {
    front[i].style.transform = "rotateY(180deg)";
    back[i].style.transform = "rotateY(0deg)";
  });
}

// 처음 앞면으로
for (let i = 0; i < cancelBtn.length; i++) {
  cancelBtn[i].addEventListener("click", () => {
    front[i].style.transform = "rotateY(0deg)";
    back[i].style.transform = "rotateY(-180deg)";
  });
}
