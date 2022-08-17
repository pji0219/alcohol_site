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

// 장바구니 나타나기
const heartHeader = document.querySelector('.heart');
const cartHeader = document.querySelector('.cart-icon');

window.onload = () => {
  setTimeout(() => {
    wrap.style.overflow = 'visible';

    heartHeader.style.display = 'inline';
    cartHeader.style.display = 'inline';
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
const video2 = document.querySelector('.video2');

window.addEventListener('scroll', () => {
  const scrollYpos = window.scrollY;

  if (scrollYpos > 1000) {
    gsap.to('.video2', {
      xPercent: 400,
      duration: 5,
    });

    setTimeout(() => {
      video2.style.opacity = '0.3';
      video2.style.transitionProperty = 'opacity';
      video2.style.transitionTimingFunction = 'ease-in-out';
    }, 800);
  }

  if (scrollYpos > 1600) {
    gsap.to('.video3', {
      yPercent: -100,
      duration: 1,
    });
  }
});

// 좋아요 하트 모양 변경
const emptyHearts = document.querySelectorAll('.empty_heart');
const fillHearts = document.querySelectorAll('.fill_heart');

// 채워진 하트로 변경
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

for (let j = 0; j < emptyHearts.length; j++) {
  //
  fillHearts[j].addEventListener('click', () => {
    //
    if (emptyHearts[j].classList.contains('hide')) {
      emptyHearts[j].classList.remove('hide');
      fillHearts[j].classList.add('hide');
    }
  });
}

// 상세 보기
const detailBtn = document.querySelectorAll('.detail');
const cancelBtn = document.querySelectorAll('.cancel');
const front = document.querySelectorAll('.front');
const back = document.querySelectorAll('.back');

// 뒷면 상세 보기로
for (let i = 0; i < detailBtn.length; i++) {
  detailBtn[i].addEventListener('click', () => {
    front[i].style.transform = 'rotateY(180deg)';
    back[i].style.transform = 'rotateY(0deg)';
  });
}

// 처음 앞면으로
for (let i = 0; i < cancelBtn.length; i++) {
  cancelBtn[i].addEventListener('click', () => {
    front[i].style.transform = 'rotateY(0deg)';
    back[i].style.transform = 'rotateY(-180deg)';
  });
}

//Cart
let cartIcon = document.querySelector('.cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
  cart.classList.add('active');
};
closeCart.onclick = () => {
  cart.classList.remove('active');
};

//Cart Working JS
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}
function ready() {
  /* Remove Items From Cart */
  const removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    const button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  //Quantity Changes
  const quantityInputs = document.getElementsByClassName('cart-quantity');
  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  // Add To Cart
  const addCart = document.getElementsByClassName('add_cart');
  for (let i = 0; i < addCart.length; i++) {
    const button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }

  //Buy Button Work
  document
    .getElementsByClassName('btn-buy')[0]
    .addEventListener('click', buyButtonClicked);
}

//Buy Button
function buyButtonClicked() {
  alert('장바구니에 넣은 상품을 구매하시겠습니까?');
  const cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

/* Remove Items From Cart */
function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

//Quantity Changes
function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//Add To cart
function addCartClicked(event) {
  const button = event.target;
  const shopProducts = button.parentElement;
  const title = shopProducts.getElementsByClassName('title')[0].innerText;
  const price = shopProducts.getElementsByClassName('price')[0].innerText;
  const productImg = shopProducts.getElementsByClassName('alcohol_img')[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}
function addProductToCart(title, price, productImg) {
  const cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  const cartItems = document.getElementsByClassName('cart-content')[0];
  const cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert('이미 장바구니에 있는 상품입니다!');
      return;
    }
  }

  const cartBoxContent = `
						<img src="${productImg}" alt="" class="cart-img">
						<div class="detail-box">
						<div class="cart-product-title">${title}</div>
						<div class="cart-price">${price}</div>
						<input type="number" value="1" class = "cart-quantity">
						</div>
						
						<i class="fa-solid fa-trash cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removeCartItem);
  cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener('change', quantityChanged);
}

//Update Total
function updatetotal() {
  const cartContent = document.getElementsByClassName('cart-content')[0];
  const cartBoxes = cartContent.getElementsByClassName('cart-box');
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName('cart-price')[0];
    const quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    const price = parseFloat(priceElement.innerText.replace('￦', ''));
    const quantity = quantityElement.value;
    total = total + price * quantity;
  }
  // If price Contain
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName('total-price')[0].innerText = '￦' + total;
}
