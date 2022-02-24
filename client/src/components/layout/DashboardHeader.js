import { useEffect, useRef, useState } from "react";
import Header from "./styles/header-styled";

function DashboardHeader() {
	const [toggleMenu, setToggleMenu] = useState(false);

	let headerRef = useRef(null);
	// Sticky header
	// ----------------------------------------------------------------

	function handleScroll() {
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

	console.log(headerRef);

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	return <Header className="sticky-header" ref={headerRef}></Header>;
}

export default DashboardHeader;
