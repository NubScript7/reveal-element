const p = document.getElementById("normalPharagraph");
p.style.width = `${document.body.clientWidth - 90}px`;

window.addEventListener("scroll",scroll);

function scroll() {
	let revealElements = document.querySelectorAll(".reveal");
	
	for(let i = 0; i < revealElements.length; i++) {
		let windowHeight = window.innerHeight;
		let revealTop = revealElements[i].getBoundingClientRect().top
		let revealPoint = 80;
		console.log(revealTop)
		if(revealTop < windowHeight - revealPoint) {
			revealElements[i].classList.add('active')
		} else {
			revealElements[i].classList.remove('active')
		}
	}
}
