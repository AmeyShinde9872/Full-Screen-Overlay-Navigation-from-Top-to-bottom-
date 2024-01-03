

let myNav = document.getElementById("myNav");



let openBtn = document.querySelector(".openbtn");
openBtn.addEventListener("click",openNav)


let closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click",closeNav);

function openNav() {
	myNav.style.height = "100%";
}

function closeNav() {
	myNav.style.height = "0%";
}

