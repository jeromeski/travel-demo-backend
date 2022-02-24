export function handleScroll(headerRef) {
	const navbarFixed = headerRef.current;

	const page = document.querySelector("html");

	const controlSticky = () => {
		const doScroll = page.scrollTop;
		if (doScroll >= 10) {
			navbarFixed.classList.add("sticked");
		} else {
			navbarFixed.classList.remove("sticked");
		}
	};

	if (page.scrollTop > 94) {
		navbarFixed.classList.add("sticked");
	}

	["bind", "ready", "scroll"].forEach((evt) => {
		page.addEventListener(evt, controlSticky(), false);
	});
}
