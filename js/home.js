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
