/** @format */

const hideMessage = document.querySelectorAll('hide_message');
const idIsSame = document.querySelector('.id_issame');
const idIsNo = document.querySelector('.id_isno');
const idForm = document.querySelector('.id_form');
const pwIsntSame = document.querySelector('.pw_issame');

const id = document.querySelector('.id'); //id input
const pw = document.querySelector('.pw'); //pw input
const pwCheck = document.querySelector('.pw_check'); //pw 확인 input
const sameCheck = document.querySelector('.same__btn'); //id 중복확인 버튼

// let specialChar = [",", "*", ",", "!", "#", "$", "?", "\\", "|", "(", ")", "`", "~", "%", "^", "&"];
sameCheck.addEventListener('click', function () {
  if (id.value === '') {
    console.log('빈칸으로 클릭되는 중');
    idIsNo.classList.remove('hide');
    // 비어있을 때 idIsNo 의 hide클래스 삭제
    setTimeout(function () {
      idIsNo.classList.add('hide');
    }, 3000);
    id.value === '';
  } else if (!(id.value.includes('@') && id.value.includes('.'))) {
    //문자열 @와 .가 포함되어 있지 않다면, idForm 의 hide클래스 삭제
    idForm.classList.remove('hide');
    // 비어있을 때 idIsNo 의 hide클래스 삭제
    setTimeout(function () {
      idForm.classList.add('hide');
    }, 3000);
    id.value === '';
  } else {
    //정상적으로 메일형식을 쳤다면 idIsSame 의 hide클래스 삭제
    idIsSame.classList.remove('hide');
    // 비어있을 때 idIsNo 의 hide클래스 삭제
    setTimeout(function () {
      idIsSame.classList.add('hide');
    }, 3000);
    id.value === '';
  }
});

//동작을 어떤것을 해야 잘 들어갈까?!!?!?!??! 생각처럼 잘 안들어감
pwCheck.addEventListener('click', function () {
  console.log('focus 되는 중');
  if (pwCheck.value !== pw.value) {
    console.log('if문 동작중');
    pwIsntSame.classList.remove('hide');
  } else if (pwCheck.value === pw.value) {
    pwIsntSame.classList.add('hide');
  }
});

function noRegister() {
  swal('!!', '아이디를 입력해주세요');
}

function noReady() {
  swal('주막', '서비스 준비중입니다');
}
