/** @format */

// 나중에 반응형도 추가하기

const loginWindow = document.querySelector('.login');
const loginString = document.querySelector('.register__login');
const loginWindowClose = loginWindow.querySelector('.login--close');

//로그인 시 영상흐리게
// 근데 비디오 여러개 들어가면 안 될 듯!!->selectorAll?
const bgSrc = document.querySelectorAll('.bg');
const bgSlogan = document.querySelector;
loginString.addEventListener('click', function () {
  console.log('!!');
  if (loginWindow.classList.contains('hide')) {
    loginWindow.classList.remove('hide');

    hideUp.classList.add('on');
    wrap.classList.add('on');
    document.querySelector('.logo').classList.add('on');
    for (let i = 0; i < bgSrc.length; i++) {
      // 몇번 bg인지 알필요 없이 모두 grayscale 줘도 됨
      bgSrc[i].style.filter = 'grayscale(100%)';
    }
  } else {
    loginWindow.classList.add('hide');
    hideUp.classList.remove('on');
    wrap.classList.remove('on');
    document.querySelector('.logo').classList.remove('on');
    for (let i = 0; i < bgSrc.length; i++) {
      bgSrc[i].style.filter = 'grayscale(0%)';
    }
  }

  //영상 흐리게
});

loginWindowClose.addEventListener('click', function () {
  loginWindow.classList.add('hide');
  hideUp.classList.remove('on');
  wrap.classList.remove('on');
  document.querySelector('.logo').classList.remove('on');
  for (let i = 0; i < bgSrc.length; i++) {
    bgSrc[i].style.filter = 'grayscale(0%)';
  }
});

//로그인 메소드
function noInfo() {
  alert('로그인 정보가 없습니다!');
}

function findPW() {
  let prom = prompt('ID는 무엇인가요?');
  //빈 값 반환할 때 메세지와 아닐 때의 메세지가 다르도록 구성
  if (prom === '') {
    alert('ID를 입력해주세요');
  } else {
    alert('ID가 존재하지 않습니다');
  }
}
