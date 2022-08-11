//rotate menu 구성
const frame = document.querySelector(".rotate_menu");
const list = frame.querySelectorAll("article");

for (let i = 0; i < list.length; i++) {
	list[i].style.transform = `rotate(${90 * i}deg) translateY(-15vw)`;
}

const next = document.querySelector(".btnNext");
const prev = document.querySelector(".btnPrev");

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
		el.classList.remove("on"); //일단 다 지움
	}
	list[active].classList.add("on");

	for (let el of sulExplainList) {
		el.classList.remove("on");
		// sulExplainList[0].classList.add("on");
	}
	sulExplainList[active].classList.add("on");
});

next.addEventListener("click", function () {
	frame.style.transform = `rotate(${90 * --num}deg)`;

	if (active === 3) {
		// frame.style.transform = "rotate(-60*numdeg)";
		active = 0;
	} else {
		// frame.style.transform = `rotate(${-60 * ++num}deg)`;
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
	sulExplainList[active].classList.add("on");
	if (clickNum % 2 == 0) {
		// wrap.style.top = "0";
		// wrap.style.opacity = "1";
		wrap.classList.remove("menuOn");
		hideUpArrow.style.transform = "rotate(180deg)";
		clickNum++;
	} else {
		// wrap.style.top = "300px";
		// wrap.style.opacity = "0";
		wrap.classList.add("menuOn");
		hideUpArrow.style.transform = "rotate(360deg)";
		clickNum++;
		for (let el of sulExplainList) {
			el.classList.remove("on");
		}
	}
});

//GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

const tl = gsap.timeline();

// 전체 애니메이션을 스크롤에 기반해서 움직이게 해야하므로 ScrollTrigger 의 create 메서드로 트리거 생성
ScrollTrigger.create({
	animation: tl,
	trigger: "figure",
	start: "top top",
	end: "+=4000", //scroll이 4000px 동안 일어남
	markers: true,
	scrub: true,
	pin: true,
});

tl.from(".bg.bg1", { yPercent: -100, delay: 2 })
	.to(".bg.bg0", { yPercent: 100, delay: 0 }, "<")
	.from(".bg.bg2", { yPercent: -100, delay: 2 })
	.to(".bg.bg1", { yPercent: 100, delay: 0 }, "<")
	.from(".bg.bg3", { yPercent: -100, delay: 2 })
	.to(".bg.bg2", { yPercent: 100, delay: 0 }, "<");

/* 
//wheel 이용-첫번째 페이지와 마지막 페이지에서의 예외처리와 휠 한 칸씩만 되는 문제를 해결하지 못함..
const figure = document.querySelector("figure");
let page = 0;
window.addEventListener("wheel", function (e) {
	const bgContent = figure.querySelectorAll(".bg");
	const bgContentLength = bgContent.length;

	let lastPage = bgContentLength - 1;
	if (e.deltaY > 0) {
		//아래로 내리는 동작
		console.log("아래로wheel 되는 중");
		for (let el = 0; el < bgContentLength; el++) {
			if (bgContent[page].classList.contains("viewOn") && page !== lastPage) {
				bgContent[page].classList.remove("viewOn");
				console.log(bgContent[page + 1]);
				bgContent[page].classList.add("viewOutToUp");
				bgContent[page + 1].classList.add("viewOn");
				console.log(page);
			} else {
				console.log(page);
			}
		}
		++page;
	} else if (e.deltaY < 0) {
		//위로 올리기
		console.log("위로wheel 되는 중");
		for (let el = 0; el < bgContentLength; el++) {
			console.log(page);
			if (bgContent[page].classList.contains("viewOn") && page !== 0) {
				// if (video[page] === 0) return;
				bgContent[page].classList.remove("viewOn");
				console.log("page:" + page);
				console.log(bgContent[page - 1]);

				// bgContent[page].classList.add("viewOutToDown");
				bgContent[page - 1].classList.remove("viewOutToUp");
				bgContent[page - 1].classList.add("viewOn");
				console.log(bgContent[page - 1]);
			} else {
				console.log("예외처리 어떻게 하지ㅜ?");
			}
		}
		page--;
	}
});
 */
