const body = document.querySelector("body"),
	open = document.querySelector(".toggle"),
	burgerOpen = document.querySelector(".bx-menu"),
	close = document.querySelector(".bx-x"),
	menu = document.querySelector(".header__nav");
[`resize`].forEach(it => {
	window.addEventListener(it, () => {
		const body = document.querySelector("body"),
			close = document.querySelector(".bx-x"),
			burgerOpen = document.querySelector(".bx-menu"),
			menu = document.querySelector(".header__nav");

		const pageWidth = document.documentElement.scrollWidth;
		if (pageWidth > 768) {
			body.classList.remove("no-skroll")
			close.classList.remove("close")
			menu.classList.remove("active")
			burgerOpen.classList.add("open");

		}
	});
});

open.addEventListener("click", function () {
	burgerOpen.classList.toggle("open");
	close.classList.toggle("close");
	menu.classList.toggle("active")
	body.classList.toggle("no-skroll")
})
