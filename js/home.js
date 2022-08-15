//rotate menu 구성
const frame = document.querySelector(".rotate_menu");
const list = frame.querySelectorAll("article");

for (let i = 0; i < list.length; i++) {
	list[i].style.transform = `rotate(${90 * i}deg) translateY(-15vw)`;
}

const next = document.querySelector(".btnNext");
const prev = document.querySelector(".btnPrev");
const bg = document.querySelectorAll(".bg");
let num = 0; //몇번 돌리는지 저장하는 변수
let active = 0;
// div 붙이는거 active 0~3 에 따라서 다르게 붙이면 될 듯.

const sulExplainList = document.querySelectorAll(".explain li");
prev.addEventListener("click", function () {
	frame.style.transform = `rotate(${90 * ++num}deg)`;

	if (active === 0) {
		active = 3;
	} else {
		active = active - 1;
	}

	for (let el of list) {
		el.classList.remove("on");
	}
	list[active].classList.add("on");

	for (let el of sulExplainList) {
		el.classList.remove("on");
	}
	sulExplainList[active].classList.add("on");
});

next.addEventListener("click", function () {
	frame.style.transform = `rotate(${90 * --num}deg)`;

	if (active === 3) {
		active = 0;
	} else {
		active = active + 1;
	}
	for (let el of list) {
		el.classList.remove("on");
	}
	list[active].classList.add("on");

	for (let el of sulExplainList) {
		el.classList.remove("on"); //일단 다 지움
	}
	sulExplainList[active].classList.add("on");
});

//hide menu 나오게 하기
const hideUp = document.querySelector(".hide_up");
const wrap = document.querySelector(".wrap");
const hideUpArrow = hideUp.querySelector("i");

let clickNum = 0;
hideUp.addEventListener("click", function () {
	const slo = document.querySelectorAll(".slo");
	sulExplainList[active].classList.add("on");
	if (clickNum % 2 == 0) {
		wrap.classList.remove("menuOn");
		hideUpArrow.style.transform = "rotate(180deg)";
		clickNum++;
		for (let el of slo) {
			el.style.display = "none";
		}
		for (let el of bg) {
			el.style.opacity = "0.3";
		}
	} else {
		wrap.classList.add("menuOn");
		hideUpArrow.style.transform = "rotate(360deg)";
		clickNum++;
		for (let el of sulExplainList) {
			el.classList.remove("on");
		}
		for (let el of slo) {
			el.style.display = "block";
		}
		for (let el of bg) {
			el.style.opacity = "1";
		}
	}
});

//wheel 이용- 휠 한 칸씩만 되는 문제를 해결하지 못함..
const figure = document.querySelector("figure");
let page = 0;
window.addEventListener("wheel", function (e) {
	const bgContent = figure.querySelectorAll(".bg");
	const bgContentLength = bgContent.length;

	let lastPage = bgContentLength - 1;
	if (e.deltaY > 0) {
		//아래로 내리는 동작
		console.log("아래로wheel 되는 중");
		if (page !== lastPage) {
			for (let el = 0; el < bgContentLength; el++) {
				if (bgContent[page].classList.contains("viewOn")) {
					bgContent[page].classList.remove("viewOn");
					console.log(bgContent[page + 1]);
					bgContent[page].classList.add("viewOutToUp");
					bgContent[page + 1].classList.add("viewOn");
					console.log(page);
				}
			}
			page++;
		} else if (page === lastPage) {
			page = lastPage;
		}
	} else if (e.deltaY < 0) {
		//위로 올리기
		console.log("위로wheel 되는 중");
		if (page !== 0) {
			for (let el = 0; el < bgContentLength; el++) {
				if (bgContent[page].classList.contains("viewOn")) {
					bgContent[page].classList.remove("viewOn");
					console.log("page:" + page);
					console.log(bgContent[page - 1]);
					bgContent[page - 1].classList.remove("viewOutToUp");
					bgContent[page - 1].classList.add("viewOn");
					console.log(bgContent[page - 1]);
				}
			}
			page--;
		} else if (page === 0) {
			console.log("(조금 비효율적인..)예외처리 완!!");
			return;
		}
	}
});

/* bg3 클릭시 정렬시키기 */ //글씨 효과 추가

const bg3 = document.querySelector(".bg3");
const floatItem = document.querySelectorAll(".float_item");
bg3.addEventListener("click", function () {
	const bg3AniSlogan = bg3.querySelector(".bg3--slogan");
	const bg3HideSlogan = bg3.querySelector(".bg3--slogan--hide");
	bg3AniSlogan.style.opacity = "0";
	bg3HideSlogan.style.opacity = "1";

	for (let i = 0; i < floatItem.length; i++) {
		floatItem[i].classList.add("on");
	}
	bg3.style.opacity = "1";

	console.log("클릭되는중");
	console.log(floatItem);
});

/* bg3 커서 */
let mouseCursor = document.querySelector(".cursor");

bg3.addEventListener("mouseover", function (e) {
	mouseCursor.style.left = e.pageX + "px";
	mouseCursor.style.top = e.pageY + "px";
});
//header쪽으로 가면 마우스 이미지 없애고 커서 pointer로 바뀌도록
let header = document.querySelector("header");
header.addEventListener("mouseover", function (e) {
	mouseCursor.style.display = "none";
});
header.addEventListener("mouseout", function (e) {
	mouseCursor.style.display = "block";
});

//첫 화면 bg0 는 window.onload 이용해서 걸어주기!
const bg0Slogan0 = document.querySelector(".bg0 .quote0");
const bg0Slogan1 = document.querySelector(".bg0 .quote1");

const bg1Slogan0 = document.querySelector(".bg1 .quote0");
const bg1Slogan1 = document.querySelector(".bg1 .quote1");
const bg2Slogan0 = document.querySelector(".bg2 .quote0");
const bg2Slogan1 = document.querySelector(".bg2 .quote1");
const bg3Slogan = document.querySelector(".bg3 .quote");

// mouseover될 변수 선언- 각 페이지별 사진이나 영상에 mouseover될 것
//bg0는 onload로 처리하니까 필요엄슴
const bgSrc1 = document.querySelector(".bg1 .bg_src");
const bgSrc2 = document.querySelector(".bg2 .bg_src");
const bgSrc3 = document.querySelector(".bg3 .bg_src");

window.onload = () => {
	bg0Slogan0.style.opacity = "1";
	bg0Slogan1.style.opacity = "1";
};

// mouseover로 처리하기
bgSrc1.addEventListener("mouseover", function () {
	bg1Slogan0.classList.add("on");
	bg1Slogan1.classList.add("on");
});
bgSrc2.addEventListener("mouseover", function () {
	bg2Slogan0.classList.add("on");
	bg2Slogan1.classList.add("on");
});


//src3은 클릭시 슬로건에 이벤트 줄거라서 위에서 한 번에 처리할 것

/* 돋보기 */
let glass = document.querySelector(".glass");
let searchWindow = document.querySelector("#search_window");
glass.addEventListener("click", function () {
	searchWindow.classList.add("searchOn");
	for (let el of bg) {
		el.style.opacity = "0.1";
		el.style.backgroundColor = "#fff";
	}
});

for (let el of bg) {
	el.addEventListener("click", function () {
		console.log("눌리는 중인감?");
		searchWindow.classList.remove("searchOn");
		for (let el of bg) {
			el.style.opacity = "1";
		}
	});
}

